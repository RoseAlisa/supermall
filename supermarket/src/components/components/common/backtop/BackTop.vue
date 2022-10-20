<template>
  <div class="Top" >
    <img src="@/assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  method:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style scoped>
.Top{
  position:fixed;
  bottom: 51px;
  right: 10px;
z-index: 300;
}
.Top img{
  width: 50px;
  height: 50px;
}
</style>
