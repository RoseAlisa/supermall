<template>
<div class="Goods">
  <GoodsListItems v-for="item in goods" :goodsItems="item" />
</div>
</template>

<script>
import GoodsListItems from "@/components/components/content/goods/GoodsListItems";
export default {
  name: "GoodsList",
  components:{
    GoodsListItems
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
.Goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
