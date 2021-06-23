<template>
    <nav class="nav-bar py-3">
        <div class="content-wrapper px-4">
            <router-link  :to="{ name: 'Home' }" class="nav-button py-3">
                PÁGINA INICIAL
            </router-link>

            <router-link 
                v-for="category in categories" 
                :key="category.id" 
                :to="{ name: 'Category', params: { path: category.path } }"
                class="nav-button"
            >
                <span class="m-3"> {{ category.name.toUpperCase() }}  </span>
            </router-link>

            <router-link  :to="{ name: 'Contact' }" class="nav-button">
                CONTATO
            </router-link>
        </div>
    </nav>
    

</template>

<script>
export default {
    name: 'NavBar',
    props: {
        categories: Array
    }
}
</script>

<style lang="scss">
.nav-bar {
    background-color: $primary;
    .content-wrapper {
        @media (min-width: 1440px) {
            width: $widescreen;
            margin: 0 auto 0 auto;
        }
    }
    .nav-button {
        text-decoration: none;
        color: white;
        font-weight: 800;
    }
    .nav-button:hover {
        color: $light-gray;
    }
}
</style>