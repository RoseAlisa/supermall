import {debounce} from "@/common/utils";
import BackTop from "@/components/components/common/backtop/BackTop";
//图片加载完毕的监听器
export const itemListerMixin = {
  data(){
    return{
      itemsLister:null,
      refreshs:null

    }
  },
  mounted() {
    this.refreshs = debounce(this.$refs.scroll.refresh,200)
    //  事件总线 利用new Vew（）出的新特性， 进行事件传递（组件和子子组件间）
    //对于监听事件进行保存（采用变量形式进行保存）
    this.itemsLister = () =>(
      this.refreshs()
    )
    this.$bus.$on("itemsImgLoad",this.itemsLister)

  },

}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      BacktopButton:false,
    }
  },
  methods:{
    TabTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    TopDistance(position){
      this.BacktopButton = (-position.y) > 1000
    },

  }
}
