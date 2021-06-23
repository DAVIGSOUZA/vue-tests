<template>
  <div class="home d-flex mb-3">
      <SideBar class="side-bar d-none d-md-block"/>
      <div class="content-wrapper flex-fill">
        <div class="banner mb-3"></div>
        <section>
          <h3> Seja Bem Vindo!</h3>
          <p>
            Lojas virtuais seguras, com design focado na experiência do usuário e 
            integração com qualquer sistema externo, fazem parte do portfólio da 
            Webjump: agência especializada no desenvolvimento de eCommerce personalizado 
            para clientes middle market e enterprise, principalmente.
          </p>
          <p>
            Prezando por qualidade, transparência e comunicação assertiva em todas as 
            fases dos projetos desenvolvidos, a empresa se destaca pela metodologia ágil 
            que utiliza, buscando customizar e alinhar a plataforma às necessidades das 
            marcas e dos clientes.
          </p>
          <p>
            Atualmente, a Webjump é a principal Magento Partner na América Latina e está 
            em constante aprimoramento para se manter atualizada neste dinâmico universo 
            do comércio eletrônico global.
          </p>
        </section>
      </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: 'Home',
  components: { SideBar },

}
</script>

<style lang="scss">
.home {
  .side-bar {
    min-width: 200px;
    margin-right: 20px;
  }
  .banner {
    width: 100%;
    background-color: #ACACAC;
    height: 200px;
    @media (max-width: 320px) {
      height: 100px;
    }
  }
  h3 {
    font-weight: 400;
  }
}

</style>