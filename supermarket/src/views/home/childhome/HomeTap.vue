<template>

</template>

<script>
export default {
  name: "HomeTap"
}
</script>

<style scoped>

</style>
<template>
  <div v-for="(item, index) in titles"
       class="tab-control-item"
       :class="{active: index === currentIndex}"
       @click="itemClick(index)">
    <span>{{item}}</span>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  //定义空数组，接受外面（另一组件）的绑定的数据，因为是父组件和子组件用需props接收
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
