<template>
  <div id="systemdetails">
    <div class="bigpic">
      <div class="text">
        <p class="cntext">欢迎您，这里是树种资源管理系统</p>
        <p class="entext">The Tree Species Resource Management System</p>
      </div>
      <div class="movedown">
        <img class="downpng" src="~assets/icon/向下.png" alt="">
        <span class="downtext">向下滑动</span>
      </div> 
    </div>
    <productionline></productionline>
    <bigmodule></bigmodule>
  </div>
</template>

<script>
import ProductionLine from 'views/SystemHome/SystemDetails/ProductionLine.vue'
import BigModule from 'views/SystemHome/SystemDetails/BigModule.vue'
// @ is an alias to /src

export default {
  name: 'systemdetails',
  data() {
    return {
      start_time:'',
      end_time:''
    }
  },
  components: {
    productionline: ProductionLine,
    bigmodule: BigModule,
  }
}
</script>

<style>
  .bigpic {
    width: 100%;
    height: 100vh;
    max-height: 1000px;
    background-color: #009688;
    margin-top: 62px;
    position: relative;
  }
  .bigpic:hover .cntext {
    margin-top: -20px;
    margin-bottom: 10px;
  }
  .bigpic .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    color: white;
    text-align: center;
  }
  .cntext {
    font-size: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
    transition: margin 0.2s ease-in-out;
  }
  .entext {
    font-size: 20px;
  }
  .movedown {
    width: 100px;
    height: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
    font-size: 0px;
  }
  .downpng {
    width: 25px;
    vertical-align: middle;
  }
  .downtext {
    font-size: 13px;
    color: white;
    margin-left: 10px;
    vertical-align: middle;
  }
</style>
