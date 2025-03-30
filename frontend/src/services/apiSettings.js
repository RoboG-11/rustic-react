const API_URL = import.meta.env.VITE_API_URL;

export async function getSettings() {
  const response = await fetch(`${API_URL}/api/settings/`, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });

  if (!response.ok) {
    throw new Error("Settings could not be loaded");
  }

  const data = await response.json();
  return data;
}

export async function updateSetting(newSetting) {
  const response = await fetch(`${API_URL}/api/settings/1/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(newSetting)
  });

  if (!response.ok) {
    throw new Error("Settings could not be updated");
  }

  return response.json();
}
