<template>
    <div>
        <h1 class="text-center">Cadastro</h1>
        <h2 v-if="id" class="text-center">Alterar Foto</h2>
        <h2 v-else class="text-center">Adicionar Foto</h2>
        <div class="form-container">
            <form @submit.prevent="addPicture()">
                <div class="control text-center">
                    <label for="title">Titulo</label>
                    <input 
                        id="title" 
                        autocomplete="off"
                        v-model.lazy="picture.titulo"
                    >
                </div>
                <div class="control text-center">
                    <label for="url">URL</label>
                    <input 
                        id="url" 
                        autocomplete="off"
                        v-model.lazy="picture.url"
                    >
                </div>
                <div class="control text-center">
                    <label for="description">Descrição</label>
                    <textarea 
                        id="description" 
                        autocomplete="off"
                        v-model="picture.descricao"
                    ></textarea>
                </div>
                <div class="text-center">
                    <Button name='Adicionar' type="submit" btnStyle="primary"/>
                    <router-link :to="{name: 'home'}">
                        <Button name='Voltar' type="button"/>
                    </router-link>
                </div>
            </form>
            <div class="img-preview text-center">
                <p><strong>Preview</strong></p>
                <ResponsiveImg v-show="picture.url" :url="picture.url" :title="picture.title"/>
            </div>
        </div>
    </div>
</template>

<script>
import ResponsiveImg from '../components/ResponsiveImg.vue'
import Button from "../components/Button";
import Picture from "../domain/picture/picture"
export default {
    components: { 
        ResponsiveImg,
        Button
    },
    data () {
        return {
            picture: new Picture(),
            id: this.$route.params.id
        }
    },
    created () {
        if(this.id) {
            this.$http.get(`http://localhost:3000/v1/fotos/${this.id}`)
                .then(res => res.json())
                .then(foto => this.picture = foto, err => console.log(err))
        }
    },
    methods: {
        addPicture () {
            if ((this.picture.titulo !== '' ) && (this.picture.url !== '')) {
                if (this.id) {
                    this.$http.put(`http://localhost:3000/v1/fotos/${this.id}`, this.picture)
                        .then(() => {
                            this.picture = new Picture(), err => console.log(err)
                            this.$router.push({ name: 'home' })
                        })
    
                } else {
                    this.$http.post("http://localhost:3000/v1/fotos", this.picture)
                        .then(() =>{ 
                            this.picture = new Picture(), err => console.log(err)
                            this.$router.push({ name: 'home' })
                        })
                }
            } else {
                alert('Os campos Título e URL são obrigatórios')
            }
        }
    }

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
    .img-preview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25vw;
        border: 4px solid black;
        img {
            max-width: 200px;
        }
    }
    .form-container {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;

    }
</style>