<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </NavBar>
    <TabControl
                 :titles="['推荐','流行','新款']"
                 @tabClick="tabClick"
                 ref="TabControls1"
                 v-show="TabControlShow"
                 class="Tab-controls"
       />
    <Bscroll
  class="content"
  ref="scroll"
  :probe-type="3"
  @scroll="contentscroll"
  :pull-up-load="true"
  @pullingUps="LeadMore"
>
<!--  :pull-up-load="true"监听子组件传过来的值，赋予数值-->
  <!--@pullingUps="LeadMore"  子组件发送的事件进行接受 定义方法进行相关操作-->
      <HomeSwiper   :banners="banners"
                    @imgSwiper="SwiperImgLoad"/>
      <HomeRecommend :recommends="commends"/>
      <HomeFeature/>
      <TabControl  class="Tab-control"
                 :titles="['推荐','流行','新款']"
                 @tabClick="tabClick"
                 ref="TabControls2"
    />
    <!--     增加计算属性，简化代码 showPage-->
      <GoodsList :goods="showPages"/>

</Bscroll>
    <BackTop @click.native="TabTop()" v-show="BacktopButton"></BackTop>

    </div>
</template>


<script>
// <!--公共组件-->
// 导航栏
import NavBar from "@/components/components/common/navbar/NavBar";
//Home中TabControl选项卡-公共组件
import TabControl from "@/components/components/content/TabControl/TabControl";
import GoodsList from "@/components/components/content/goods/GoodsList";
//home使用页面滚动
import Bscroll from "@/components/components/common/betterscroll/Bscroll";
//回到顶部


//  <!-- Home子组件页面中  -->
// Home页面中的请求的数据
import {getHomeMultidata,getHomeGoods} from "@/network/Home";
//导入函数——防止refresh刷新太频繁
import {debounce} from "@/common/utils";
//Home轮播图
import HomeSwiper from "@/views/home/childhome/HomeSwiper";
//home子组件——轮播图下面第一个
import HomeRecommend from "@/views/home/childhome/HomeRecommend";
//home子组件——轮播图下面第二个
import HomeFeature from "@/views/home/childhome/HomeFeature";

// <!-- mixin—公共组件存放地  -->
import {itemListerMixin,backTopMixin} from "@/common/mixin";
export default {
  name: "home",
  //1 组件
  components: {
    HomeRecommend,
    NavBar,
    HomeSwiper,
    HomeFeature,
    TabControl,
    GoodsList,
    Bscroll,

  },
  //（！！！！）公共数据存放地
  mixins:[itemListerMixin,backTopMixin],
// 2 数据
data(){
  return{
    //轮播图数据——swiper
   banners:[],
    commends:[],
    //Home页面中Tab选项卡数据——多组数据请求（3）
    goods:{
    'pop':{page:0,list:[]},
    'new':{page:0,list:[]},
    'sell':{page:0,list:[]},
    },
    currentType: 'pop',
    BacktopButton:false,
    TabOffetsTop:0,
  //  吸顶显示——巧用技巧
    TabControlShow:false,
  //  保留页面状态
    saveY:0,


  }
},
computed:{
  showPages(){
  return   this.goods[this.currentType].list
  },
  // TabControlShow() {
  //   if(this.TopDistance >= this.TabOffetsTop){
  //    return true
  //   }


},
//3  生命周期函数
created() {
 //Home  ——页面中轮播图数据请求
 this.getHomeMultidata()
  //Home ——请求goods页面中数据
 this.getHomeGoods('pop')
  this.getHomeGoods('new');
  this.getHomeGoods('sell')

},
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh,200)
    // //  事件总线 利用new Vew（）出的新特性， 进行事件传递（组件和子子组件间）
    // //对于监听事件进行保存（采用变量形式进行保存）
    // this.itemsLister = () =>(
    //   refresh()
    // )
    // this.$bus.$on("itemsImgLoad",this.itemsLister)
    //   // this.$refs.scroll.refresh()
    //
    //   // this.debounce(this.$refs.scroll.refresh,200)

  },

  activated() {
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  //重新回到页面会调用的函数
  deactivated() {
    //利用Bscroll的位置检测  设置变量存取离开时候的位置信息   进入时候再次调用 调节时间为0
    this.saveY = this.$refs.scroll.getScrollY()
  //  离开时候取消全局监听$off(事件,函数)
    this.$bus.$off('itemsImgLoad',this.itemsLister)

  },
  methods: {
    /**home
     *  事件监听**/
    tabClick(index){
      switch(index){
        case 0:
        this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
         }
         //保证两个Tab显示保持一致
         this.$refs.TabControls1.currentIndex = index
         this.$refs.TabControls2.currentIndex = index
    },
    //回到顶部（利用scroll的属性 scrollTo emit传出 ）

    // 一键回到顶部，实时监听滚动位置 采用emit组件内部发送Bscroll的y值
    contentscroll(position) {
        //回到BackTop顶部的显示
        this.BacktopButton = (-position.y) > 1000
    //  吸顶效果
      this.TopDistance = (-position.y)
      if(this.TopDistance >= this.TabOffetsTop ){
        this.TabControlShow = true
      }else{
        this.TabControlShow = false
      }

    },

    //加载更多
    LeadMore(){
      this.getHomeGoods(this.currentType)
    },
    //等待轮到图图片加载完毕 获取TabControl的距离顶部的位置进行赋予TabOffetsTop
    SwiperImgLoad(){
      //从Homeswiper中调用的正确offsetTop存储到设定好的变量中
      this.TabOffetsTop = this.$refs.TabControls2.$el.offsetTop
      console.log('topppp',this.TabOffetsTop);
    },
    //router在页面里离开时候会调用销毁函数——解决办法 router-alive


    /**以下是网络请求的代码**/
  getHomeMultidata(){
     // <!-- 请求轮播图数据-->
    getHomeMultidata().then(res =>{
      // console.log(res);
      this.banners = res.data.data.banner.list;
      this.commends = res.data.data.recommend.list;
    })
     },
   // <!-- 请求Tab数据-->
    getHomeGoods(type) {
    //请求的数据是page来计量，动态增加页数
     const pages = this.goods[type].page +1
      getHomeGoods(type,pages).then( res =>{
        // console.log(res.data.data.list)
        this.goods[type].list.push(...res.data.data.list)
         this.goods[type].page +=1
        //完成上拉加载更多时候，调用scroll内值函数进行多次调用加载数据
        this.$refs.scroll.finishPullUps()
      },err =>{
        console.log(err)
      })
    },
  },

}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
  width: 100%;
}
 .home-nav{
   background-color:pink;
   color: #f2f2f2;

 }

.Tab-control{
  position: sticky;
  top:45px;
  z-index: 9;
}

.content{
  margin: auto;
  position: absolute;
  top: 44px;
  left: 0px;
  right: 0px;
  bottom: 56px;
  overflow:hidden;
}
.Tab-controls{
  position: relative;
  z-index: 9;
}
</style>
