/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import store from '../store';
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true,
    },
    redirect: {
      path: '/dashboard',
    },
  },
  // This  allows you to have pages apart of the app but no rendered inside the dash
  {
    path: '/',
    meta: {
      name: '',
      requiresAuth: false,
    },
    component: () =>
      import(/* webpackChunkName: "routes" */ `@/views/LoginHome.vue`),
    // redirect if already signed in
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/dashboard');
      } else {
        next();
      }
    },
  },
  // add any extra routes that you want rendered in the dashboard as a child below. Change toolbar names here
  {
    path: '/dashboard',
    meta: {
      name: 'Dashboard View',
      requiresAuth: true,
    },
    component: () => import(`@/views/DashboardView.vue`),
    children: [
      {
        path: '/',
        name: 'Food',
        component: () => import(`@/components/DashViews/Food.vue`),
      },
      {
        path: 'environment',
        meta: {
          name: 'Environment',
          requiresAuth: true,
        },
        component: () => import(`@/components/DashViews/Environment.vue`),
      },
      {
        path: 'maps',
        meta: {
          name: 'Maps',
          requiresAuth: true,
        },
        component: () => import(`@/components/DashViews/Maps.vue`),
      },
      {
        path: 'notifications',
        meta: {
          name: 'Notifications',
          requiresAuth: true,
        },
        component: () => import(`@/components/DashViews/Notifications.vue`),
      },
    ],
  },
];
