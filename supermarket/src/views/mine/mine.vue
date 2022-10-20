<template>
  <div id="mine">
    <h1>MINE</h1>
    <NavBar>
      <template v-slot:left>
        <p>导航</p>
      </template>
      <template v-slot:center>
        <h2>菜单目录</h2>
      </template>
      <template v-slot:right>
        <dd> 返回</dd>
      </template>
    </NavBar>
<!--    <scroll class="content-scroll" :probe-type="3" @click="Scrooll">-->
      <div class="wrapper" ref="wrapper">
       <div class="conent">
         <ul>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li> <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>
           <li>你好</li>

         </ul>
       </div>
      </div>
<!--    </scroll>-->
  </div>
</template>

<script>
import NavBar from "@/components/components/common/navbar/NavBar";
import Bscroll  from "better-scroll"
// import scroll from "@/components/common/scroll/Scroll";
export default {
  name: "mine",
  components: {NavBar},
data(){
    return{
      scroll:null
    }
},
// methods:{
//     // Scrooll(position){
//     //   console.log(position);
//     //   position.y
//
//   }
// }
  mounted(){
 this.scroll =  new Bscroll (this.$refs.wrapper,{
probeType:3,
})
this.scroll.on('scroll',(position) =>{
  console.log(position)


})
  }

}
</script>

<style scoped>
/*.content-scroll{*/
/*  height: 300px;*/
/*  background-color: #ff8198;*/
/*  overflow:hidden;*/
.wrapper{
  height: 300px;
  width: 100%;
  background-color: #ff8198;
overflow: hidden;
}
/*}*/
</style>
