<template>
  <div id="app">
    <div class="tela-inteira">
      <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>

      <main>
        <nav class="menu-vertical">
          <ul>
            <li class="botoes-meunu-vertical">Início</li>
            <li class="botoes-meunu-vertical">Em alta</li>
            <li class="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li class="botoes-meunu-vertical">Originais</li>
            <li class="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <section class="painel-de-videos">
          <div class="box-pagina-principal media1" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
          <div class="box-pagina-principal media2" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=2 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
          <div class="box-pagina-principal media3" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=3 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
          <div class="box-pagina-principal media4" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=4 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
          <div class="box-pagina-principal media5" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=5 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
          <div class="box-pagina-principal media6" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=6 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
          <div class="box-pagina-principal media7" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=7 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
          <div class="box-pagina-principal media8" v-on:click="reproduzVideo">
            <img src="https://picsum.photos/400/400?a=8 " alt="" />
            <h4>{{videoTitle}}</h4>
          </div>
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      videoTitle: "Título do vídeo"
    }
  },
  methods: {
    reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }
  }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}


.tela-inteira {
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10vh;
}

main {
    min-height: 80vh;
    display: flex;
}

.menu-vertical {
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
}

.botoes-meunu-vertical {
    list-style-type: none;
}

.painel-de-videos {
    padding-left: 20px;
    padding-top: 20px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 24.8% 0.2%);
    grid-template-rows: repeat(4, 270px 20px);
}

.media1 {
    grid-column-start: 1;
    grid-row-start: 1;
}

.media2 {
    grid-column-start: 3;
    grid-row-start: 1;
}

.media3 {
    grid-column-start: 5;
    grid-row-start: 1;
}

.media4 {
    grid-column-start: 7;
    grid-row-start: 1;
}

.media5 {
    grid-column-start: 1;
    grid-row-start: 3;
}

.media6 {
    grid-column-start: 3;
    grid-row-start: 3;
}

.media7 {
    grid-column-start: 5;
    grid-row-start: 3;
}

.media8 {
    grid-column-start: 7;
    grid-row-start: 3;
}


.box-pagina-principal {
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin; 
    align-items: start;
    justify-items: stretch;
}


footer {
    height: 10vh;
    background-color: grey;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.box-pagina-principal > img {
    width: 100%;
    height: 200px;
}

h4 {
    margin-left: 20px;
}
</style>
