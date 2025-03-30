const API_URL = import.meta.env.VITE_API_URL;

export async function signup({ fullName, email, password }) {
  const response = await fetch(`${API_URL}/api/auth/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ full_name: fullName, email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Error en signup");
  }
  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
}

export async function login({ email, password }) {
  const response = await fetch(`${API_URL}/api/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error during login');
  }

  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  console.log(data);

  return data;
}

export async function getCurrentUser() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const response = await fetch(`${API_URL}/api/auth/user/`, {
    headers: {
      'Authorization': `Token ${token}`
    }
  });

  if (!response.ok) {
    localStorage.removeItem('token');
    return null;
  }

  const data = await response.json();
  return data;
}

export async function logout() {
  const token = localStorage.getItem('token');
  if (!token) return;

  const response = await fetch(`${API_URL}/api/auth/logout/`, {
    method: 'POST',
    headers: {
      'Authorization': `Token ${token}` 
    }
  });

  localStorage.removeItem('token');
  return response.ok;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');

  const formData = new FormData();
  if (password) formData.append('password', password);
  if (fullName) formData.append('full_name', fullName);
  if (avatar) formData.append('avatar', avatar);

  const response = await fetch(`${API_URL}/api/auth/update/`, {
    method: 'PUT',
    headers: {
      'Authorization': `Token ${token}`
    },
    body: formData
  });

  if (!response.ok) throw new Error('Failed to update user');
  return response.json();
}

export async function resetPassword(email) {
  let redirectUrl;
  if (import.meta.env.DEV) redirectUrl = import.meta.env.VITE_DEV_REDIRECT_URL;
  if (import.meta.env.PROD) redirectUrl = import.meta.env.VITE_PROD_REDIRECT_URL;

  const response = await fetch(`${API_URL}/api/auth/reset-password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, redirect_url: redirectUrl })
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Error resetting password');
  return data;
}

export async function changePassword(newPassword) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(`${API_URL}/api/auth/change-password/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ password: newPassword })
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Error changing password');
  return data;
}