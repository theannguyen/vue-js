<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div id="app">

    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <RouterLink class="nav-link" to="/home">Home</RouterLink>
        <form class="d-flex">
          <RouterLink class="nav-link" to="/login">Login</RouterLink>
          <RouterLink class="nav-link" to="/register">Register</RouterLink>
        </form>
      </div>
    </nav>
    <br>
    <br>
    <br>
    <RouterView />
  </div>
</template>

<style scoped>
@import url('http://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

* {
  box-sizing: border-box;
}

body {
  background: #1C8EF9;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
  width: 100%;
  height: 100%;
}

/* .navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
} */


.wrapper:focus {
  border-color: #167bff;
  box-shadow: none;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 0rem;
  }
}
</style>
