<script setup>
import { ref } from 'vue'
import { loginUser } from '../api/auth.js'
import { getCsrfCookie } from '../api/csrf.js'
import { getUser } from '../api/auth.js'
import { useRouter } from 'vue-router'


const router = useRouter()
const email = ref('')
const password = ref('')
const message = ref('')
const user = ref(null)
async function handleLogin() {
  try {
    await getCsrfCookie() 
    const response = await loginUser(email.value, password.value)
    message.value = response.message
    await router.push("/")
    user.value = await getUser()
    
    
  } catch (err) {
    message.value = err.message || 'Login failed'
  }
}
</script>

<template>
  <div class="login-page">
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="handleLogin">Login</button>
    <p>{{ message }}</p>
  </div>
</template>