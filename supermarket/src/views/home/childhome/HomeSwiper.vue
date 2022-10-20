<template>
  <swiper >
    <swiper-item v-for="iterm in banners" class="navbarIterms">
      <a :href="iterm.link"><img :src="iterm.image" alt="" @load="SwiperImgLoad"></a>
    </swiper-item>
  </swiper>
</template>

<script>
//使用组件内写好的轮播效果，在此处调用，在写入填充自己数据
// import {Swiper, SwiperItem} from "../../../components/common/swiper/index.js"
import {Swiper,SwiperItem } from "@/components/components/common/swiper";
// import SwiperItem from "@/components/components/common/swiper/SwiperItem";
export default {
  name: "swiperHome",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  mounted(){

  },
  //借用父组件中数据，先给赋值一个空的数据
methods:{
  SwiperImgLoad(){
    //做判断，让其只调用一次   因为swiper是四张img 会调用四次 判断是否调用  使用过则不会调用
    if (!this.isLoad){

      this.$emit("imgSwiper")
      this.isLoad = true
    }


  }
}
}
</script>

<style scoped>
.navbarIterms{

}
.navbarIterms img {
  width: 100%;
  height: 166.12px;

}
</style>
