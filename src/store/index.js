import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //userstate: loggedout
        user: null
    },
    getters: {
        // s = state :: for all
        getUser(s) {
            return s.user
        },
        userRole(s) {
            return s.user ? s.user.role : null
        }
    },
    mutations: {
        // s = state , p = payload :: for all
        setUser(s, p) {
            s.user = p
        }
    },
    actions: {

    }
})
export default store