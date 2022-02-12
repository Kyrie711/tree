<template>
  <div id="ProductionLine">
    <div class="producttitle">
      树种产品线
    </div>
    <div class="products">
      <div class="productitem">
        <div class="itempic">
          <img src="~assets/icon/占位图.jpg" alt="">
          <i class="mask"></i>
        </div>
        <div class="itemname">某树种</div>
      </div>
      <div class="productitem">
        <div class="itempic">
          <img src="~assets/icon/占位图.jpg" alt="">
          <i class="mask"></i>
        </div>
        <div class="itemname">某树种</div>
      </div>
      <div class="productitem">
        <div class="itempic">
          <img src="~assets/icon/占位图.jpg" alt="">
          <i class="mask"></i>
        </div>
        <div class="itemname">某树种</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  #ProductionLine {
    width:100%;
    height: 400px;
    /* background-color: turquoise; */
    border-top:  solid white;
  }
  .producttitle {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .products {
    width: 60%;
    height: 280px;
    /* background-color: violet; */
    margin: 0 auto;
    display: flex;
  }
  .productitem {
    flex: 1;
    /* border: 1px solid red; */
    margin-left: 50px;
  }
  .productitem:hover{
    cursor: pointer;

  }
  .productitem:hover .itemname{
    text-decoration: underline;
    font-weight: 600;
  }
  .productitem:hover .itempic img{
    text-decoration: underline;
    font-weight: 600;
    transform: scale(1.08);
  }
  .productitem:hover .itempic i {
    opacity: 0.2;
  }
  .itempic {
    width: 230px;
    height: 230px;
    background-color: teal;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .itempic img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s;
  }
  .itempic i {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .itemname {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }
</style>