<template>
  <div class="body">
    <AppBar/>
    <transition name='page'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
export default {
  components: {
    AppBar
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
  }
  .page-enter, .page-leave-active{
    opacity: 0;
  }
  .page-enter-active {
    transition: 0.5s;
  }
</style>
