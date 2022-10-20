<template >
  <div class="terabits" @click="itemClick" ignore>
    <div  class="imgs" v-if="!Active"> <slot name="img"></slot></div>
    <div  class="active" v-else> <slot name="img-active"></slot></div>
    <div :style="aaColory" > <slot name="message">信息</slot></div>
  </div>
</template>

<script>
export default {
  name: "tabiterms",
  props:{
    //设置一个空的小储存 等app.vue的path过来赋值
   path:String,
    aColory:{
      type:String,
      default:'blue'
    }
  },
  computed:{

    Active(){
      //计算属性 自动判断点击的path是否和path是否一致
      // 一致的话就会成ture 显示正在点击的状态
      return this.$route.path.indexOf(this.path) !== -1
    },
    aaColory(){
      return this.Active ?{ color: this.aColory}:{}
    },

  },
 methods:{
   itemClick(){
     this.$router.push(this.path)
   },


 }
}
</script>

<style scoped>

.terabits {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.terabits img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
