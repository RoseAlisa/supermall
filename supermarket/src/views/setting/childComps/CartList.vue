<template>
  <div id="Cart-list">
<!--    循环-->
    <Bscroll class="Cart-scroll" ref="CartScroll">
        <div v-for="(item,index) in CartList" :key="index"  class="shop-item" >
          <div class="item-selector">
                <van-checkbox  v-model="item.checked" />
         </div>
         <div class="item-img">
                <img :src="item.image" alt="商品图片" />
        </div>
         <div class="item-info">
                <div class="item-title">{{ item.title }}</div>
                <div class="item-desc">商品描述: {{ item.desc }}</div>
                <div class="info-bottom">
                  <div class="item-price left">¥{{ item.price }}</div>
                  <div class="item-count right">x{{ item.count }}</div>
                </div>
         </div>
      </div>
    </Bscroll>
    <!-- 底部订单栏 -->
    <div class="cart-bottom-bar">
      <div class="cart-bottom-check">
        <van-checkbox @click="handleCheckedAll" class="checked-all" v-model="checkedAll">
          全选
        </van-checkbox>
      </div>
      <div @click="handleCheckedItem" class="cart-bottom-price">
        合计：
        <span>¥ {{ totalPrice }}</span>
        元
      </div>
      <div class="cart-bottom-btn">
        <button >提交订单({{ checkedLength }})</button>
      </div>
    </div>
  </div>
</template>

<script>
//vuex
import {mapGetters} from "vuex";
//公共组件
import Bscroll from "@/components/components/common/betterscroll/Bscroll";
//私有组件

export default {
  name: "CartList",
  data() {
    return {
      checkedAll: false
    };
  },
  components:{
    Bscroll,

},
  computed:{
    //...mapgetters是vuex的一种写法
    ...mapGetters(['CartList']),
    //计算价格
    totalPrice(){
      return this.CartList
        //过滤器（选择item.checked= true 的商品 ）
        .filter(item => item.checked)
        //返回数值（prev——先前的商品 ）
        .reduce((prev, item) => prev + item.price * item.count, 0)
        //保留两位小数
        .toFixed(2);
    },
  //同样筛选出符合条件的商品个数
    checkedLength() {
      this.CartList.filter(item => item.checked).length;
  },

  },
  methods:{
    //全选
    handleCheckedAll() {

      return this.CartList.forEach(item => (item.checked = this.checkedAll));

    },
    //反选
    handleCheckedItem() {
      let result = this.CartList.filter(item => item.checked);
      this.checkedAll = result.length > 0 && result.length === this.CartList.length;
    },
  },
activated() {
    this.$refs.CartScroll.scroll.refresh()
}
}

</script>

<style scoped>
#Cart-list{
  height: calc(100% - 44px - 49px - 51px);
}
.Cart-scroll{
height: 100vh;
  overflow:hidden;
}
.shop-item {
  font-size: 0;
  display: flex;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

.shop-item:last-child {
  border-bottom: 0;
}

.item-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}

.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}
.info-bottom .item-price {
  color: #ff4500;
}
.cart-bottom-bar {
  font-size: 15px;
  position: fixed;
  right: 0;
  bottom: 49px;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-top: 1px solid #cccccc;
  background-color: white;
}

.cart-bottom-price {
  margin-left: 50px;
}

.cart-bottom-price span {
  color: red;
}

.cart-bottom-btn button {
  line-height: 50px;
  position: absolute;
  right: 20px;
  bottom: 0;
  display: block;
  height: 50px;
  padding: 0 15px;
  color: white;
  border: 0;
  outline: none;
  background: linear-gradient(to right, #ff6034, #ee0a24);
}

.cart-bottom-btn button:active {
  opacity: 0.8;
}

</style>
