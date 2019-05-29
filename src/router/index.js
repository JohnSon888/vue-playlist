import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

// 配置路由
export default new VueRouter({
    routes:[
      {
          path: "/msite", 
          component: MSite
      },
      {
          path: "/search", 
          component: Search
      },
      {
          path: "/order", 
          component: Order
      },
      {
          path: "/profile", 
          component: Profile
      },
      {
          path: "/shop", 
          component: Shop,
          children: [
            {
                path: "/shop/goods", 
                component: ShopGoods
            },
            {
                path: "/shop/info", 
                component: ShopInfo
            },
            {
                path: "/shop/ratings", 
                component: ShopRatings
            },
            {
                path: "/", 
                redirect: '/shop/goods'
            },
        ]
      },
      {
          path: "/", 
          redirect: './msite'
      },
    ],
    // mode: 'history'
  })