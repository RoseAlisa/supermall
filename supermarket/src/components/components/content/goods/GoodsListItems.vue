<template >
  <div class="goods-list-items" @click="detailss">
<!--    v-lazy图片懒加载-->
    <img  v-lazy="showImaged"  alt="" @load="ImageLoad">
    <div class="title">
      <p>{{goodsItems.title}}</p>
      <span class="prices">￥{{goodsItems.price}}</span>
      <span class="counts">销量:{{goodsItems.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "GoodsListItems",
  props:{
    goodsItems:{
      type:Object,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false,
  }
  },
  computed:{
    showImaged(){
      return this.goodsItems.image || this.goodsItems.show.img
      },
  },
  methods:{
    //img图片加载完成执行这个函数——vue自带的监听图片事件
    ImageLoad(){
        this.$bus.$emit("itemsImgLoad")

    },
    detailss(){
      this.$router.push('/DeTails/'+this.goodsItems.iid)
    },
  }
}
</script>

<style scoped>
.goods-list-items {
  margin-bottom: 10px;
width:48%;
  height: 278px;

  margin-top:  1px;
  float: left;
}
.goods-list-items  img{
  border-radius: 5px;
  width: 100%;
  height: 219px;

}
.prices{

}
.title{
  font-size: 12px;
  width: 149px;
  height: 56px;
  line-height:20px;

}
.title p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.prices{
  color: red;
  font-weight: bold;
}
.counts{
  float: right;
  color: gray;
  position: relative;
}
.counts::before  {
  content:'';
  background: url("../../../../assets/img/common/top.png") 0 0 /14px 14px;

}
</style>
