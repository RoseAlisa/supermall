<template>
  <div class="recommends">
    <div v-for="items in recommends" class="recommendsIterms">
      <a :href="items.link"><img :src="items.image" alt=""></a>
      <div >{{items.title}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeRecommend",

  props:{
    recommends:{
      // 数组类型
      type:Array,
      default(){
        return []
      }
    }
  },

}
</script>

<style scoped>
.recommends{
  display: flex;
  margin-top: 10px;
  padding: 12px 0 30px;
  border-bottom: 12px solid lightgray;
}
.recommendsIterms{
  flex: 1;
  text-align: center;
  font-size: 13px;
}
.recommendsIterms img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}

</style>
