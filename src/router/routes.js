/*
使用import()加载一个模块: 被加载的模块会被拆分打包(code split: 代码分割)
将配置路由组件时: component配置的不是组件, 而是返回一个组件的函数,
              只有当请求对应的path时, 才会执行函数获取组件模块代码
 */
import Home from "../pages/Home/Home";                //主页
import CategoryList from "../pages/CategoryList/CategoryList";    //分类
import Category from '../pages/CategoryList/Category/Category.vue';   //分类
import General from "../pages/General/General";       //识物


import bask from "../pages/General/components/bask/bask";       //晒单
import developer from "../pages/General/components/developer/developer";       //开发者日记
import GoodStuff from "../pages/General/components/GoodStuff/GoodStuff";       //好货内部价
import HOME from "../pages/General/components/HOME/HOME";       //HOME
import intelligent from "../pages/General/components/intelligent/intelligent";       //达人
import Recommend from "../pages/General/components/Recommend/Recommend";       //推荐
import rep from "../pages/General/components/rep/rep";       //回购榜
import update from "../pages/General/components/update/update";       //上新



import ShopCart from "../pages/ShopCart/ShopCart";    //购物车
import personage from "../pages/personage/personage"; //个人

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path: '/classify',
    component: CategoryList,
    children: [
      {
        path: '/categorylist/category',
        component: Category,
        meta: {
          isShow: true
        }
      },
      {
        path: '',
        redirect: '/categorylist/category'
      }
    ]
  },
  {
    path:'/general',
    component:General,
    children: [
      {path:'/general/bask',component:bask},
      {path:'/general/developer',component:developer},
      {path:'/general/goodstuff',component:GoodStuff},
      {path:'/general/home',component:HOME},
      {path:'/general/intelligent',component:intelligent},
      {path:'/general/recommend',component:Recommend},
      {path:'/general/rep',component:rep},
      {path:'/general/update',component:update},
      {
        path:'/',
        redirect:'/general/recommend'
      }
    ]
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/personage',
    component:personage
  },
  {
    path:'/',
    redirect:'/home'
  }
]
