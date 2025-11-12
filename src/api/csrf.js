import api from './api'

export async function getCsrfCookie() {
  await api.get('/sanctum/csrf-cookie')
}