import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'systemhome',
        component: () => import('views/SystemHome/SystemHome.vue'),
        children: [
          {
            path: '/',
            name: 'systemdetails',
            component: () => import('views/SystemHome/SystemDetails/SystemDetails.vue')
          },
          {
            path: 'arealdistribution',
            name: 'arealdistribution',
            component: () => import('views/SystemHome/ArealDistribution/ArealDistribution.vue')
          },
          {
            path: 'speciedistribution',
            name: 'speciedistribution',
            component: () => import('views/SystemHome/SpecieDistribution/SpecieDistribution.vue')
          }
        ]
      },
      {
        path: 'resourcelib',
        name: 'resourcelib',
        component: () => import('views/ResourceLib/ResourceLib.vue'),
        children: [
          {
            path: '/',
            name: 'situation',
            component: () => import('views/ResourceLib/Situation/Situation.vue')
          },
          {
            path: 'datalist',
            name: 'datalist',
            component: () => import('views/ResourceLib/DataList/DataList.vue'),
            children: [
              {
                path: '',
                name: 'fruitselect',
                component: () => import('views/ResourceLib/DataList/FruitSelect.vue')
              },
              {
                path: 'fruitselect/:fruit_variety',
                name: 'variety_list',
                component: () => import('views/ResourceLib/DataList/Variety_List/Variety_list.vue')
              },
              { // id
                path: 'fruitdetail/:id',
                name: 'fruitdetail',
                component: () => import('views/ResourceLib/DataList/Variety_List/DataDetail/DataDetail.vue')
              }
            ]
          },
          {
            path: 'adddata',
            name: 'adddata',
            component: () => import('views/ResourceLib/AddData/AddData.vue'),
            children: [
              {
                path: '',
                name: 'selectadd',
                component: () => import('views/ResourceLib/AddData/SelectAdd.vue')
              },{
                path: 'fruit/:fruit_variety',
                name: 'addfruit',
                component: () => import('views/ResourceLib/AddData/AddFruit.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'personalinfo',
        name: 'personalinfo',
        component: () => import('views/PersonalInfo/PersonalInfo.vue'),
        
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('views/Admin/Admin.vue'),
        children: [
          {
            path: 'role',
            name: 'role',
            component: () => import('views/Admin/role/role.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
