<template>
    <img class="responsive-img" :src="url" :alt="title">
</template>

<script>
export default {
    props: {
        url: String,
        title: String,
    }
}
</script>

<style scoped lang="scss">
    .responsive-img {
        width: 100%;
    }
</style>
