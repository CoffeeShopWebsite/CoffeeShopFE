import Vue from 'vue'
import Router from 'vue-router'

// authentication
import Authentication from '@/components/authentication/Authentication'
import Login from '@/components/authentication/login/Login'
import ForgetPassword from '@/components/authentication/forget-password/ForgetPassword'
 
// admin
import TestMain from '@/components/TestMain'


import Account from '@/components/Account'
import Product from '@/components/Product'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/testmain',
      name: 'testmain',
      component: TestMain,
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: Authentication,
      meta:{
        isAuthentication: true
      },
      children: [
        {
          path: "login",
          name: "login",
          component: Login
        },
        {
          path: "forget-password",
          name: "forgetpassword",
          component: ForgetPassword
        }
      ]
    }
  ] 
})
