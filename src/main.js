import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import {routes} from './routes';
 
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to) {
		if(to.hash) {
			return {selector: to.hash}
		}
  }
})

router.beforeEach((to,from,next) => {
	console.log("global beforeEach");
	next();
});

Vue.config.productionTip = false
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
