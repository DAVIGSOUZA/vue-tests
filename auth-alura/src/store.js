import Vuex from "vuex";
import Vue from "vue";
import http from "./http";

Vue.use(Vuex)

const state = {
    token: null,
    user: {}
}

const mutations = {
    LOGIN_USER (state, { token, user }) {
        state.token = token
        state.user = user
    },
    LOGOUT_USER (state) {
        state.token = null
        state.user = {}
    }
}

const actions = {
    login ({commit}, user) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', user)
            .then(res => {
                commit('LOGIN_USER', {
                    token: res.data.access_token,
                    user: res.data.user
                })
                resolve(res.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }
}

const getters = {
    isLogged: state => Boolean(state.token)
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})