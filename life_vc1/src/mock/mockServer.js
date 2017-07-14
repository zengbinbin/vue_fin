/**
 * Created by 曾斌斌 on 2017/7/13.
 */
import Mock from'mockjs'
import data from './data.json'

//注册接口

Mock.mock('/api/home',{
    code:0,
    data:data.home
})