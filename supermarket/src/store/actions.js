import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'
export default
{
  addCart(context,payload){
    return new Promise((resolve, reject) => {
      let oldproduct = context.state.cartlist.find(item => item.iid === payload.iid)

      if (oldproduct){
        context.commit(ADD_COUNTER,oldproduct)
        resolve('当前商品数量加一')
      } else {
        payload.count = 1
        context.commit(ADD_TO_CART,payload)
        resolve('添加了新的商品')

      }
    })
    //1.查找之前数组中是否有该商品


  }
}
