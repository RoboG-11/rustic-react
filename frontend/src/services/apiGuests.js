import { PAGE_SIZE } from "../utils/constants";

const API_URL = import.meta.env.VITE_API_URL;

export async function getAllGuests() {
  const response = await fetch(`${API_URL}/api/guests/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Guests could not be loaded");
  return response.json();
}

export async function getGuests({ sortBy, page }) {
  let url = `${API_URL}/api/guests/?`;

  if (sortBy) {
    url += `ordering=${sortBy.direction === "asc" ? "" : "-"}${sortBy.field}&`;
  }

  if (page) {
    const offset = (page - 1) * PAGE_SIZE;
    url += `limit=${PAGE_SIZE}&offset=${offset}`;
  }

  const response = await fetch(url, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Guests could not be loaded");
  const data = await response.json();
  return { data: data.results, count: data.count };
}

export async function getGuestsWithBookings({ filter, sortBy, page }) {
  let url = `${API_URL}/api/guests/with-bookings/?`;

  if (filter) {
    url += `filter_field=${filter.field}&filter_value=${filter.value}&filter_method=${filter.method || "eq"}&`;
  }

  if (sortBy) {
    url += `ordering=${sortBy.direction === "asc" ? "" : "-"}${sortBy.field}&`;
  }

  if (page) {
    const offset = (page - 1) * PAGE_SIZE;
    url += `limit=${PAGE_SIZE}&offset=${offset}`;
  }

  const response = await fetch(url, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Guests could not be loaded");
  const data = await response.json();
  return { data: data.results, count: data.count };
}

export async function createGuest(newGuest) {
  const response = await fetch(`${API_URL}/api/guests/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(newGuest)
  });

  if (!response.ok) throw new Error("Guest could not be created");
  return response.json();
}

export async function updateGuest(id, newGuestData) {
  const response = await fetch(`${API_URL}/api/guests/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(newGuestData)
  });

  if (!response.ok) throw new Error("Guest could not be updated");
  return response.json();
}

export async function deleteGuest(id) {
  const response = await fetch(`${API_URL}/api/guests/${id}/`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Guest could not be deleted");
  return null;
}