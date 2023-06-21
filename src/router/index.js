import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: to => {
      return {path:'/Index'}
    },
    children:[
      {
        path:'Index',
        name: 'Index',
        component:()=>import('@/views/index.vue')
      },
      {
        path:'Classification',
        name: 'Classification',
        component:()=>import('@/views/Classification/index.vue'),
        redirect:to=>{
          return {path:'/Classification/Button'}
        },
        children:[
          {
            path:'/Classification/Button',
            name: 'Button',
            component:()=>import('@/views/Classification/component/Button/index.vue')
          },
          {
            path:'/Classification/Shadow',
            name: 'Shadow',
            component:()=>import('@/views/Classification/component/Shadow/index.vue')
          },
        ]
      },
      {
        path:'Archive',
        name: 'Archive',
        component:()=>import('@/views/Archive.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}


router.beforeEach((to, from,next) => {
  console.log(to,from);
  if(to.path==from.path){
    return false
  }
  next()
  // return false
})
export default router
