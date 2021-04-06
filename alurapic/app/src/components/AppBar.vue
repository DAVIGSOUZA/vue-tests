<template>
    <nav>
        <ul class="app-bar">
            <li v-for="route in routes" :key="route.path">
                <router-link class="nav-item" :to="route.path">{{route.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { routes } from "../routes";

export default {
  data() {
    return {
      routes: routes.filter(route => route.menu)      
    }
  }
}
</script>

<style scoped lang="scss">
    .app-bar {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        height: 40px;
        background-color: lightgray;
        border-bottom: 1px solid black;
        box-shadow: 5px 5px 10px gray;
    }
    .nav-item {
        text-decoration: none;
        font-weight: 600;
    }
</style>