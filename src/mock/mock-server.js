import Mock from 'mockjs'
import homeData from './homeData'

Mock.mock('/home',{code:0,data:homeData})
