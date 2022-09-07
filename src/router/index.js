import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login | Organic Village',
      guest: true,
      layout: 'auth',
    },
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    meta: {
      title: 'Forgot Password | Organic Village',
      guest: true,
      layout: 'auth',
    },
    component: () => import('../views/auth/ForgotPassword.vue'),
  },
  {
    path: '/',
    name: 'home',
    meta: {
      requiresAuth: true,
    },
    redirect: to => {
      // the function receives the target route as the argument
      // a relative location doesn't start with `/`
      // or { path: 'profile'}
      return 'overview'
    },
  },
  {
    path: '/overview',
    name: 'overview',
    meta: {
      title: 'Overview',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Overview.vue'),
  },
  {
    path: '/products',
    name: 'products',
    meta: {
      title: 'Products',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Products.vue'),
  },
  {
    path: '/gammes',
    name: 'gammes',
    meta: {
      title: 'Gammes',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Gammes.vue'),
  },
  {
    path: '/order',
    name: 'orders',
    meta: {
      title: 'Orders',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Orders.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      title: 'Settings',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Settings.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: 'Not Found!',
      layout: 'auth'
    },
    component: () => import('../views/errors/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

// router.beforeEach((to, from, next) => {
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
    
    next();
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next({
        name: 'home',
      });
    }
    next();
  } else {
    next();
  }
});

export default router;
