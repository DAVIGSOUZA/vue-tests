<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/login">Login</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/cadastro" class="nav-link">Criar conta</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LoggedOutOptions'
}
</script>

<style>

</style>