<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
export default {
  name: "Bscroll",
  props:{
    probeType:{
      type:Number,
      default:0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  components:{
  },

  data(){
    return{
      scroll:null,
      message:"nihao"
    }
  },

  mounted(){
    this.scroll = new Bscroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
      click:true,
    })
    //监听滚动位置
    this.scroll.on("scroll",(position) =>{
      this.$emit("scroll",position)
    })
    // 监听上拉加事件

    if(this.pullUpLoad){
      this.scroll.on("pullingUp",() =>{
        //发送事件（利用父组件home。vue进行加载更多）
        this.$emit("pullingUps")
      })
    }

  },
  methods:{
    //scroll的刷新功能（在所有异步img图片加载完成后进行再次测量需要滚动的height）
    refresh(){
      this.scroll.refresh()
    },
    //完成上拉加载更多时候，调用scroll内值函数进行多次调用加载数据
    finishPullUps(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll.y
    },
  }

}
</script>

<style scoped>

</style>
