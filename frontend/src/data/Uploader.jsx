import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { subtractDates } from "../utils/helpers";
import { bookings } from "./data-bookings";
import { cabins } from "./data-cabins";
import { guests } from "./data-guests";
import Button from "../ui/Button";

const API_URL = import.meta.env.VITE_API_URL;

async function deleteGuests() {
  const response = await fetch(`${API_URL}/api/guests/`, {
    method: 'DELETE'
  });
  if (!response.ok) console.log("Error deleting guests");
}

async function deleteCabins() {
  const response = await fetch(`${API_URL}/api/cabins/`, {
    method: 'DELETE'
  });
  if (!response.ok) console.log("Error deleting cabins");
}

async function deleteBookings() {
  const response = await fetch(`${API_URL}/api/bookings/`, {
    method: 'DELETE'
  });
  if (!response.ok) console.log("Error deleting bookings");
}

async function deleteSettings() {
  const response = await fetch(`${API_URL}/api/settings/`, {
    method: 'DELETE'
  });
  if (!response.ok) console.log("Error deleting settings");
}

async function createGuests() {
  const response = await fetch(`${API_URL}/api/guests/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guests)
  });
  if (!response.ok) console.log("Error creating guests");
}

async function createCabins() {
  const response = await fetch(`${API_URL}/api/cabins/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cabins)
  });
  if (!response.ok) console.log("Error creating cabins");
}

async function createSettings() {
  const originalSettings = {
    minBookingLength: 3,
    maxBookingLength: 30,
    maxGuestsPerBooking: 10,
    breakfastPrice: 15,
  };

  const response = await fetch(`${API_URL}/api/settings/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(originalSettings)
  });
  if (!response.ok) console.log("Error creating settings");
}

async function createBookings(onSuccess) {
  const guestsResponse = await fetch(`${API_URL}/api/guests/`);
  const cabinsResponse = await fetch(`${API_URL}/api/cabins/`);
  
  const guestsData = await guestsResponse.json();
  const cabinsData = await cabinsResponse.json();

  const allGuestIds = guestsData.map(guest => guest.id);
  const allCabinIds = cabinsData.map(cabin => cabin.id);

  const finalBookings = bookings.map((booking) => {
    const cabin = cabins.at(booking.cabinId - 1);
    const numNights = subtractDates(booking.endDate, booking.startDate);
    const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
    const extrasPrice = booking.hasBreakfast ? numNights * 15 * booking.numGuests : 0; 
    const totalPrice = cabinPrice + extrasPrice;

    let status;
    if (isPast(new Date(booking.endDate)) && !isToday(new Date(booking.endDate)))
      status = "checked-out";
    if (isFuture(new Date(booking.startDate)) || isToday(new Date(booking.startDate)))
      status = "unconfirmed";
    if ((isFuture(new Date(booking.endDate)) || isToday(new Date(booking.endDate))) && 
        isPast(new Date(booking.startDate)) && !isToday(new Date(booking.startDate)))
      status = "checked-in";

    return {
      ...booking,
      numNights,
      cabinPrice,
      extrasPrice,
      totalPrice,
      guestId: allGuestIds.at(booking.guestId - 1),
      cabinId: allCabinIds.at(booking.cabinId - 1),
      status,
    };
  });

  const response = await fetch(`${API_URL}/api/bookings/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(finalBookings)
  });

  if (!response.ok) {
    console.log("Error creating bookings");
    return;
  }

  if (typeof onSuccess === 'function') {
    onSuccess();
  }
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function uploadAll() {
    setIsLoading(true);
    await deleteBookings();
    await deleteCabins();
    await deleteGuests();
    deleteSettings()

    await createGuests();
    await createCabins();
    await createSettings();
    await createBookings(() => navigate("/dashboard"));

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings(() => navigate("/dashboard"));
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "var(--color-grey-0)",
        padding: "1.5rem",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>

    </div>
  );
}

export default Uploader;
