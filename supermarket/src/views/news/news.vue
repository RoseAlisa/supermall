<template>
  <div id="news">
<!--    <navBar>-->
<!--      <template v-slot:left>-->
<!--        <p>导航</p>-->
<!--      </template>-->
<!--      <template v-slot:center>-->
<!--        <h2>新闻周刊</h2>-->
<!--      </template>-->
<!--      <template v-slot:right>-->
<!--        <dd> 返回</dd>-->
<!--      </template>-->
<!--    </navBar>-->

    <h1>News</h1>
  </div>
</template>

<script>
// import navBar from "@/components/common/navbar/NavBar";
// import BSscroll from 'better-scroll';
export default {
  name: "news",
  components:{
  },
  // mounted() {
  //   this.scroll = new BSscroll(this.$refs.wrapper,{
  //     probeType:3,
  //   })
  //   BSscroll.on('probeType',(position) =>{
  //     console.log(position);
  //   })
  // }
  methods:{
    deactivated() {
      console.log("deactivated3",deactivated3)
    },
  }
}

</script>

<style scoped>
#news {

  /*}*/
  /*.left,.right{*/
  /*  width: 100px;*/
  /*}*/
  /*.wrapper{*/
  /*  width: 100%;*/
  /*  height: 400px;*/
  /*  background-color: aqua;*/
  /*}*/
}
</style>
