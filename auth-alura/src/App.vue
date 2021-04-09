<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  },
    computed: {
    isLogged () {
      return Boolean(localStorage.getItem('token'))
    }
  }
}
</script>

<style>

</style>
