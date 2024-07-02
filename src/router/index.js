import Vue from 'vue'
import Router from 'vue-router'

// authentication
import Authentication from '@/components/authentication/Authentication'
//
  import Login from '@/components/authentication/authentication-content/Login'
  import ForgetPassword from '@/components/authentication/authentication-content/ForgetPassword'
  import SignIn from '@/components/authentication/authentication-content/SignIn'

// admin
import Admin from '@/components/admin-page/Admin'
//
  import Account from '@/components/admin-page/admin-content/Account'
  import Product from '@/components/admin-page/admin-content/Product'
  import Order from '@/components/admin-page/admin-content/Order'



import TestMain from '@/components/TestMain'

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
          path: "sign-in",
          name: "sign-in",
          component: SignIn
        },
        {
          path: "forget-password",
          name: "forgetpassword",
          component: ForgetPassword
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'account',
          name: 'account',
          component: Account,
        },
        {
          path: 'product',
          name: 'product',
          component: Product,
        },
        {
          path: 'order',
          name: 'order',
          component: Order,
        },
      ]
    }
  ] 
})
