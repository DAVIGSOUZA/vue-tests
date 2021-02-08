<template>
  <div id="app">
    <HelloWorld msg="Componentes & Props"/>

    <div class="page-section-container">
      <h2>Dados pessoais</h2>
      <BigCard 
        imgSrc="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
        name="AstroDev" 
        description="Carinha criado pela Labenu para ser usado em atividades variadas"
      />
      <ImgBtn 
        imgSrc="https://image.flaticon.com/icons/png/512/117/117472.png"  
        text="Ver mais"
      />
    </div>

    <div class="page-section-container">
      <SmallCard
        text= "teste@teste.com"
      />
    </div>

    <div class="page-section-container">
      <SmallCard
        text= "Rua dos Testes, nº42 Testeland-TT"
      />
    </div>

    <div class="page-section-container">
      <h2>Experiências profissionais</h2>
      <BigCard
        name="HTML, CSS & JS" 
        description="Linguagens aplicada ao front end"
      />
      <BigCard
        imgSrc="/logo.png"
        name="Vue JS" 
        description="Aprendendo Vue"
      />
    </div>

    <div class="page-section-container">
      <h2>Minhas redes sociais</h2>
      <ImgBtn
        imgSrc="/linkedin-logo.png"
        text="linkedin"
      />
      <ImgBtn
        imgSrc="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
        text="Twitter"
      />
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import BigCard from './components/BigCard'
import ImgBtn from './components/ImgBtn'
import SmallCard from "./components/SmallCard";

export default {
  name: 'App',
  components: {
    HelloWorld,
    BigCard,
    ImgBtn,
    SmallCard
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.page-section-container {
  width: 40vw;
  margin: 10px 0;
}

.page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
