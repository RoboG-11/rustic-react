const API_URL = import.meta.env.VITE_API_URL;

export async function getBookings() {
  const response = await fetch(`${API_URL}/api/bookings/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Bookings could not be loaded");
  const data = await response.json();
  return { data, count: data.length };
}

export async function getBooking(id) {
  const response = await fetch(`${API_URL}/api/bookings/${id}/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Booking not found");
  return response.json();
}

export async function getBookingsAfterDate(date) {
  const response = await fetch(`${API_URL}/api/bookings/after-date/${date}/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Bookings could not be loaded");
  return response.json();
}

export async function getStaysAfterDate(date) {
  const response = await fetch(`${API_URL}/api/bookings/stays/${date}/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Bookings could not be loaded");
  return response.json();
}

export async function getStaysTodayActivity() {
  const response = await fetch(`${API_URL}/api/bookings/today-activity/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Bookings could not be loaded");
  return response.json();
}

export async function updateBooking(id, obj) {
  const response = await fetch(`${API_URL}/api/bookings/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(obj)
  });

  if (!response.ok) throw new Error("Booking could not be updated");
  return response.json();
}

export async function deleteBooking(id) {
  const response = await fetch(`${API_URL}/api/bookings/${id}/`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Booking could not be deleted");
  return null;
}

export async function createBooking(newBooking) {
  const response = await fetch(`${API_URL}/api/bookings/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(newBooking)
  });

  if (!response.ok) throw new Error("Booking could not be created");
  return response.json();
}

export async function updateAllColumnsBooking(bookingId, newBookingData) {
  const response = await fetch(`${API_URL}/api/bookings/${bookingId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(newBookingData)
  });

  if (!response.ok) throw new Error("Booking could not be updated");
  return response.json();
}


export async function getBookingsByCabin(cabinId) {
  const response = await fetch(`${API_URL}/api/bookings/cabin/${cabinId}/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) throw new Error("Bookings could not be loaded");
  return response.json();
}


