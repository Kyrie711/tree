<template>
  <div class="proitem">
    <div class="proitem_name">
      <i class="zz"></i>
      <span>某果</span>
    </div>
    <div class="items">
      <div class="item">
        <div class="item_pic">
          <img src="~assets/icon/占位图.jpg" alt="">
        </div>
        <div class="item_name">某产品</div>
      </div>
      <div class="item">
        <div class="item_pic">
          <img src="~assets/icon/占位图.jpg" alt="">
        </div>
        <div class="item_name">某产品</div>
      </div>
      <div class="item">
        <div class="item_pic">
          <img src="~assets/icon/占位图.jpg" alt="">
        </div>
        <div class="item_name">某产品</div>
      </div>
      <div class="item">
        <div class="item_pic">
          <img src="~assets/icon/占位图.jpg" alt="">
        </div>
        <div class="item_name">某产品</div>
      </div>
      <div class="item">
        <div class="item_pic">
          <img src="~assets/icon/占位图.jpg" alt="">
        </div>
        <div class="item_name">某产品</div>
      </div>
      <div class="item">
        <div class="item_pic">
          <img src="~assets/icon/占位图.jpg" alt="">
        </div>
        <div class="item_name">某产品</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .proitem {
    width: 100%;
    /* height: 250px; */
    /* background-color: tomato; */
    display: flex;
    border-bottom:  1px dotted gray;
    margin-bottom: 40px;
  }
  .proitem_name {
    width: 20%;
    min-width: 200px;
    /* background-color: teal; */
    font-size: 25px;
  }
  .proitem_name span {
    padding: 0;
    margin: 0;
    border: none;
    vertical-align: middle;
  }
  .zz {
    display: inline-block;
    height: 28px;
    vertical-align: middle;
    width: 5px;
    background-color: rgb(198, 76, 55);
    margin-right: 20px;
  }
  .items {
    width: 75%;
    min-width: 790px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .item {
    width: 230px;
    height: 250px;
    /* background-color: green; */
    overflow: hidden;
    margin-right: 30px;
    margin-top: 20px;
  }
  .item_pic {
    width: 230px;
    height: 180px;
    margin: 0 auto;
  }
  .item_pic img {
    width: 100%;
    height: 100%;
  }
  .item_name {
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-weight: 600;
  }
  .item::after {
    width: 0px;
    content: '';
    margin: 0 auto;
    border-bottom: 2px solid rgb(220, 99, 99);
    display: block;
    transition: width 0.2s;
  }
  .item:hover {
    cursor: pointer;
  }
  .item:hover::after {
    width: 90%;
  }
</style>