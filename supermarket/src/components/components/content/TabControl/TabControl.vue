<template>
  <div class="TabControl">
      <div v-for="(item, index) in titles"
           class="tab-control-item"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
<!--   动态绑定class:赋予选中的active为红色，-->
<!--   设置点击事件 在点击时候，动态的class:active进行转移-->

</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.TabControl{
  width: 100%;
  height: 30px;
  display: flex;
  background:rgb(240, 240, 240);
  text-align: center;
  font-size: 15px;
  color: black;
  height: 40px;
  line-height: 40px;
}
.tab-control-item{
  flex: 1;
}
.tab-control-items span{
  padding: 5px;
}
.active{
  color:hotpink ;

}
.active span {
  border-bottom: 3px solid hotpink;
}
</style>
