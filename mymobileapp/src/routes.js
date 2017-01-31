export default [ 

  {
    path: '/',
    component: require('./App')
  },
  {
    path: '/addevent/',
    component: require('./components/pages/addevent.vue')
  },
  {
    path: '/addminuteur/',
    component: require('./components/pages/addminuteur.vue')
  },
  {
    path: '/compte/',
    component: require('./components/pages/compte.vue')
  },
  {
    path: '/infos/',
    component: require('./components/pages/infos.vue')
  },
    {
    path: '/detail/:type/:id',
    component: require('./components/pages/detail.vue')
  }
]