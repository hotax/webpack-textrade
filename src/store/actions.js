import {
    $fetch
} from '../plugins/fetch'
import router from '../router'

const actions = {
    async init({
        dispatch
    }) {
        await dispatch('login')
    },
    async login({
        commit
    }) {
        try {
            const user = await $fetch('api/user')
            commit('user', user)
            if (user) {
                // Redirect to the wanted route if any or else to home
                router.replace(
                    router.currentRoute.params.wantedRoute || {
                        name: 'specs'
                    }
                )
            }
        } catch (e) {
            // do nothing
        }
    },
    async logout({
        commit
    }) {
        commit('user', null)
        await $fetch('api/logout')
        if (router.currentRoute.matched.some(r => r.meta.private)) {
            router.replace({
                name: 'home',
                params: {
                    wantedRoute: router.currentRoute.fullPath
                }
            })
        }
    }
}

export default actions