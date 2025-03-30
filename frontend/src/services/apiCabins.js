const API_URL = import.meta.env.VITE_API_URL;

export async function getAllCabins() {
  const response = await fetch(`${API_URL}/api/cabins/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error("Cabins could not be loaded");
  }
  return response.json();
}

export async function createEditCabin(newCabin, id) {
  const formData = new FormData();
  Object.keys(newCabin).forEach(key => {
    if (key === 'image' && typeof newCabin[key] !== 'string') {
      formData.append(key, newCabin[key]);
    } else {
      formData.append(key, newCabin[key]);
    }
  });

  const url = id 
    ? `${API_URL}/api/cabins/${id}/` 
    : `${API_URL}/api/cabins/`;

  const response = await fetch(url, {
    method: id ? 'PUT' : 'POST',
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error(id ? "Cabin could not be updated" : "Cabin could not be created");
  }

  return response.json();
}

export async function deleteCabin(id) {
  const response = await fetch(`${API_URL}/api/cabins/${id}/`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error("Cabin could not be deleted");
  }

  return null;
}