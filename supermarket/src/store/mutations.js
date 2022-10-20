import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'
export default {
  //mutations唯一目的就是修改state中的数值
  //mutations 中的每个函数（方法）最好完成事件比较单一一些（内分多个函数，每个函数完成一个指令任务）

    //购物车添加商品
    [ADD_COUNTER](state, payload) {
      payload.checkedAll = true
      payload.count++

    },
    [ADD_TO_CART](state, payload) {
      payload.checked = true
      payload.checkedAll = true
      state.cartlist.push(payload)
    },

}
