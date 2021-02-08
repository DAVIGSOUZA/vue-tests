<template>
    <div class="smallCard">
        <div>
            <h4>{{text}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "SmallCard",
    props: {
        text: String,
    }
}
</script>

<style scoped>
.smallCard {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 40px;
}

img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.smallCard h4 {
    margin: 15px;
}

.smallCard > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    margin-right: 10px;
}

</style>