<template>
  <div class="setting">
<!--导航navbar-->
    <NavBar class="BuyNavBar">
      <template v-slot:center >
        <h3 >购物车({{length}})</h3>
      </template>
    </NavBar>
<!--    商品列表list-->
    <CartList/>
<!--    底部导航tabbar-->

  </div>
</template>

<script>
import NavBar from "@/components/components/common/navbar/NavBar";
import {mapGetters} from "vuex";
import CartList from "@/views/setting/childComps/CartList";


 export default {
  name: "setting",
  components:{
    NavBar,
    CartList
},
   computed: {
     //mapgetters  是vuex一种属性 自动将里面的方法转换成计算属性
     //...解析语法   将内涵事务一一进行解析 数据多的情况下可进行写成对象形式
     ...mapGetters({
       length:'CartLength',
     })
},

   methods:{

   },
}
</script>

<style scoped>
.BuyNavBar{
  background-color: #ffc0cb;
  color: white;
}
.setting{
  height: 100vh;
}
</style>
