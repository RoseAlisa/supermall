<template>
  <div id="detailSwiper">
    <swiper>
      <swiperitem v-for="items in topImages ">
        <img :src="items" alt="" style="height: 300px">
      </swiperitem>
    </swiper>
  </div>
</template>

<script>
import swiper from "@/components/components/common/swiper/Swiper"
import swiperitem from "@/components/components/common/swiper/SwiperItem"
export default {
  name: "DtailSwiper",
  components:{
    swiper,
    swiperitem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#detailSwiper{
  height:300px;
  overflow: hidden;
}
</style>
