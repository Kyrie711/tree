<template>
  <div id="addvariety">
    <div class="variety_items">
      <div class="variety_item" 
      v-for="item in tree_variety" 
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
      tree_variety: [
        {
          name: 'varietyId',
          label: '编号',
          value: ''
        },{
          name: 'varietyName',
          label: '品种名',
          value: ''
        },{
          name: 'latinName',
          label: '拉丁名',
          value: ''
        },{
          name: 'englishName',
          label: '英文名',
          value: ''
        },{
          name: 'otherName',
          label: '其他名称',
          value: ''
        },{
          name: 'varietyType',
          label: '品种类型',
          value: ''
        },{
          name: 'botanyClassfication',
          label: '植物学分类',
          value: ''
        },{
          name: 'productionArea',
          label: '主产区',
          value: ''
        },{
          name: 'resourcePreservationSite',
          label: '资源保护地',
          value: ''
        },{
          name: 'maleParent',
          label: '父本/亲本',
          value: ''
        },{
          name: 'femaleParent',
          label: '母本',
          value: ''
        },{
          name: 'suitableRootstock',
          label: '适宜砧木',
          value: ''
        },{
          name: 'breedingUnit',
          label: '育种单位',
          value: ''
        },{
          name: 'varietyDescription',
          label: '品种描述',
          value: ''
        },{
          name: 'keyPoints',
          label: '栽培要点',
          value: ''
        },
        {
          name: 'province',
          label: '适栽区(省)',
          value: ''
        },
        {
          name: 'city',
          label: '适栽区(市)',
          value: ''
        },
        {
          name: 'country',
          label: '适栽区(县区)',
          value: ''
        },
      ]
    }
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    submit() {
      this.$confirm('确定提交？', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(() => {
        let params = {};
        let status = 0;
        for(let i = 0; i < 15; i++) {
          params[this.tree_variety[i].name] = this.tree_variety[i].value;
        }
        params['fId'] = this.$route.params.fruit_variety
        console.log(params,this.$route.params.fruit_variety);
        this.$request({
          url: 'Variety/insertVarity',
          method: 'post',
          params:{...params}
        }).then(res => {
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
        })
      }).catch(() => {})    
    
    },
    reset() {
      for(let i = 0; i < this.tree_variety.length; i++) {
        this.tree_variety[i].value = ''
        this.tree_variety[i].placeholder = '请填写'
      }
    }
  }
}
</script>
<style>
  .variety_items {
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
  .variety_item {
    width: 47%;
    height: 40px;
    /* margin-right: 10px; */
    margin-top: 10px;
    /* background-color: teal; */
    line-height: 40px;
    border-bottom: 1px dotted gray;
  }
  .variety_item:nth-child(odd) {
    margin-right: 10px;
    margin-left: 10px;
  }
  .variety_item label {
    display: inline-block;
    width: 33%;
    text-align: right;
    font-size: 16px;
    font-weight: 600;
  }
  .variety_item input {
    width: 60%;
    height: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .el-dialog {
    min-width: 800px;
  }
  #addvariety .btn {
    width: 100%;
    text-align: center;
    padding-top: 20px;
  }
</style>