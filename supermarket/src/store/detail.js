import Vue from 'vue'
import  vuex from 'vuex'
import mutations from "./mutations"
import actions from "@/store/actions";
import getters from "@/store/getters";
// 安装插件
Vue.use(vuex)

const state = {
  //添加购物车的数据保存
  cartlist:[],
}
//创建store对象
 const store = new vuex.Store({
   //拆分模块
   state,
   mutations,
   actions,
   getters,

 })

export default  store
