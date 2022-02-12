<template>
  <div id="selectadd">
    <div class="text">请选择要添加的水果</div>
    <div class="select">
      <div class="apple" @click="tolink('/home/resourcelib/adddata/fruit/1')">柑橘</div>
      <div class="grape" @click="tolink('/home/resourcelib/adddata/fruit/2')">葡萄</div>
      <div class="orange" @click="tolink('/home/resourcelib/adddata/fruit/3')">苹果</div>
      <div class="pear" @click="tolink('/home/resourcelib/adddata/fruit/4')">梨</div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log('FruitSelect:',this.$route.name);
  },
  methods: {
    tolink(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style>
  #selectadd {
    width: 100%;
    height: 100%;
    background-color: #009688;
    position: relative;
  }
  .text {
    text-align: center;
    font-size: 40px;
    letter-spacing: 2px;
    color: white;
    position: relative;
    top: 28%;
    transition: all 0.3s;
  }
  #selectadd:hover .text {
    top: 23%;
    /* font-size: 20px; */
  }
  .select {
    width: 280px;
    height: 280px;
    /* background-color: tomato; */
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .select > div {
    width: 120px;
    height: 120px;
    background-color: teal;
    line-height: 120px;
    text-align: center;
    font-size: 25px;
    color: white;
    border-radius: 30px;
    border: 2px solid rgb(250, 250, 250);
    transition: transform 0.2s;
  }
  .select > div:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
</style>