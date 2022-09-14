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
    redirect: to => { return 'overview' },
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
  // products
  {
    path: '/products',
    name: 'products.index',
    meta: {
      title: 'Products',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Products/Index.vue'),
  },
  {
    path: '/products/create',
    name: 'products.create',
    meta: {
      title: 'Create product',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Products/Create.vue'),
  },
  {
    path: '/products/:id/edit',
    name: 'products.edit',
    meta: {
      title: 'Edit product',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Products/Edit.vue'),
  },
  {
    path: '/products/:id/show',
    name: 'products.show',
    meta: {
      title: 'Product',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Products/Show.vue'),
  },
  // gammes
  {
    path: '/gammes',
    name: 'gammes.index',
    meta: {
      title: 'Gammes',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Gammes/Index.vue'),
  },
  {
    path: '/gammes/create',
    name: 'gammes.create',
    meta: {
      title: 'Create gamme',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Gammes/Create.vue'),
  },
  {
    path: '/gammes/:id/edit',
    name: 'gammes.edit',
    meta: {
      title: 'Edit gamme',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Gammes/Edit.vue'),
  },
  {
    path: '/gammes/:id/show',
    name: 'gammes.show',
    meta: {
      title: 'Gamme',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Gammes/Show.vue'),
  },
  // orders
  {
    path: '/orders',
    name: 'orders.index',
    meta: {
      title: 'Orders',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Orders/Index.vue'),
  },
  {
    path: '/orders/:id/show',
    name: 'orders.show',
    meta: {
      title: 'Order',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Orders/Show.vue'),
  },
  {
    path: '/orders/:id/edit',
    name: 'orders.edit',
    meta: {
      title: 'Edit order',
      requiresAuth: true,
      layout: 'dashboard',
    },
    component: () => import('../views/Orders/Edit.vue'),
  },
  // settings
  {
    path: '/settings',
    name: 'settings.index',
    meta: {
      title: 'Settings',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Settings/Index.vue'),
  },
  {
    path: '/settings/delivery',
    name: 'settings.delivery',
    meta: {
      title: 'Settings',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Settings/Delivery.vue'),
  },
  {
    path: '/settings/headscripts',
    name: 'settings.headscripts',
    meta: {
      title: 'Settings',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Settings/HeadScripts.vue'),
  },
  {
    path: '/settings/pagetext',
    name: 'settings.pagetext',
    meta: {
      title: 'Settings',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Settings/PageText.vue'),
  },
  {
    path: '/settings/socialmedia',
    name: 'settings.socialmedia',
    meta: {
      title: 'Settings',
      requiresAuth: true,
      layout: 'dashboard'
    },
    component: () => import('../views/Settings/SocialMedia.vue'),
  },
  // not found
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: 'Not Found!',
      layout: 'auth'
    },
    component: () => import('../views/errors/404.vue'),
  },
  // {
  //   path: '',
  //   component: () => import('../layouts/default.vue'),
  //   children: [
  //   {
  //     path: '/something',
  //     name: 'something',
  //     component: () => import('../views/Overview.vue'),
  //   },
  //     {
  //       path: '/user',
  //       name: 'user',
  //       component: { render: h => h('router-view') },
  //       children: [
  //         {
  //           path: 'list',
  //           name: 'user.list',
  //           component: () => import('../views/Settings/Index.vue'),
  //         },
  //       ]
  //     },
  //   ],
  // }
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
