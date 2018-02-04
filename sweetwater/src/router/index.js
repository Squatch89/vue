import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestWorld from '@/components/TestWorld'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'TestWorld',
      component: TestWorld
    },
    {
      path:'/',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
    
  ]
})
