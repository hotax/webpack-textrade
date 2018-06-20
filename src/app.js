import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import 'babel-polyfill'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../assets/app.styl'

Vue.use(BootstrapVue)
Vue.use(Vuetify)

new Vue({
	el: '#app',
	render: h => h(App)
})