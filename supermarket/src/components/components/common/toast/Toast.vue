<template>
  <div v-show="isShows" class="van-toast--html" >
    {{messages}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  props:{

  },
  data(){
    return{
      messages:'',
      isShows:false,
    }
  },
  methods:{
    show(message="这是自己封装的函数信息",duration=2000){

      this.isShows = true;
      this.messages = message

      setTimeout(() =>{
        this.isShows = false;
        this.messages = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.van-toast--html{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;

  background-color: rgb(0,0,0,0.7);
z-index: 20;

}

</style>
