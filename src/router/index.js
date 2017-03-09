import Vue from 'vue';
import Router from 'vue-router';
import landing from '@/components/Landing';
import dashboard from '@/components/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Landing',
    component: landing,
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: dashboard,
  }],
});
