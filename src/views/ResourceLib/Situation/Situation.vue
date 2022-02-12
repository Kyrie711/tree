<template>
  <div id="situation">
    <div class="protitle">
      华农研究项目产品线
    </div>
    <div class="proitems">
      <proitem></proitem>
      <proitem></proitem>
    </div>
  </div>
</template>
<script>
import proitem from 'views/ResourceLib/Situation/Productitem.vue'
export default {
  data() {
    return {
      general: {
        fruit: '苹果',
      }
    }
  },
  components: {
    proitem
  }
}
</script>
<style>
  #situation{
    width: 100%;
  }
  .protitle {
    width: 65%;
    height: 100px;
    margin: 0 auto;
    line-height: 100px;
    font-size: 30px;
    font-weight: 600;
  }
  .proitems {
    width: 65%;
    margin: 0 auto;
  }
</style>