<template>
  <div id="addtree">
    <div class="atree_items">
      <div class="atree_item" 
      v-for="item in atree" 
      :key="item.name">
        <label for="item.name">{{item.label}}：</label>
        <input type="text" name="item.name" v-model="item.value">
      </div>
      <div class="btn">
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button type="info" @click="reset">重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      atree: [
        // {
        //   name: 'caseId',
        //   label: '品种名称',
        //   value: ''
        // },
        {
          name: 'analysisTime',
          label: '果实分析时间',
          value: ''
        },{
          name: 'evaluation',
          label: '感官评价',
          value: null
        },{
          name: 'weight',
          label: '单果重(g)',
          value: null
        },{
          name: 'longitudinalDiameter',
          label: '纵径(cm)',
          value: null
        },{
          name: 'transverseDiameter',
          label: '横径(cm)',
          value: null
        },{
          name: 'shape',
          label: '果形(指数)',
          value: null
        },{
          name: 'peelThickness',
          label: '果皮厚度(cm)',
          value: null
        },{
          name: 'capsuleValvesNumber',
          label: '单果囊瓣数(个)',
          value: null
        },{
          name: 'seedsNumber',
          label: '单果种子数(颗)',
          value: null
        },{
          name: 'edibleRate',
          label: '可食率(%)',
          value: null
        },{
          name: 'juiceOutputRate',
          label: '出汁率(%)',
          value: null
        },{
          name: 'tss',
          label: 'TSS(%)',
          value: null
        },{
          name: 'ta',
          label: 'TA(%)',
          value: null
        },{
          name: 'solidAcidRatio',
          label: '固酸比',
          value: null
        },
        {
          name: 'vc',
          label: 'VC(mg/100g)',
          value: null
        },
        {
          name: 'hpeel',
          label: 'H(果皮)',
          value: null
        },
        {
          name: 'hjuice',
          label: 'H(果汁)',
          value: null
        },{
          name: 'maturePeriod',
          label: '成熟期',
          value: null
        },{
          name: 'phenologicalPeriod',
          label: '物候期',
          value: null
        },{
          name: 'output',
          label: '产量(kg/亩)',
          value: null
        },{
          name: 'userName',
          label: '录入员',
          value: null
        },{
          name: 'plantId',
          label: '土壤类型',
          value: null
        },{
          name: 'plantGrade',
          label: '适栽等级',
          value: null
        },
        {
          name: 'province',
          label: '采样地点(省)',
          value: null
        },
        {
          name: 'city',
          label: '采样地点(市)',
          value: null
        },
        {
          name: 'country',
          label: '采样地点(县区)',
          value: null
        }
      ]
    }
  },
  props:['vname'],
  methods: {
    submit() {
      this.$confirm('确定提交？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        let params = {};
        let status = 0;
        for(let i = 0; i < 21; i++) {
          params[this.atree[i].name] = this.atree[i].value;
        }
        params['vname'] = this.vname;
        console.log(params);
        this.$request({
          url:'Case/insertCase',
          method:'post',
          params: {...params}
        })
        .then(res => {
          console.log(res);
          status = res.status
          if(status == 200) {
            this.$message({
              type: 'success',
              message: `提交成功`
            });
            this.reset();
          }else {
            this.$message({
              type: 'danger',
              message: '提交失败'
            })
          }
        }).catch((err)=> {
          this.$message({
              type: 'danger',
              message: '提交失败'
            })
        })
      }).catch(() => {})    
    },
    reset() {
      for(let i = 0; i < this.atree.length; i++) {
        this.atree[i].value = ''
        this.atree[i].placeholder = '请填写'
      }
    }
  },
  created() {
    console.log('添加品种',this.vname);
  }
}
</script>
<style>
  .atree_items {
    width: 95%;
    /* height: 800px; */
    /* background-color: tomato; */
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid rgb(25, 140, 83);
    padding-bottom: 20px;
    border-radius: 5px;
  }
  .atree_item {
    width: 47%;
    height: 40px;
    /* margin-right: 10px; */
    margin-top: 10px;
    /* background-color: teal; */
    line-height: 40px;
    border-bottom: 1px dotted gray;
  }
  .atree_item:nth-child(odd) {
    margin-right: 10px;
    margin-left: 10px;
  }
  .atree_item label {
    display: inline-block;
    width: 38%;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
  }
  .atree_item input {
    width: 56%;
    height: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .el-dialog {
    min-width: 800px;
  }
  #addtree .btn {
    width: 100%;
    text-align: center;
    padding-top: 20px;
  }
</style>