<template>
  <div id="datadetail">
    <div id="VarietyInfo">
      <div id="textInfo">
        <p class="id">
          <span class="label">编号：</span>
          <input type="text" class="value" v-model="details.appleId" readonly="true">
        </p>
        <p class="variety_name">
          <span class="label">品种名：</span>
          <input type="text" class="value" v-model="details.appleName" readonly="true">
        </p>
        <p class="latin_name">
          <span class="label">拉丁名：</span>
          <input type="text" class="value" v-model="details.appleLatinName" readonly="true">
        </p>
        <p class="english_name">
          <span class="label">其他名称：</span>
          <input type="text" class="value" v-model="details.otherName" readonly="true">
        </p>
        <p class="variety_type">
          <span class="label">品种类型：</span>
          <input type="text" class="value" v-model="details.varietyType" readonly="true">
        </p>
        <p class="botany_classfication">
          <span class="label">植物学分类：</span>
          <input type="text" class="value" v-model="details.botanyClassfication" readonly="true">
        </p>
      </div>
      <div id="picInfo">
        <img src="~assets/img/utils/default.jpg" alt="">
      </div>
      <div class="ismore" @click="loadmoreInfo()"></div>
      <div id="moreInfo">
        <div class="row1 row">
          <div class="production_area">
            <span class="label">主产区</span>
            <input type="text" class="value" v-model="details.productionArea" readonly="true">
          </div>
          <div class="resource">
            <span class="label">资源保护地</span>
            <input type="text" class="value" v-model="details.resourcePreservationSite" readonly="true">
          </div>
        </div>
        <div class="row2 row">
          <div class="male_parent">
            <span class="label">父本/亲本</span>
            <input type="text" class="value" v-model="details.appleParent" readonly="true">
          </div>
          <div class="female_parent">
            <span class="label">母本</span>
            <input type="text" class="value" v-model="details.femaleParent" readonly="true">
          </div>
        </div>
        <div class="row3 row">
          <div class="suitable_rootstock">
            <span class="label">适宜砧木</span>
            <input type="text" class="value" v-model="details.suitableRootstock" readonly="true">
          </div>
          <div class="breeding_unit">
            <span class="label">育种单位</span>
            <input type="text" class="value" v-model="details.appleBreedingUnit" readonly="true">
          </div>
        </div>
        <div class="row4 row">
          <div class="province">
            <span class="label">适载区(省)</span>
            <input type="text" class="value" readonly="true">
          </div>
          <div class="city">
            <span class="label">适载区(市)</span>
            <input type="text" class="value" readonly="true">
          </div>
          <div class="country">
            <span class="label">适载区(县区)</span>
            <input type="text" class="value" readonly="true">
          </div>
        </div>
        <div class="row5 row">
          <div class="variety_description">
            <span class="label">品种描述</span>
            <input type="text" class="value" v-model="details.appleDescription" readonly="true">
          </div>
        </div>
        <div class="row6 row">
          <div class="key_points">
            <span class="label">栽培要点</span>
            <input type="text" class="value" v-model="details.keyPoints" readonly="true">
          </div>
        </div>
        <div class="operation">
          <span class="uncompile" v-if="!iscompile">
            <el-button type="primary" @click="compile">编辑</el-button>
            <el-button type="danger" @click="deleteVariety">删除</el-button>
          </span>
          <span class="compiled" v-else>
            <el-button type="info" @click="cancel">取消</el-button>
            <el-button type="success" @click="savevariety">保存</el-button>
          </span>
        </div>
      </div>
    </div>
    <div id="EveryTree">
      <atreedetail></atreedetail>
    </div>
  </div>
