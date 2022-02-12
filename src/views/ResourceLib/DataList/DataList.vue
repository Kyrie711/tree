<template>
  <div id="datalist">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params);
  }
}
</script>
<style>
  #datalist {
    height: 100%;

  }
</style>