<template>
    <div class=sDiv>
        <p>Meu primeiro componente</p>
        <p class=toDo> Futuramente quero que ele tenha um input que mude a mensagem do componente hello world</p>
    </div>
</template>

<script>
export default {
  name: 'MyFirstComponent',
}
</script>

<style scoped>
.sDiv {
    margin: 0;
    padding: 0;
    border: 1px solid black;
}
.toDo {
    background-color: lightcoral;
    padding: 5px;
    /* color: whitesmoke; */
    font-weight: bold;
}

</style>