</template>
<script>
import {request} from 'network/request.js'
export default {
  data() {
    return {
      Aid: null,
      ismore:0,
      iscompile: false,
      details:{},
      copydetails:{}
    }
  },
  components: {
    atreedetail: () => import('views/ResourceLib/DataList/Variety_List/DataDetail/ATreeDetail.vue')
  },
  created() {
    this.Aid = this.$route.params.id
    let url = '/Apple/listAllApple'
      request({
        url 
      }).then(res => {
        this.details = res.data[this.Aid-1]
      })
  },
  methods: {
    loadmoreInfo() {
      var Vinfo = document.getElementById('VarietyInfo');
      var more = document.getElementsByClassName('ismore')[0];
      if(this.ismore == 0) {
        Vinfo.style.height = "600px";
        this.ismore = 1;
        more.style.transform = "rotateZ(180deg) translateX(50%)"
      } else {
        Vinfo.style.height = "260px";
        this.ismore = 0;
        more.style.transform = "rotateZ(0deg) translateX(-50%)"
      }
    },
    compile() {
      var value = document.getElementsByClassName('value');
      for(let i = 1; i < value.length; i++) {
        value[i].readOnly = false;
        value[i].classList.add('compiled_input')
      }
      this.iscompile = true;
      this.copydetails = this.details;
    },
    cancel() {
      var value = document.getElementsByClassName('value');
      for(let i = 1; i < value.length; i++) {
        value[i].readOnly = true;
        value[i].classList.remove('compiled_input')
      }
      this.iscompile = false;
      this.details = this.copydetails;
    },
    deleteVariety() {
      this.$confirm('确定删除这个品种吗？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        this.$request({
          url: `Variety/deleteVarietyById`,
          method: 'delete',
          params:{vId: this.details.varietyId}
        }).then(res => {
          console.log(res);
          history.back()
          this.$message({
            type: 'success',
            message: `删除成功`
          });
        })
      }).catch(() => {})    
    },
    savevariety() {
      this.$confirm('确定更新这个品种吗？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        // console.log(this.details);
        this.$request({
          url: `Variety/updateVariety`,
          method: 'put',
          params:{...this.details}
        }).then(res => {
          // console.log(res);
          history.back()
          this.$message({
            type: 'success',
            message: `更新成功`
          });
        })
      }).catch(() => {})
    }
  }
}
</script>
<style>
  #datadetail {
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    padding-top: 20px;
  }
  #VarietyInfo {
    position: relative;
    width: 90%;
    min-width: 680px;
    height: 260px;
    margin: 0 auto;
    border: 1px solid #e6ebe3;
    border-radius: 10px;
    box-shadow: 3px 3px 5px #009688;
    overflow: hidden;
    transition: height 0.5s;
  }
  #textInfo {
    width: 68%;
    height: 210px;
  }
  #textInfo > p {
    width: 95%;
    margin: 0 auto;
    height: 30px;
    /* background-color: blue; */
    margin-top: 5px;
    display: flex;
    align-items: center;
    /* text-align: center; */
    word-break: break-all;
    word-wrap: break-word;
    border-bottom: 1px solid rgb(240, 239, 239);
  }
  #textInfo > p > span {
    display: inline-block;
  }
  #textInfo > p > span:first-child {
    width: 25%;
    margin-right: 10px;
    text-align: right;
    font-weight: 600;
  }
  #textInfo > p > input {
    width: 75%;
    text-align: left;
  }
  #textInfo > p > .value {
    font-size: 14px;
  }
  #picInfo {
    position: absolute;
    height: 220px;
    width: 31%;
    border: 1px solid #cccaca;
    right: 10px;
    top: 20px;
    /* top: 50%; */
  }
  #picInfo > img {
    width: 100%;
    height: 100%;
  }
  .ismore {
    height: 25px;
    width: 25px;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%) rotateZ(0deg);
    border-radius: 25px;
    background-image: url('~assets/img/utils/unmore.png');
    background-size: 100% 100%;
    transition: all 0.7s;
  }
  .ismore:hover {
    background-image: url('~assets/img/utils/more.png');
    cursor: pointer;
  }
  .ismore img {
    height: 25px;
    width: 25px;
  }
  .row {
    width: 95%;
    height: 35px;
    margin: 0 auto;
    margin-top: 3px;
    /* background-color: green; */
    display: flex;
  }
  .row:first-child {
    margin-top: 60px;
    /* background-color: greenyellow; */
  }
  .row > div {
    flex: 1;
    line-height: 35px;
    font-family: "宋体";
  }
  #moreInfo > .row:nth-child(odd) {
    background-color: #d3f261;
  }
  #moreInfo > .row:nth-child(even) {
    background-color: #bae637;
  }
  .row > div > span {
    display: inline-block;
  }
  .row > div > span:first-child {
    width: 110px;
    font-weight: 600;
    text-align: right;
  }
  .row > div > input {
    margin-left: 10px;
    text-align: left;
    font-size: 15px;
  }
  .value {
    color: black;
    border: none;
    background: none;
    outline: none;
    height: 25px;
    padding-left: 5px;
  }
  .operation {
    height: 30px;
    /* background-color: tomato; */
    text-align: center;
    margin-top: 20px;
  }
  .compiled_input {
    border: 1px solid gray;
    outline: black;
    background: white;
  }
</style>