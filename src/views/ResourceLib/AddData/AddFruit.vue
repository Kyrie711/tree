<template>
  <div id="addfruit">
    <div class="add_variety">
      <p class="add_title">添加树种</p>
      <div class="add_batch">
        <span>批量导入：</span>
        <el-button type="success">下载模板</el-button>
        <el-button type="primary">上传文件</el-button>
      </div>
      <div class="add_one">
        <span>单个导入：</span>
        <el-button type="danger" @click="dialogVariety = true">添加数据</el-button>
      </div>
      <div class="add_situation"></div>
    </div>
    <div class="add_atree">
      <p class="add_title">添加树种实例</p>
      <div class="add_search"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading">
        <input type="text" placeholder="请输入果树编号" v-model="searchvarietyid">
        <div class="add_search_pic" @click.stop="searchvariety"><img src="~assets/icon/search.png" alt=""></div>
        <div class="findinfo" v-if="find">
          <div class="findit" v-if="isfind">
           <span>查询到{{searchvarietyid}}品种,并已绑定</span>
            <i class="el-icon-circle-close" @click="cancelbind"></i>
            </div>
          <div class="nofindit" v-else>没有查询到{{searchvarietyid}}品种</div>
        </div>
        <div class="findinfo" v-else style="fontWeight:300;color:gray">请先绑定树种！</div>
      </div>
      <div class="add_a">
        <div class="add_batch">
          <span>批量导入：</span>
          <el-button type="success" @click="casexcel">下载模板</el-button>
          <el-button type="primary">上传文件</el-button>
        </div>
        <div class="add_one">
          <span>单个导入：</span>
          <el-button type="danger" @click="dialogTree = true">添加数据</el-button>
        </div>
      </div>
      <div class="add_situation"></div>
    </div>
    <el-dialog title="添加树种" :visible.sync="dialogVariety" :before-close="handleClose">
      <addvariety></addvariety>
    </el-dialog>
    <el-dialog title="添加树种实例" :visible.sync="dialogTree" :before-close="handleClose">
      <addtree :vname="vname"></addtree>
    </el-dialog>
  </div>
</template>
<script>
import addvariety from 'views/ResourceLib/AddData/AddVariety.vue'
import addtree from 'views/ResourceLib/AddData/AddTree.vue'
export default {
  data() {
    return {
      isfind: false,
      dialogVariety: false,
      dialogTree: false,
      loading:false,
      searchvarietyid:'',
      vname:'',
      find:'',
      isfind:''
    }
  },
  components: {
    addvariety,
    addtree
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    searchvariety(e) {  
      console.log('搜寻');
      this.loading = true;
      this.$request({
        url: '/Variety/getVarietyById',
        method: 'get',
        params: {
          varietyId: this.searchvarietyid
        }
      })
      .then(res => {
        console.log('searchvariety----',res.data);
        this.details = res.data;
        this.loading = false;
        this.find = true;
        if(this.details) {
          console.log('找到');
          this.isfind = true;
          this.vname = this.details.varietyName
        }else {
          console.log('没找到');
          this.isfind = false;
        }
      }).catch(err => {
        console.log(err);
        this.loading = false;
      })
    },
    cancelbind() {
      this.find = false;
      this.isfind = false;
      this.searchvarietyid = '';
    },
    casexcel() {
      // window.open('http://118.31.78.224:20001/Case/CaseExcelDownloads')
      this.$request({
        url:'Case/CaseExcelDownloads',
        method:'get',
        responseType: 'arraybuffer'
      }).then(res => {
        console.log(res);
        const data = res.data
        console.log(data,new Blob([data]));
        const url = window.URL.createObjectURL(new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))
        const link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '模板.xlsx')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
    }
  }
}
</script>
<style>
  #addfruit {
    width: 100%;
    height: 100%;
    /* background-color: rgb(238, 144, 127); */
    /* padding-top: 40px; */
    overflow: hidden;
  }
 
  .add_variety {
    margin: 0 auto;
    width: 90%;
    border: 1px solid rgb(170, 170, 170);
    margin-bottom: 10px;
    /* background-color: teal; */
    margin-top: 40px;
  }
  .add_atree {
    margin: 0 auto;
    width: 90%;
    /* height: 200px; */
    border: 1px solid rgb(170, 170, 170);
    /* background-color: violet; */
  }
  .add_title {
    height: 25px;
    background-color: #009688;
    padding-left: 20px;
    line-height: 25px;
    font-size: 17px;
    font-weight: 600;
    color: white;
  }
  .add_batch, .add_one {
    padding-left: 10px;
    height: 40px;
    margin-top: 10px;
    /* margin-bottom: 10px; */
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px dotted gray;
  }
  .add_situation {
    padding-left: 10px;
    height: 40px;
    margin-top: 10px;
    padding-bottom: 10px;
  }
  .add_a > div {
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px dotted gray;
  }
  .add_search {
    margin-top: 10px;
    padding-left: 10px;
    height: 50px;
    /* background-color: tomato; */
    display: flex;
    position: relative;
    line-height: 50px;
    border-bottom: 1px dotted gray;
  }
  .add_search input {
    display: inline-block;
    width: 150px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    vertical-align: middle;
    transition: all 0.2s;
    /* outline: none; */
  }
  .add_search input:hover {
    width: 300px;
  }
  .add_search_pic {
    width: 32px;
    height: 32px;
    background-color: #009688;
    margin-left: 10px;
    border-radius: 32px;
    line-height: 50px;
    text-align: center;
    border: 2px solid rgb(182, 182, 182);
  }
  .findinfo {
    height: 34px;
    line-height: 34px;
    font-size: 17px;
    margin-left: 100px;
    font-weight: 600;
  }
  .findit {
    color: #009688;
  }
  .findit i {
    margin-left: 5px;
    color: gray;
  }
  .findit i:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .add_search_pic img {
    height: 30px;
    width: 30px;
    transition: 0.2s;
  }
  .add_search_pic:hover img {
    transform: scale(1.1);
  }
  .add_search_pic:hover {
    cursor: pointer;
    
  }
</style>