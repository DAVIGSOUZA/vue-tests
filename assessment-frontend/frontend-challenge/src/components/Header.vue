<template>
    <header class="header mb-3">
        <div class="register-wrapper" @click="challengeMessage">
            <div class="register d-flex justify-content-center justify-content-md-end py-1 px-4">
                <router-link :to="{ name: 'Home' }" class="register-button px-1">
                    <span> Acesse sua Conta </span>
                </router-link>
                <span class="px-1"> ou </span>
                <router-link :to="{ name: 'Home' }" class="register-button px-1">
                    <span> Cadastre-se </span>
                </router-link>
            </div>
        </div>
        <div class="header-wrapper d-flex justify-content-between align-items-center py-4 px-4">
            <!-- <i class="d-md-none fas fa-bars"></i> -->
            <MobileMenu :categories="categories" class="d-md-none"/>
            <router-link :to="{ name: 'Home' }" class="logo-wrapper">
                <h1>
                    <img src="@/assets/logo_webjump.png" alt="Webjump">
                    <span class="subtitle"> more than just a platform </span>
                </h1>
            </router-link>
            <!-- <i class="d-md-none fas fa-search"></i> -->
            <!-- <SearchBar class="d-none d-md-block"/> -->
            <SearchBar/>
        </div>
        <div>
            <NavBar :categories="categories" class="d-none d-md-block"/>
        </div>
    </header>
</template>

<script>
import NavBar from "./NavBar.vue";
import SearchBar from './SearchBar.vue';
import axios from 'axios';
import { challengeMessage, BASE_URL } from "../utils";
import MobileMenu from './MobileMenu.vue';

export default {
    name: 'Header',
    components: {
        NavBar,
        SearchBar,
        MobileMenu
    },
    data () {
        return {
            categories: []
        }
    },
    mounted () {
        axios.get(`${BASE_URL}list`)
        .then(res => {
            this.categories = res.data.items
        })
    },
    methods: {
        challengeMessage
    }
}
</script>

<style lang="scss">
.header {
    .register-wrapper {
        background-color: $black;
        color: white;
        @media (max-width: 768px) {
            font-size: 12px;
        }
        .register {
            @media (min-width: 1440px) {
                width: $widescreen;
                margin: 0 auto 0 auto;
            }
            .register-button {
                color: white;
                font-weight: 800;
                /* font-size: 16px; */
            }
        }
    }
    .header-wrapper {
        .logo-wrapper {
            width: 160px;
            text-decoration: none;
            position: relative;
            img {
                width: 100%;
            }
            .subtitle {
                top: 42px;
                left: 0;
                width: 100%;
                position: absolute;
                font-size: 10px;
                font-weight: 800;
                color: #262223;

            }
        }
        i {
            font-size: 32px;
            color: $black;
        }
        i:hover {
            color: $primary;
        }
        @media (min-width: 1440px) {
            width: $widescreen;
            margin: 0 auto 0 auto;
        }
    }
}
</style>