<template>
  <div id=Details>
<!--    -->
    <DatailNavbar  class="DetailNav" @itemIndex="itemClickClass" ref="DetailNav"/>

    <Bscroll class="content"
         :probe-type="3"
         ref="scroll"
         @scroll="DetailContentScroll">
    <DtailSwiper :top-images="TopImages"/>
    <DetailBaseInfo :goods="goods"/>
    <DetailShopInfo :shop="shops"/>
    <DetailImagesInfo :images-info="detailInfo" @DetailImgload="DetailImgload"/>
    <DetailParamInfo ref="params"  :param-info="GoodsParam"/>
    <DetailCommentInfo  ref="comment" :comment-info="commentInfo"/>
  <GoodsList  ref="recomment" :goods="recommends"/>
</Bscroll>

    <BackTop  @click.native="TabTop()" v-show="BacktopButton"></BackTop>
<!--    2：购物车；接受子组件的点击事件-->
    <DetailTabbar @addToCart="addToCart"/>
<!--    购买成功后的显示-->

  </div>
</template>

<script>
// 整体数据请求
import {getDetail,Goods,GoodsParams,Shop,getRecommend} from "@/network/data"
//公共组件导入
import Bscroll from "@/components/components/common/betterscroll/Bscroll"
import GoodsList from "@/components/components/content/goods/GoodsList"
import BackTop from "@/components/components/common/backtop/BackTop"

// 映射
import {mapActions} from 'vuex'
//组件
import DatailNavbar from '@/views/details/DetailCompontents/DatailNavbar'
import DtailSwiper from "@/views/details/DetailCompontents/DtailSwiper"
import  DetailBaseInfo from "@/views/details/DetailCompontents/DetailBaseInfo"
import  DetailShopInfo from "@/views/details/DetailCompontents/DetailShopInfo"
import DetailImagesInfo from "@/views/details/DetailCompontents/DetailImagesInfo"
import DetailParamInfo from "@/views/details/DetailCompontents/DetailParamInfo"
import DetailCommentInfo from "@/views/details/DetailCompontents/DetailCommentInfo"
import DetailTabbar  from "@/views/details/DetailCompontents/DetailTabbar"
//公共組件存放处——mixin
import {itemListerMixin,backTopMixin} from "@/common/mixin"
import {debounce} from "@/common/utils";

export default {
  name: "DeTails",
  components:{
    DatailNavbar,
    DtailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Bscroll,
    DetailImagesInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailTabbar,
    BackTop,

  },
  mixins:[itemListerMixin,backTopMixin],
  data(){
    return{
    iid:null,
    //  顶部轮播
    TopImages:[],
      //detail商品列表中位于不同地方的商品数据
      goods:{},
      shops:{},
      detailInfo:{},
      GoodsParam:{},
      commentInfo:{},
      recommends:[],
      themeClickTop:[],
      gatthemeTopY:null,
      message:'',
      show:'',

}
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('itemsImgLoad',this.itemsLister)
  },
  methods: {
    DetailImgload() {
      //调用scroll自带的刷新函数，意思是在确保图片在加载完毕后进行刷新一次
      this.refreshs()
      //函数调用
      this.gatthemeTopY()
    },
    //创建navbar点击事件 让其换offsetTop（利用scrollTo的属性）
    itemClickClass(index) {
      index = this.$refs.scroll.scroll.scrollTo(0, -this.themeClickTop[index], 200)
    },
    //利用scroll的可监听位置属性
    DetailContentScroll(position) {
      const positionY = -position.y
      let length = this.themeClickTop.length
      for (let i = 0; i < length; i++) {
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeClickTop[i] && positionY < this.themeClickTop[i + 1]) ||
        //   (i === length - 1 && positionY >= this.themeClickTop[i]))) {
        //   this.currentIndex = i;
        //   this.$refs.DetailNav.currentIndex = this.currentIndex
        // }
        if (this.currentIndex !== i && (positionY >= this.themeClickTop[i] && positionY < this.themeClickTop[i + 1]))
          this.currentIndex = i;
        this.$refs.DetailNav.currentIndex = this.currentIndex
      }
      //调用函数回到顶部
      this.TopDistance(position)
    },
    //3：购物车 监听后实行函数方法
    ...mapActions(['addCart']),
    addToCart() {
      //获取购物车需要的数据
      const product = {}
      product.image = this.TopImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realprice;
      product.iid = this.iid;
      // //将（选中）商品添加到购物车里  利用mutations
      //  this.$store.commit('addCart',product)
      //方法一:借助vuex
      // <!--将（选中）商品添加到购物车里  利用actions（注意调用方式）
      // 怎样判断商品添加成功呢？  利用dispatch，dispatch可以用promise进行回调  返回.then
      // 形式:
      // 函数名(){
      // return new promise（（） =>{}）}  -->
      // 3,添加到购物车成功
      // this.$store.dispatch('addCart',product).then(
      //   res =>{
      //     console.log(res)
      //   },
      // )
      //
      //
      //  方法二: 借助映射   将addCart映射到vuex中去   自身回调用this.$store.dispatch
      this.addCart(product).then(res =>{
        // this.show = true
        //   this.message = res;
        // setTimeout(() =>{
        //   this.show = false
        //   this.message = ''
        // },1500)
        this.$toast.show(res,2000)
        })
    },
  },
  created() {
    //保存后台传过来的iid
    this.iid = this.$route.params.iid
    //根据相应过来的iid进行请求相应的数据
    getDetail(this.iid).then(res => {
        console.log('总的数据',res)
      const data = res.data.result
      //获取顶部的图片信息
      this.TopImages = data.itemInfo.topImages
      //商品信息请求
      this.goods =new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    //  店铺信息请求
      this.shops = new Shop(data.shopInfo)
    //  获取商品详细信息
      this.detailInfo = data.detailInfo
    //  衣服更多信息展示
      this.GoodsParam = new GoodsParams(data.itemParams.info,data.itemParams.rule)
    //评论信息的展示
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
      this.gatthemeTopY = debounce(() =>{
        this.themeClickTop = []
        this.themeClickTop.push(0)
        this.themeClickTop.push(this.$refs.params.$el.offsetTop)
        this.themeClickTop.push(this.$refs.comment.$el.offsetTop)
        this.themeClickTop.push(this.$refs.recomment.$el.offsetTop)
        this.themeClickTop.push(Number.MAX_VALUE)
        console.log(this.themeClickTop)
      },200)
      //所有数据渲染完成后会回调这个函数
      this.$nextTick(() =>{
      })
    },err =>{
        console.log("fail",err)
    })
    //3.详情页面的加载更多商品信息请求
    getRecommend().then(res =>{
      console.log('recommend',res)
    this.recommends = res.data.data.list
    },err =>{})
  },

}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.DetailNav{
  z-index: 12;
  position: relative;
  top: 0;
  background-color: white;
}
#Details{
background-color: white;
  position: relative;
  z-index: 9;
  width: 100%;
  height: 100vh;
}
.content{
  position:absolute;
  top: 44px;
  bottom:57px;
  z-index: 9;
  background-color: white;
overflow: hidden;
}
</style>
