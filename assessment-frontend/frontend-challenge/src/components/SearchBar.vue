<template>
    <div>
        <div class="search-bar d-none d-md-block">
            <input type="search" class="px-3">
            <button class="py-2 px-4"> BUSCAR </button>
        </div>
        <div class="d-md-none">
            <b-navbar toggleable="lg">
                <b-navbar-toggle target="search-collapse" class="mobile-collapse">
                   <i class="fas fa-search"></i>
                </b-navbar-toggle>

                <b-collapse id="search-collapse" is-nav class="mobile-menu">
                    <b-navbar-nav>
                        <b-nav-form>
                            <div class="d-flex">
                                <b-form-input 
                                    type="search" 
                                    size="sm" 
                                    class="mr-sm-2 m-2" 
                                    placeholder="Pesquisar"
                                ></b-form-input>
                                <b-button size="sm" class="m-2"> BUSCAR </b-button>
                            </div>
                        </b-nav-form>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style lang="scss" scoped>
.search-bar {
    input {
        height: 40px;
        width: 340px;
    }
    button {
        border: none;
        font-weight: 800;
        background-color: #CC0D1F;
        color: white;

    }
}
.mobile-collapse {
  border: none !important;
  position: relative;
}
.mobile-menu {
  position: absolute;
  background-color: $primary;
  top: 50px;
  right: 0;
  z-index: 1;
  width: 80vw;
}
</style>