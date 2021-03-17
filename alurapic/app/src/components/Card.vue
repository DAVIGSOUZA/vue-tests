<template>
   <div class="card">
    <h2 class="card-title" @click="showPic = !showPic">{{title}}</h2>
    <transition name="card-fade">
      <div v-show="showPic" class="card-img-container">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      showPic: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
    padding: 0 auto;
    border: 2px solid gray;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px gray;
    width: 200px;
    vertical-align: top;
    text-align: center;
  }
  .card .card-title {
    text-align: center;
    border: solid 2px;
    background-color: lightblue;
    margin: 0 0 15px 0;
    padding: 10px; 
    text-transform: uppercase;
  }
  .card-fade-enter, .card-fade-leave-active{
    opacity: 0;
  }
  .card-fade-enter-active, .card-fade-leave-active{
    transition: 0.25s;
  }
</style>
