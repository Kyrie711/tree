<template>
  <div id="variety_list">
    <filtrate></filtrate>
    <div class="search_variety">
      <input type="text" placeholder="请输入树种编号">
      <div class="search_pic"><img src="~assets/icon/search.png" alt=""></div>
      <el-button class="variety_export" type="success">批量导出</el-button>
    </div>
    <div id="fruitvarieties">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%;min-width: 1300px"
        max-height="550"
        :header-cell-style="{textAlign: 'center'}"
        :cell-style="{ textAlign: 'center' }"
        :default-sort = "{prop: 'varietyId', order: 'ascending'}">
        <!-- <el-table-column
          type="index"
          width="50"
          fixed>
        </el-table-column> -->
        <el-table-column
          prop="appleId"
          label="编号"
          width="120"
          sortable>
        </el-table-column>
        <el-table-column
          prop="appleName"
          label="品种名"
          width="120"
          sortable>
        </el-table-column>
        <!-- <el-table-column
          prop="englishName"
          label="英文名"
          width="120">
        </el-table-column> -->
        <el-table-column
          prop="appleLatinName"
          label="拉丁名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="appleAnalysisTime"
          label="果实分析时间"
          width="170">
        </el-table-column>
        <el-table-column
          prop="appleOutput"
          label="产量(kg/亩)"
          width="170">
        </el-table-column>
        <el-table-column
          prop="appleCity"
          label="栽培地_市">
        </el-table-column>
        <el-table-column
          prop="appleParent"
          label="亲本">
        </el-table-column>
        <el-table-column
          prop="appleBreedingUnit"
          label="育种单位">
        </el-table-column>
        <el-table-column
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="handleClick(scope.row)"
              type="text"
              size="small">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>


import {request} from 'network/request.js'
import filtrate from 'views/ResourceLib/DataList/Variety_List/Filtrate'
export default {
  data() {
    return {
      tableData: []
     
    }
  },
  mounted() {
    
    let url = null
    let url1 = null
    let url2 = null
    let url3 = '/Apple/listAllApple'
    let url4 = null
    let fruit_route = this.$route.params.fruit_variety
    console.log(fruit_route);
    switch (fruit_route) {
      case "1":
        url = url1
        break;
      case "2":
        url = url2
        break;  
      case "3":
        url = url3  
        break 
      case "4":
        url = url4  
        break 
      default:
        break;
    }
    
    
    request({
      url ,
    }).then(res => {
      console.log(res.data);
      this.tableData = res.data
      for (let i of this.tableData) {
        i.appleAnalysisTime = this.formatDate(i.appleAnalysisTime)
      }
    })

  },
  methods: {
    handleClick(row) {
      this.$router.push('/home/resourcelib/datalist/fruitdetail/' + row.appleId);
    },
    formatDate(date) {
      var date = new Date(date);
      var YY = date.getFullYear() + '-';
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      return YY + MM + DD;
    }
  },
  components: {
    filtrate,
  }
}
</script>
<style>  
  #variety_list {
    width: 90%;
    margin: 0 auto;
    padding-top: 10px;
  }
  #fruitvarieties {
    width: 100%;
    padding-bottom: 30px;
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
  .variety_export {
    height: 35px;
    /* width: 90px; */
    text-align: center;
    position: absolute;
    right: 20px;
  }
</style>