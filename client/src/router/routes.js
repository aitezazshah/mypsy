const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('pages/DashboardPage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/ContactLayout.vue'),
    children: [
      {
        path: '/contactus',
        component: () => import('pages/ContactPage.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MembershipLayout.vue'),
    children: [
      {
        path: '/membership',
        component: () => import('pages/MembershipPage.vue'),
      },
    ],
  },
  {
    path: '/signin',
    component: () => import('components/SignIn.vue'),
  },
  {
    path: '/signup',
    component: () => import('components/SignUp.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
