<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello World"/>
    <MyFirstComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyFirstComponent from "./components/MyFirstComponent";

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyFirstComponent
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
