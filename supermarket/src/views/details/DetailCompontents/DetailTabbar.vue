<template>
  <div id="detail-tabbar">
    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="客服" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
      />
      <van-goods-action-icon
        icon="cart-o"
        :text="isShouCang ? '已收藏' : '收藏'"
      />
      <van-goods-action-button
        @click="addToCart"
        text="加入购物车"
        type="warning" />
      <van-goods-action-button

        text="立即购买"
        type="danger" />
    </van-goods-action>
  </div>

</template>

<script>
export default {
  name: "DetailTabbar",
  data(){
    return{
      isShouCang:0,
    }
  },
  methods:{
    addToCart(){
//    1:购物车： 因为是子组件，然后进行发送（$emit）点击事件
      this.$emit('addToCart')
    },
  }
}
</script>

<style scoped>
#detail-tabbar{
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 49px;
  width: 100%;
  background-color: #5ea732;
  z-index: 200;

}
#detail-tabbar ul{
  width: 100%;

}
#detail-tabbar ul li{
  width: 40px;
  margin: auto;
}

</style>
