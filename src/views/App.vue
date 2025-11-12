<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div id="app">
   
    <header id="header">
      <div class="header-logo">
        <img src="/header-logo.svg" alt="Logo">
      </div>
      <nav id="header-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Pricing</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
      <div id="header-login">
        <router-link to="/login">Sign in</router-link>
        <button id="login-btn" type="button" @click="router.push('/login')">Login</button>
      </div>
    </header>

    
    <router-view />
  </div>
</template>

<script setup>
</script>
