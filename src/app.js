import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import VueFetch from './plugins/fetch';
import App from './App.vue'
import router from './router';
import * as filters from './filters';
import store from './store';
import {
	sync
} from 'vuex-router-sync'
sync(store, router)

for (const key in filters) {
	Vue.filter(key, filters[key]);
}

Vue.use(VueFetch, {
	baseUrl: 'http://localhost:8089/'
});

Vue.use(BootstrapVue)
Vue.use(Vuetify)

async function main() {
	await store.dispatch('init');

	new Vue({
		...App,
		router,
		store
	}).$mount('#app');
}

main();