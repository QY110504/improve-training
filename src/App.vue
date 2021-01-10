<template>
  <div id="app">
    <myHeader/>
    <router-view class="routeView"/>
    <myFooter/>
  </div>
</template>

<script>
import myHeader from "@/components/MyHeader"
import myFooter from "@/components/MyFooter"
export default {
  name: 'App',
  components:{
    myHeader,
    myFooter
  }
}
</script>Footer

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
  .routeView{
    height: calc(100vh - 80px);
  }
}
</style>
