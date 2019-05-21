import Mock from 'mockjs'
import homeData from './homeData'
import category from './category'

Mock.mock('/home',{code:0,data:homeData})
Mock.mock('/category',{code:0,data:category})
