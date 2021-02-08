<template>
    <div class="imgBtn">
        <img v-bind:src="imgSrc" alt="">
        <p> {{text}} </p>
    </div>
</template>

<script>
export default {
    name: "ImgBtn",
    props: {
        imgSrc: String,
        text: String
    }
}
</script>

<style scoped>
    .imgBtn {
        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 50px;
        width: 200px;
        padding: 15px 30px;
        margin: 10px auto;
    }
    .imgBtn > img{
        width: 30px;
        margin-right: 10px;
    }
</style>