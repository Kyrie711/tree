<template>
  <div id="speciedistribution">
    <div class="speciecontent">
      <div class="specie_left">
        <div class="pic1 pic"></div>
        <div class="pic2 pic"></div>
      </div>
      <div class="specie_center"></div>
      <div class="specie_right">
        <div class="pic3 pic"></div>
        <div class="pic4 pic"></div>
      </div>
    </div>
  </div>
</template>
<script>
import pic1 from 'utils/data_pic/pic1.js'
import pic2 from 'utils/data_pic/pic2.js'
import pic3 from 'utils/data_pic/pic3.js'
import pic4 from 'utils/data_pic/pic4.js'
import picenter from 'utils/data_pic/picenter.js'
export default {
  mounted() {
    pic1(document.getElementsByClassName('pic1')[0]);
    pic2(document.getElementsByClassName('pic2')[0]);
    pic3(document.getElementsByClassName('pic3')[0]);
    pic4(document.getElementsByClassName('pic4')[0]);
    picenter(document.getElementsByClassName('specie_center')[0]);
  }
}
</script>
<style>
  #speciedistribution {
    width: 100%;
    height: calc(100vh - 64px);
    background: url('~assets/img/utils/data_bg.jpg');
    background-size: 100% 100%;
    position: relative;
  }
  .speciecontent {
    width: 100%;
    height: 95%;
    display: flex;
    /* flex-wrap: wrap; */
    /* justify-content: space-around; */
    position: relative;
    /* bottom: 0px; */
  }
  .speciecontent > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .specie_left {
    width: 25%;
    height: 90%;
    /* background-color: tomato; */
    margin-left: 10px;
  }
  .specie_center {
    width: 42%;
    height: 90%;
    /* background-color: tomato; */
    margin-left: 20px;
    margin-right: 20px;
  }
  .specie_right {
    width: 25%;
    height: 90%;
    /* background-color: tomato; */
    margin-right: 20px;
  }
  .pic {
    width: 100%;
    height: 48%;
    margin-bottom: 40px;
    /* background-color: turquoise; */
  }
</style>