import Vue from 'vue';
import Router from 'vue-router';
import landing from '@/components/Landing';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Landing',
    component: landing,
  }],
});
