<template>
  <div id="ATreeDetail">
    <div class="search_variety">
      <input type="text" placeholder="请输入果树编号">
      <div class="search_pic"><img src="~assets/icon/search.png" alt=""></div>
      <el-button class="aexport" type="success">批量导出</el-button>
    </div>
    <div id="fruitvarieties">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%;min-width: 1300px"
        max-height="550"
        :header-cell-style="{textAlign: 'center'}"
        :cell-style="{ textAlign: 'center' }"
        :default-sort = "{prop: 'caseId', order: 'ascending'}">
        <el-table-column
          type="index"
          width="50"
          fixed>
        </el-table-column>
        <el-table-column
          fixed
          prop="vname"
          label="品种名称"
          width=""
          sortable>
        </el-table-column>
        <el-table-column
          prop="analysisTime"
          label="果实分析时间"
          width="180"
          sortable>
        </el-table-column>
        <el-table-column
          prop="evaluation"
          label="感官评价"
          width="">
        </el-table-column>
        <el-table-column
          prop="weight"
          label="单果重(g)"
          width="">
        </el-table-column>
        <el-table-column
          prop="longitudinalDiameter"
          label="纵径(cm)"
          width="">
        </el-table-column>
        <el-table-column
          prop="transverseDiameter"
          label="横径(cm)"
          width="">
        </el-table-column>
        <el-table-column
          prop="shape"
          label="果形(指数)"
          width="">
        </el-table-column>
        <el-table-column
          prop="peelThickness"
          label="果皮厚度(cm)"
          min-width="">
        </el-table-column>
        <el-table-column
          prop="juiceOutputRate"
          label="出汁率(%)">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="openTable(scope.row,scope.$index)"
              type="text"
              size="small">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-drawer
      title="果树详情!"
      :visible.sync="table"
      direction="rtl"
      size="50%">
      <div id="ainfo">
        <p class="id">
          <span class="label">品种名称：</span>
          <input type="text" class="avalue" v-model="gridData.vname" readonly="true">
        </p>
        <p class="analysisTime">
          <span class="label">果实分析时间：</span>
          <input type="text" class="avalue" v-model="gridData.analysisTime" readonly="true">
        </p>
        <p class="weight">
          <span class="label">感官评价：</span>
          <input type="text" class="avalue" v-model="gridData.evaluation" readonly="true">
        </p>
        <p class="evaluation">
          <span class="label">成熟期：</span>
          <input type="text" class="avalue" v-model="gridData.maturePeriod" readonly="true">
        </p>
        <p class="longitudinalDiameter">
          <span class="label">物候期：</span>
          <input type="text" class="avalue" v-model="gridData.phenologicalPeriod" readonly="true">
        </p>
        <p class="transverseDiameter">
          <span class="label">产量(kg/亩)：</span>
          <input type="text" class="avalue" v-model="gridData.output" readonly="true">
        </p>
      </div>
      <div id="apicInfo">
        <img src="~assets/img/utils/default.jpg" alt="">
      </div>
      <div id="amoreInfo">
        <div class="arow1 arow">
          <div class="peelThickness">
            <span class="label">单果重(g)</span>
            <input type="text" class="avalue" v-model="gridData.weight" readonly="true">
          </div>
          <div class="resource">
            <span class="label">纵径(cm)(cm)</span>
            <input type="text" class="avalue" v-model="gridData.longitudinalDiameter" readonly="true">
          </div>
          <div class="resource">
            <span class="label">横径(cm)</span>
            <input type="text" class="avalue" v-model="gridData.transverseDiameter" readonly="true">
          </div>
        </div>
        <div class="arow2 arow">
          <div class="male_parent">
            <span class="label">果形(指数)</span>
            <input type="text" class="avalue" v-model="gridData.shape" readonly="true">
          </div>
          <div class="female_parent">
            <span class="label">果皮厚度(cm)</span>
            <input type="text" class="avalue" v-model="gridData.peelThickness" readonly="true">
          </div>
          <div class="female_parent">
            <span class="label">单果囊瓣数(个)</span>
            <input type="text" class="avalue" v-model="gridData.capsuleValvesNumber" readonly="true">
          </div>
        </div>
        <div class="arow3 arow">
          <div class="suitable_rootstock">
            <span class="label">单果种子数(颗)</span>
            <input type="text" class="avalue" v-model="gridData.seedsNumber" readonly="true">
          </div>
          <div class="juiceOutputRate">
            <span class="label">可食率(%)</span>
            <input type="text" class="avalue" v-model="gridData.edibleRate" readonly="true">
          </div>
          <div class="juiceOutputRate">
            <span class="label">出汁率(%)</span>
            <input type="text" class="avalue" v-model="gridData.juiceOutputRate" readonly="true">
          </div>
        </div>
        <div class="arow4 arow">
          <div class="province">
            <span class="label">TSS(%)</span>
            <input type="text" class="avalue" v-model="gridData.tss" readonly="true">
          </div>
          <div class="city">
            <span class="label">TA(%)</span>
            <input type="text" class="avalue" v-model="gridData.ta" readonly="true">
          </div>
          <div class="country">
            <span class="label">固酸比</span>
            <input type="text" class="avalue" v-model="gridData.solidAcidRatio" readonly="true">
          </div>
        </div>
        <div class="arow5 arow">
          <div class="varietyDescription">
            <span class="label">VC(mg/100g)</span>
            <input type="text" class="avalue" v-model="gridData.vc" readonly="true">
          </div>
          <div class="varietyDescription">
            <span class="label">H(果皮)</span>
            <input type="text" class="avalue" v-model="gridData.hpeel" readonly="true">
          </div>
          <div class="varietyDescription">
            <span class="label">H(果汁)</span>
            <input type="text" class="avalue" v-model="gridData.hjuice" readonly="true">
          </div>
        </div>
        <div class="arow6 arow">
          <div class="key_points">
            <span class="label">采样地点(省)</span>
            <input type="text" class="avalue" readonly="true">
          </div>
          <div class="key_points">
            <span class="label">采样地点(市)</span>
            <input type="text" class="avalue" readonly="true">
          </div>
          <div class="key_points">
            <span class="label">采样地点(县区)</span>
            <input type="text" class="avalue" readonly="true">
          </div>
        </div>
        <div class="arow7 arow">
          <div class="key_points">
            <span class="label">土壤类型</span>
            <input type="text" class="avalue" readonly="true">
          </div>
          <div class="key_points">
            <span class="label">适载等级</span>
            <input type="text" class="avalue" readonly="true">
          </div>
          <div></div>
        </div>
        <div class="operation">
          <span class="uncompile" v-if="!ischange">
            <el-button type="primary" @click="changedata">编辑</el-button>
            <el-button type="danger" @click="deleteAtree">删除</el-button>
          </span>
          <span class="compiled" v-else>
            <el-button type="info" @click="cancelchange">取消</el-button>
            <el-button type="success" @click="savecase">保存</el-button>
          </span>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //果树实例列表
      tableData: [
        {
          caseId:'btoranto',
          analysisTime:'2021-07-11',
          evaluation:'甜酸苦辣',
          weight:'345',
          longitudinalDiameter:'13',
          transverseDiameter:'16',
          shape:'98',
          peelThickness:'0.1',
          juiceOutputRate:'76%'
        }
      ],
      gridData: {},
      copyGrid:{},
      copyrow:{},
      table: false,
      ischange: false,
      currow:''
    }
  },
  methods: {
    openTable(row,index) {
      this.table = true
      this.gridData = {...row}
      this.copyrow = row;
      console.log('gridData:',index,row);
      this.currow = index;
      this.copyGrid = {...this.gridData};
    },
    changedata() {
      var avalue = document.getElementsByClassName('avalue');
      for(let i = 1; i < avalue.length; i++) {
        avalue[i].readOnly = false;
        avalue[i].classList.add('compiled_input')
      }
      this.ischange = true;
    },
    cancelchange() {
      var avalue = document.getElementsByClassName('avalue');
      for(let i = 1; i < avalue.length; i++) {
        avalue[i].readOnly = true;
        avalue[i].classList.remove('compiled_input')
      }
      this.ischange = false;
      this.gridData = {...this.copyGrid};
      console.log('copy:',this.copyGrid);
    },
    deleteAtree() {
      console.log();
      this.$confirm('确定删除这棵果树吗？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then( () => { 
        this.$request({
          url: `Case/deleteCaseById`,
          method: 'delete',
          params:{caseId: this.gridData.caseId}
        }).then(res => {
          console.log(res);
          this.$message({
            type: 'success',
            message: `删除成功`
          });
          this.table = false;
          this.tableData.splice(this.currow,1);
        })
      }).catch(() => {})
    },
    savecase() {
      this.$confirm('确定更新这棵果树吗？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        for(let key in this.gridData) {
          this.gridData[key] = this.gridData[key] || ''
          this.copyrow[key] = this.gridData[key] || ''
        }
        this.$request({
          url: `Case/updateCase`,
          method: 'put',
          params:{...this.gridData}
        }).then(res => {
          console.log(res);
          // history.back()
          this.$message({
            type: 'success',
            message: `更新成功`
          });
        })
      }).catch(() => {})
    }
  },
  created() {
    console.log(this.$route);
    this.$request({
      url: '/Case/getCaseByVarietyName',
      method: 'get',
      params: {
        varietyName: this.$route.query.varietyName
      }
    })
    .then(res => {
      console.log(res.data);
      this.tableData = res.data
    })
  }
}
</script>
<style scoped>
  #ATreeDetail {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    /* font-weight: 600; */
  }
  #variety_list {
    width: 90%;
    margin: 0 auto;
    padding-top: 10px;
  }
  #fruitvarieties {
    width: 100%;
  }
  .showvarietydata {
    margin: 0 auto;
  }
  .el-table {
    width: 100%;
  }
  .showvarietydata table thead{
    color: rgb(78, 76, 76);
  }
  .search_variety {
    margin-top: 30px;
    height: 50px;
    /* background-color: tomato; */
    display: flex;
    border-bottom: 1px solid #009688;
    position: relative;
    line-height: 50px;
  }
  .search_variety input {
    display: inline-block;
    width: 150px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    vertical-align: middle;
    transition: all 0.2s;
    /* outline: none; */
  }
  .search_variety input:focus {
    width: 300px;
  }
  .aexport {
    height: 35px;
    /* width: 90px; */
    text-align: center;
    position: absolute;
    right: 20px;
  }
  .search_pic {
    width: 32px;
    height: 32px;
    background-color: #009688;
    margin-left: 10px;
    border-radius: 32px;
    line-height: 50px;
    text-align: center;
    border: 2px solid rgb(182, 182, 182);
  }
  .search_pic img {
    height: 30px;
    width: 30px;
    transition: 0.2s;
  }
  .search_pic:hover img {
    transform: scale(1.1);
  }
  .search_pic:hover {
    cursor: pointer;
    
  }
  #ainfo p {
    width: 60%;
    margin-left: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px dotted rgb(175, 175, 175);
  }
  #ainfo > p > span {
    display: inline-block;
    width: 30%;
    text-align: right;
    font-weight: 600;
  }
  .el-drawer__body {
    position: relative;
  }
  #apicInfo {
    position: absolute;
    height: 220px;
    width: 31%;
    border: 1px solid #cccaca;
    right: 10px;
    top: 100px;
  }
  #apicInfo > img {
    width: 100%;
    height: 100%;
  }
  .arow {
    width: 100%;
    height: 40px;
    margin: 0 auto;
    /* margin-top: 3px; */
    /* background-color: green; */
    display: flex;
  }
  .arow > div {
    flex: 1;
    line-height: 40px;
    font-family: "宋体";
  }
  #amoreInfo {
    border-top: 1px solid #009688;
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
  }
  #amoreInfo > .arow:nth-child(odd) {
    background-color: rgb(250, 250, 250);
  }
  #amoreInfo > .arow:nth-child(even) {
    background-color: white;
  }
  .arow > div > span {
    display: inline-block;
  }
  .arow > div > span:first-child {
    width: 50%;
    font-weight: 600;
    text-align: right;
  }
  .arow > div > input {
    margin-left: 10px;
    text-align: left;
    width: 40%;
    font-size: 15px;
  }
  .avalue {
    color: black;
    border: none;
    background: none;
    outline: none;
    height: 25px;
    padding-left: 5px;
  }
  .compiled_input {
    border: 1px solid gray;
    outline: black;
    background: white;
  }
</style>