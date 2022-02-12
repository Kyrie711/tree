<template>
  <div id="bigmodule">
    <div class="bigmodule1">
      <img src="~assets/icon/占位图.jpg" alt="">
      <i class="mask"></i>
    </div>
    <div class="bigmodule2">
      <img src="~assets/icon/占位图.jpg" alt="">
      <i class="mask"></i>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  #bigmodule {
    width: 98%;
    height: 550px;
    margin: 0 auto;
    /* background-color: blueviolet; */
    display: flex;
  }
  .bigmodule1 {
    flex: 1;
    margin-right: 20px;
    height: 100%;
    /* background-color: burlywood; */
    overflow: hidden;
    position: relative;
  }
  .bigmodule2 {
    flex: 1;
    height: 100%;
    /* background-color: brown; */
    overflow: hidden;
    position: relative;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s;
  }
  #bigmodule div img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
  }
  #bigmodule div:hover img {
    transform: scale(1.08);
  }
  #bigmodule div:hover .mask {
    opacity: 0.2;
    cursor: pointer;
  }
</style>