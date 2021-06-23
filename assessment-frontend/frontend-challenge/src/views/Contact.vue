<template>
  <div class="home d-flex mb-3">
      <SideBar class="side-bar d-none d-md-block"/>
      <div class="content-wrapper flex-fill">
        <div class="banner mb-3"></div>
        <section>
          <h2>
            Davi Garcia de Souza
          </h2>
          <div>
            <i class="fas fa-envelope mx-1"></i>
            <span>davigs@hotmail.com</span>
          </div>
          <div>
            <i class="fab fa-whatsapp mx-1"></i>
            <span>(27) 99955-7438</span>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/davi-garcia-souza/" target="_blank">
              <i class="fab fa-linkedin mx-1"></i>
              <span>Linkedin</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/DAVIGSOUZA" target="_blank">
              <i class="fab fa-github mx-1"></i>
              <span>Github</span>
            </a>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: 'Home',
  components: { SideBar },

}
</script>

<style lang="scss">
.home {
  .side-bar {
    min-width: 200px;
    margin-right: 20px;
  }
  .banner {
    width: 100%;
    background-color: #ACACAC;
    height: 200px;
    @media (max-width: 320px) {
      height: 100px;
    }
  }
  h3 {
    font-weight: 400;
  }
}

</style>