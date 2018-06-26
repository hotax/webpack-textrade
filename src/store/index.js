import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state() {
        return state
    },
    getters: getters,
    mutations: mutations,
    actions: actions
})

export default store