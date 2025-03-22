import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/HomeView.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/view/NewsView.vue')
  },
  {
    path: '/conference',
    name: 'Conference',
    component: () => import('@/view/ConferenceView.vue')
  },
  {
    path: '/conference/detail/:id',
    component: () => import('@/components/conferenceview/conference-detail/DetailContent.vue'),
    children: [
      ...(() => {
        const years = [2017, 2018, 2019, 2020]
        return years.map(year => ({
          path: `/QCPQC-${year}`,
          name: `QCPQC-${year}`,
          component: () => import(`@/components/conferenceview/conference-detail/QCPQC/QCPQC-${year}.vue`),
          props: true
        }))
      })(),
      // ...(() => {
      //   const years = [2017, 2018, 2019, 2020];
      //   return years.map(year => ({
      //     path: `DSPP-${year}`,
      //     name: `DSPP-${year}`,
      //     component: () => import(`@/components/conferenceview/conference-detail/DSPP/DSPP-${year}.vue`),
      //     props: true
      //   }));
      // })()
    ]
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('@/view/ResearchView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/view/AboutView.vue')
  },
  {
    path:'/about/person',
    name:'Person',
    component:()=>import('@/components/aboutview/Person.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router