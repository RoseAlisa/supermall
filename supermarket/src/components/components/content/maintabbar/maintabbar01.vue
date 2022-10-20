<template>

  <tabBar>
    <tabiterms path="/home" aColory="red" >
      <template v-slot:img><img src="@/assets/img/tabbar/profile.svg"></template>
      <template v-slot:img-active> <img src="@/assets/img/tabbar/profile_active.svg"></template>
      <template v-slot:message><div>首页</div></template>
    </tabiterms>

    <tabiterms path="/news" aColory="red" >
      <template v-slot:img><img src="@/assets/img/tabbar/category.svg"></template>
      <template v-slot:img-active> <img src="@/assets/img/tabbar/category_active.svg"></template>
      <template v-slot:message><div>新闻</div></template>
    </tabiterms>

    <tabiterms path="/setting" aColory="red" >
      <template v-slot:img><img src="@/assets/img/tabbar/shopcart.svg"></template>
      <template v-slot:img-active> <img src="@/assets/img/tabbar/shopcart_active.svg"></template>
      <template v-slot:message><div >购物车</div></template>
    </tabiterms>

    <tabiterms path="/mine" aColory="red" >
      <template v-slot:img><img src="@/assets/img/tabbar/home.svg"></template>
      <template v-slot:img-active> <img src="@/assets/img/tabbar/home_active.svg"></template>
      <template v-slot:message><div  >我的</div></template>
    </tabiterms>

  </tabBar>

</template>


<script scope>
import tabBar from "../../../components/common/tabbar/TabBar"
import tabiterms from "../../../components/common/tabbar/tabiterms"

 export default {
  name: "maintabbar01",
  components:{
    tabBar,
    tabiterms
  }
}
</script>

<style scoped>
/*#maintabbar01 img{*/
/*  height: 24px;*/
/*  width: 24px;*/
/*  margin-left: 149px;*/
/*}*/
/*#tabBar img{*/
/*  width:24px;*/
/*  height: 24px;*/
/*  margin-left: 25px;*/
/*}*/
</style>
