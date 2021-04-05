<template>
  <div>
    <h1 class="app-title">{{title}}</h1>
    <input type="search" class="filter" @input="filter = $event.target.value" placeholder="pesquisar">
    <ul class="list">
      <li class="list-item" v-for="foto in filterPics" :key="foto.id">
        <Card :title="foto.titulo">
          <ResponsiveImg 
            v-transform:scale.animate='1.2' 
            :url="foto.url" 
            :title="foto.titulo"
          />
          <Button 
            type="button" 
            name="x" 
            @btnFunction="remove(foto)"
            :confirmation='true'
            btnStyle="danger"
          />
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../components/Card"
import ResponsiveImg from "../components/ResponsiveImg"
import Button from "../components/Button";

export default {
  components: {
    Card,
    ResponsiveImg,
    Button
  },
  data() {
    return {
      title: 'AluraPic',
      fotos: [],
      filter: ''
    }
  },
  created() {
    this.$http.get(`http://localhost:3000/v1/fotos/`)
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
  },
  methods: {
    remove(picture) {
      this.$http.delete(`http://localhost:3000/v1/fotos/${picture._id}`)
        .then(() => {
          let i = this.fotos.indexOf(picture)
          this.fotos.splice(i, 1)
          alert(`foto ${picture.titulo} removida`)
        }, err => alert("Algo deu errado: " + err))
    }
  }
}
</script>

<style lang="scss">
  .app-title {
    text-align: center;
    margin: 32px 0;
  }
  .list {
    display: block;
    width: 80vw;
    list-style: none;
    margin: 0 auto;
  }
  .list .list-item {
    display: inline-block;
  }
  .filter {
    display: block;
    margin: 16px auto;
    height: 24px;
    width: 80vw;
  }
</style>
