<template>
  <div id="DatailNav">
  <navBar class="details">
    <template  v-slot:left  >

      <img src="@/assets/img/common/back.svg" class="leftImg" @click="BackHome" />
    </template>
    <template v-slot:center  class="title">
     <div  v-for="(items,index) in titles"
           class="items-title"
           :class="{active: index === currentIndex}"
           @click="itemIndex(index)"
     >
       {{items}}</div>
    </template>
  </navBar>

  </div>

</template>

<script>
import navBar from "@/components/components/common/navbar/NavBar";

export default {
  name: "DatailNavbar",
  components:{
    navBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },

  methods:{
    //页面点击事件
    itemIndex(index){
      this.currentIndex = index;
      this.$emit('itemIndex',index)
    },
    BackHome(){
    this.$router.back()
    },

    }

}
</script>

<style scoped>
.title{
  display: flex;
  justify-content:center;
}
.details{
  border-bottom: 1px solid lightgrey;
background-color: white;
}
.items-title{
  float: left;
  width: 51px;
flex: 1;

}
.active{
  color: red;
}
.leftImg{
  margin-top: 10px;
}
</style>
