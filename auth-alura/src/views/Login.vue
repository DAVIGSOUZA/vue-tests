<template>
  <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="login">
            <div class="form-group">
                <label for="email"> Email </label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha"> Senha </label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            <p class="alert alert-danger" v-if="errorMsg">{{ errorMsg }}</p>
            <button class="btn btn-primary brn-block" type="submit">Login</button>
            <router-link class="ml-2" :to="{name: 'cadastro'}">
                Fazer novo cadastro
            </router-link>
      </form>
  </div>
</template>

<script>

export default {
    data () {
        return {
            usuario: {
                email: '',
                senha: ''
            },
            errorMsg: ''

        }
    },
    methods: {
        login () {
            this.$store.dispatch('login', this.usuario)
                .then(() => {
                    this.$router.push({name: 'gerentes'})
                    this.errorMsg = ''
                })
                .catch(err => {
                    if (err.request.status === 401) {
                        this.errorMsg = 'Login ou senha inválido(s)'
                    } else {
                        this.errorMsg = `Erro ${err}`
                    }
                })
        }
    }
}
</script>

<style>

</style>