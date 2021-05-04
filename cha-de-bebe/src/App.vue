<template>
  <div id="app">
    <!-- <img  class="imagem" src="./assets/sapato.jpg" alt=""> -->
    <h1 class="title">
      CHÁ DE FRALDA DO DANIEL
    </h1>
    <div class="texto">
      <p>
        texto falando das coisa dlçasdlçabnclç
        aslcnasclçasnklçascklasc

        aklçcnaslçcnaklçnasklçcasncklçasn
          asklcnasklçcasnklascn
      </p>
    </div>
    <div class="produtos">
      <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>

      <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>

      <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>     
      <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>
    </div>
    <div class="produtos">
       <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>

      <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>

      <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>     
      <div class="card">
        <img src="" alt="imagem">
        <p>descrição do proguto</p>
        <p>R$ 99,00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-image: url("./assets/sapato.jpg");
  background-size: cover;
}

.title{
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
}

.card {
  display: flex;
  margin: 8px;
  flex-direction: column;
  background-color: aquamarine;
  min-width: 100px;
  height: 200px;
}

.texto{
  max-width: 40vw;
  margin-bottom: 200px;
  p {
    font-size: 2em;
  }
}

.produtos {
    display: flex;
    margin: 16px;

}
</style>
