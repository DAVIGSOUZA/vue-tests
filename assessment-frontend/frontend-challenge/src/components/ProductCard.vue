<template>
  <div class="product-card d-flex flex-column justify-content-between mb-4">
        <div class="img-container mb-3">
            <img :src="require(`../../public/${product.image}`)" :alt="product.name">
        </div>
        <h2 class="text-muted text-center"> 
            {{product.name.toUpperCase() }} 
        </h2>
        <div class="d-flex flex-wrap justify-content-center align-items-center">
            <span 
                class="m-1" 
                :class="validPrice"
            > 
                R${{ priceTag(product.price) }} 
            </span>
            <span 
                v-show="product && product.specialPrice" 
                class="price m-1"
            > 
                R${{ priceTag(product.specialPrice) }} 
            </span>
        </div>
        <button @click="challengeMessage" class="cta-btn d-none d-md-block py-2 px-3"> 
            COMPRAR 
        </button>
  </div>
</template>

<script>
import { challengeMessage } from "../utils";

export default {
    name: 'ProductCard.vue',
    props: {
        product: Object
    },
    computed: {
        validPrice () {
            return this.product && !this.product.specialPrice 
                ? 'price' 
                : 'old-price text-muted'
        }
    },
    methods: {
        challengeMessage,
        priceTag(price) {
            return price ? price.toFixed(2).toString().replace('.', ',') : null
        }
    }

}
</script>

<style lang='scss'>
.product-card {
    max-width: 200px;
    .img-container {
        border: 1px solid lightgray;
        border-radius: 2px;
        max-width: 200px;
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            @media (max-width: 320px) {
                height: 140px;
            }
            @media (min-width: 321px) and (max-width: 768px) {
                height: 160px;
            }
            @media (min-width: 769px) and (max-width: 1024px) {
                height: 180px;
            }
        }
    }
    h2 {
        min-height: 50px;
        font-size: 20px;
        @media (max-width: 320px) {
            font-size: 16px;
        }
    }
    .price {
        color: $primary;
        font-weight: 800;
        font-size: 22px;
        @media (max-width: 320px) {
            font-size: 18px;
        }
    }
    .old-price {
        text-decoration: line-through;
        font-size: 20px;
        @media (max-width: 320px) {
            font-size: 16px;
        }
    }
    .cta-btn {
        width: 100%;
        border: none;
        border-radius: 4px;
        font-weight: 800;
        background-color: $secondary;
        color: white;
    }
    .cta-btn:hover {
        background-color: $aqua;
    }
    .cta-btn:active {
        transform: scale(0.9);
    }

}
</style>