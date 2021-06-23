<template>
  <div id="app">
    <div>
      <Header/>
      <div class="content-wrapper px-4 mb-3">
        <router-view/>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');

* {
  margin: 0;
  padding: 0;
  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .content-wrapper {
      @media (min-width: 1440px) {
          width: $widescreen;
          margin: 0 auto 0 auto;
      }
    }
  }

}

</style>
