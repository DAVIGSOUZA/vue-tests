<template>
  <div class="category">
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'Home' }" class="nav-button">
              Página inicial
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ category.title }}
          </li>
        </ol>
      </nav>
    </div>
    <div class="d-flex flex-wrap flex-md-nowrap mb-3">
      <SideBar :showFilter="true" :filter.sync="filter" class="side-bar mb-3 mb-md-0"/>
      <div class="content-wrapper container ml-3">
        <h2> {{ category.title }} </h2>
        <div class="pb-4">
          <hr class="d-none d-md-block">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-none d-md-block">
              <i class="active fas fa-th mx-1" @click="challengeMessage"></i>
              <i class="text-muted fas fa-th-list mx-1" @click="challengeMessage"></i>
            </div>
            <div class="d-flex">
              <span class="order-title text-muted px-3"> ORDENAR POR </span>
              <select class="order-select" name="" id="">
                <option value="">Maior preço</option>
                <option value="">Menor preço</option>
              </select>
            </div>
          </div>
          <hr class="d-none d-md-block">
        </div>
        <section class="products-container row">
          <template v-if="filter && filter.type">
            <div 
              v-for="product in filteredResults" 
              :key="product.id" 
              class="col-6 col-md-4 col-lg-3"
            >
              <ProductCard :product="product" />
            </div>
          </template>
          <template v-else>
            <div 
              v-for="product in category.products" 
              :key="product.id" 
              class="col-6 col-md-4 col-lg-3"
            >
              <ProductCard :product="product" />
            </div>
          </template>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import SideBar from "../components/SideBar.vue";
import axios from "axios";
import { challengeMessage, BASE_URL } from "../utils";


export default {
  name: 'Home',
  components: { 
    SideBar,
    ProductCard 
  },
  data () {
    return {
      camisetas: [],
      calcas: [],
      calcados: [],
      filter: {},
      filteredResults: []
    }
  },
  mounted () {
    for (let i = 1; i <= 3 ; i++) {
      axios.get(`${BASE_URL}${i}`)
      .then(res => {
          if (i === 1) {
            this.camisetas = res.data.items
          } else if (i === 2){
            this.calcas = res.data.items
          } else {
            this.calcados = res.data.items
          }
      })
    }
  },
  /* eslint-disable */
  watch: {
    category: function (newValue, oldValue) {
      this.filter = {}
    },
    filter: function (newValue, oldValue) {
      if (this.filter && this.filter.type === 'color') {
        this.filteredResults = []

        axios.get(`${BASE_URL}1`)
          .then(res => {
            this.filteredResults = res.data.items
          })
          .catch(err => console.log(err))

        axios.get(`${BASE_URL}3`)
          .then(res => {
            res.data.items.map(item => {
              this.filteredResults.push(item)
            })
            let filterResults = this.filteredResults.filter(product => product.filter[0].color === this.filter.value)
            this.filteredResults = filterResults
          })
          .catch(err => console.log(err))

      } else if (this.filter && this.filter.type === 'gender') {

        this.filteredResults = []

        axios.get(`${BASE_URL}2`)
          .then(res => {
            this.filteredResults = res.data.items
            let filterResults = this.filteredResults.filter(product => product.filter[0].gender === this.filter.value)
            this.filteredResults = filterResults
          })
          .catch(err => console.log(err))

      }
    }
  },
  /* eslint-disable */
  computed: {
    category () {
      let title = ''
      let products = []
      switch (this.$route.params.path) {
        case 'camisetas':
          products = this.camisetas
          title = 'Camisetas'
          break
        case 'calcas':
          products = this.calcas
          title = 'Calças'
          break
        case 'calcados':
          products = this.calcados
          title = 'Calçados'
          break
        default:
          break;
      }
      return { products, title }
    }
  },
  methods: {
    challengeMessage
  }
}
</script>

<style lang="scss">
.category {
  /* breadcrumbs active class*/
  .active {
    color: $primary
  }
  .nav-button {
    text-decoration: none;
    color: $black;
  }
  .side-bar {
    width: 300px;
    margin-right: 20px;
    @media (max-width: 767px) {
      width: 100%;
      margin-right: 0px;

    }
  }
  .content-wrapper {
    h2 {
      font-weight: 400;
      color: $primary
    }
    i {
      font-size: 32px;
      color: $black;
    }
    i:hover {
      cursor: pointer
    }
    .active {
      color: $secondary;
    }
    .order-title {
      @media (max-width: 320px) {
        font-size: 14px;
      }
    }
    .order-select {
      width: 160px
    }
  }

}

</style>