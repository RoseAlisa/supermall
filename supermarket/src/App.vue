<template>
  <div id="app">
    <keep-alive exclude="DeTails">
      <router-view/>
    </keep-alive>
    <maintabbar01/>

  </div>
</template>
<script>

import maintabbar01 from "@/components/components/content/maintabbar/maintabbar01.vue"
export default {
  name: 'App',
  components:{
    maintabbar01
  }
}
</script>
<style>

</style>
