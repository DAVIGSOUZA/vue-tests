<template>
  <div class="body">
    <h1 class="app-title">{{title}}</h1>
    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="pesquisar">
    <ul class="list">
      <li class="list-item" v-for="foto in filterPics" :key="foto.id">
        <Card :title="foto.titulo">
          <ResponsiveImg :url="foto.url" :title="foto.titulo"/>
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./components/Card"
import ResponsiveImg from "./components/ResponsiveImg"


export default {
  components: {
    Card,
    ResponsiveImg
  },
  data() {
    return {
      title: 'AluraPic',
      fotos: [],
      filter: ''
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err))
  },
  computed: {
    filterPics() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i')
        return this.fotos.filter(foto => exp.test(foto.titulo))
      } else {
        return this.fotos
      }
    }
  }
  
}
</script>

<style lang="scss">
  .body {
    font-family: Helvetica, sans-serif;
    width: 96vw;
    margin: 0 auto;
  }
  .app-title {
    text-align: center;
  }
  .list {
    list-style: none;
  }
  .list .list-item {
    display: inline-block;
  }
  .filter {
    display: block;
    width: 100%;
  }
</style>
