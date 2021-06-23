<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-toggle target="nav-collapse" class="mobile-collapse">
        <i class="fas fa-bars"></i> 
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="mobile-menu">
        <b-navbar-nav>
          <!-- itens do menu -->
          <div class="d-flex flex-column"> 
            <b-nav-item>
              <router-link  :to="{ name: 'Home' }" class="mobile-button m-3">
                PÁGINA INICIAL
              </router-link>  
            </b-nav-item>

            <b-nav-item
              v-for="category in categories" 
              :key="category.id" 
            >
              <router-link 
              :to="{ name: 'Category', params: { path: category.path } }"
              class="mobile-button m-3"
              >
                <span> {{ category.name.toUpperCase() }}  </span>
              </router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link  :to="{ name: 'Contact' }" class="mobile-button m-3">
                  CONTATO
              </router-link>
            </b-nav-item>
          </div>
          <!-- itens do menu -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    categories: Array
  }
}
</script>

<style lang="scss">
.mobile-collapse {
  border: none !important;
  position: relative;
}
.mobile-menu {
  position: absolute;
  background-color: $primary;
  top: 50px;
  z-index: 1;
  width: 80vw;
  .mobile-button {
      text-decoration: none;
      color: white;
      font-weight: 800;
  }
  .mobile-button:hover {
      color: $light-gray;
  }
}
</style>









