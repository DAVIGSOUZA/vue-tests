<template>
    <div class=container>
        <img v-bind:src="icon" alt="Ícone" v-on:click="onClickIcon">
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
    name: "Counter",
    props: {
        counter: Number,
        icon: String,  
    },
    methods: {
        onClickIcon() {
            this.$emit("icon-click")
        }
    }
}
</script>

<style scoped>
    .container {
        display: flex;
    }

    .container img {
        cursor: pointer;
        margin-right: 5px;
    }
</style>