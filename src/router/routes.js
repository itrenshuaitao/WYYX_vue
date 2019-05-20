/*
使用import()加载一个模块: 被加载的模块会被拆分打包(code split: 代码分割)
将配置路由组件时: component配置的不是组件, 而是返回一个组件的函数,
              只有当请求对应的path时, 才会执行函数获取组件模块代码
 */
import Home from "../pages/Home/Home";                //主页
import Classify from "../pages/Classify/Classify";    //分类
import ClassifyList from "../pages/Classify/components/ClassifyList";    //分类
import General from "../pages/General/General";       //识物
import ShopCart from "../pages/ShopCart/ShopCart";    //购物车
import personage from "../pages/personage/personage"; //个人

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/classify',
    component:Classify,
    children: [
      {
        path:'/classify/ClassifyList',
        component:ClassifyList,
      },
      {
        path:'',
        redirect: '/classify/ClassifyList'
      }
    ]
  },
  {
    path:'/general',
    component:General
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
