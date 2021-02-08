<template>
    <div class="bigCard">
        <img v-bind:src="imgSrc" alt="">
        <div>
            <h4>{{name}}</h4>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BigCard",
    props: {
        name: String,
        description: String,
        imgSrc: String
    }
}
</script>

<style scoped>
.bigCard {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
}

img {
    width: 70px;
    margin-right: 10px;
}

.bigCard h4 {
    margin-bottom: 15px;
}

.bigCard > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}

</style>