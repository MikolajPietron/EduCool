import api from './api'  

export async function registerUser(name, email, password, password_confirmation) {
  try {
    const response = await api.post('/api/register', { name, email, password, password_confirmation })
    return response.data
  } catch (err) {
    throw err.response?.data || err
  }
}
export async function getCsrfCookie() {
  await api.get('/sanctum/csrf-cookie')
}
export async function getUser() {
  const response = await api.get('/api/user'); 
  return response.data;
}


export async function loginUser(email, password) {
  try {
    const response = await api.post('/api/login', { email, password });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err.response?.data || err;
  }
}

export async function logoutUser() {
  await api.post('/api/logout')
}
