<template>
    <div>
        <div v-if="showFilter" class="filter-wrapper p-3">
            <p class="title">FILTRE POR</p>
            <p class="subtitle mb-0">CATEGORIAS</p>
            <ul class="mb-5">
               <li v-for="category in categories" :key="category.id" class="pt-3">
                    <router-link 
                        :to="{ name: 'Category', params: { path: category.path } }"
                        class="text-muted filter-button"
                    >
                        <span> {{ category.name }} </span>
                    </router-link>
                </li>
            </ul>
            <p class="subtitle mb-0"> CORES </p>
            <div class="d-flex flex-wrap mb-5">
                <button 
                    class="color-option m-1" 
                    v-for="color in colorFilterOptions" 
                    :key="color.name"
                    @click="setFilter(color.name, 'color')"
                    :style="{ 'background-color': color.value }"
                ></button>
            </div>
            <p class="subtitle mb-0"> GÊNERO </p>
            <ul>
               <li class="text-muted filter-button pt-3" @click="setFilter('Masculina', 'gender')">
                    Masculino
                </li>
                <li class="text-muted filter-button pt-3" @click="setFilter('Feminina', 'gender')">
                    Feminino
                </li>
            </ul>
        </div>
        <nav v-else class="nav-wrapper">
            <ul>
                <li class="pt-3">
                    <router-link  :to="{ name: 'Home' }" class="nav-button">
                        <span> Página Inicial </span>
                    </router-link>
                </li>
                <li v-for="category in categories" :key="category.id" class="pt-3">
                    <router-link 
                        :to="{ name: 'Category', params: { path: category.path } }"
                        class="nav-button"
                    >
                        <span> {{ category.name }} </span>
                    </router-link>
                </li>
                <li class="pt-3">
                    <router-link  :to="{ name: 'Contact' }" class="nav-button">
                        <span> Contato </span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script>
import axios from 'axios'
import { colorFilterOptions, BASE_URL } from "../utils";

export default {
    name: 'side-bar',
    props: {
        showFilter: Boolean
    },
    data () {
        return {
            categories: [],
            colorFilterOptions,
            filter: {}
        }
    },
    mounted () {
        axios.get(`${BASE_URL}list`)
        .then(res => {
            this.categories = res.data.items
        })
    },
    methods: {
        setFilter (value, type) {
            this.filter = { value: value, type: type }
            this.$emit('update:filter', this.filter)
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-wrapper {
    border: 1px solid lightgray;
    .title {
        color: $primary;
        font-weight: 800;
        font-size: 22px;
    }
    .subtitle {
        color: $secondary;
        font-weight: 800;
        font-size: 18px;
    }
    .filter-button {
        text-decoration: none;
    }
    .filter-button:hover {
        cursor: pointer;
        color: $primary !important;
    }
    .filter-button:focus {
        color: $primary;
    }
    .color-option {
        border: none;
        width: 48px;
        height: 32px;
    }
    .color-option:hover {
        transform: scale(1.1);
    }
    .color-option:active {
        transform: scale(0.9);
    }
    .color-option:focus {
        border: 2px black solid;
    }
 
}
.nav-wrapper {
    background-color: $light-gray;
    height: 100%;
    .nav-button {
        text-decoration: none;
        color: $black;
    }
    .nav-button:hover {
        color: $primary;
    }
}
</style>