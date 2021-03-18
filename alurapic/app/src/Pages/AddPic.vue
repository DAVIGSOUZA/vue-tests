<template>
    <div>
        <h1 class="text-center">Adicionar Fotos</h1>
        <h2 class="text-center">Cadastro</h2>
        <form action="">
            <div class="control text-center">
                <label for="title">Titulo</label>
                <input id="title">
            </div>
            <div class="control text-center">
                <label for="url">URL</label>
                <input id="url">
                <ResponsiveImg/>
            </div>
            <div class="text-center">
                <Button name='Adicionar' type="submit" btnStyle="primary"/>
                <router-link to='/'>
                    <Button name='Voltar' type="button"/>
                </router-link>
            </div>

        </form>
    </div>
</template>

<script>
import ResponsiveImg from '../components/ResponsiveImg.vue'
import Button from "../components/Button";
export default {
  components: { 
    ResponsiveImg,
    Button
    },

}
</script>

<style scoped lang="scss">
    .text-center {
        margin-top: 16px;
        text-align: center;
    }
    .control {
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    .control label {
        display: block;
        font-weight: 700;
    }
    .control label + input, .control textarea {
        width: 50vw;
        font-size: inherit;
        border-radius: 5px;
        @media (max-width:600px) {
            width: 80vw;
        }
    }
</style>