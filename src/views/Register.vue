<script setup>
import { ref } from 'vue'
import { registerUser } from '../api/auth.js'
import '../assets/register.css'
import { getCsrfCookie } from '../api/csrf.js'
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const message = ref('')

async function handleRegister() {
  try {
    // Make sure CSRF cookie is set first
    await getCsrfCookie()

    const user = await registerUser(
      name.value,
      email.value,
      password.value,
      passwordConfirmation.value
    )
    message.value = `User ${user.name} registered successfully!`
  } catch (err) {
    // Show actual error from Laravel
    console.log(err) // check network/backend errors
    message.value = err.response?.data?.message || 'Registration failed'
  }
}
</script>

<template>
  <div class="register-page">
    <div class="registerForm">
    <h1>Rejestracja</h1>
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <input type="password" v-model="passwordConfirmation" placeholder="Confirm Password" />
    <button @click="handleRegister">Register</button>
    <p>{{ message }}</p>
    </div>
    
  </div>
</template>
