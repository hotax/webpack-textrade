import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import Home from './pages/Home.vue'
import Specs from './pages/Specs.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'home',
	component: Home,
}, {
	path: '/specs',
	name: 'specs',
	component: Specs,
	meta: {
		private: true
	}
}, {
	path: '*',
	component: NotFound
}];

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return {
				selector: to.hash
			};
		}
		return {
			x: 0,
			y: 0
		};
	}
});

router.beforeEach((to, from, next) => {
	const user = store.getters.user;
	if (to.matched.some((r) => r.meta.private) && !user) {
		next({
			name: 'login',
			params: {
				wantedRoute: to.fullPath
			}
		});
		return;
	}
	if (to.matched.some((r) => r.meta.guest) && user) {
		next({
			name: 'home'
		});
		return;
	}
	next();
});

export default router;