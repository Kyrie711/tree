<template>
  <div id="filtrate">
    <div class="filtrate_select">种质资源查询</div>
    <div class="filtrate_select_items">
      <div class="intime filtrate_name">
        <div class="intime_title filtrate_title">入库时间：</div>
        <div class="intime_options filtrate_options">
          <span class="intime_all filtrate_all" style="color:white">全部</span>
          <span class="intime_item" v-for="(item,index) in intime" @click="changeCondition(index,$event.toElement)" :key="item">{{item}}</span>
        </div>
      </div>
      <div class="attr filtrate_name">
        <div class="attr_title filtrate_title">属：</div>
        <div class="attr_options filtrate_options">
          <span class="attr_all filtrate_all" style="color:white">全部</span>
          <div>
            <el-select v-model="value1" multiple placeholder="请选择" class="length">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="category filtrate_name">
        <div class="category_title filtrate_title">类：</div>
        <div class="category_options filtrate_options">
          <span class="category_all filtrate_all" style="color:white">全部</span>
          <div>
            <el-select v-model="value2" multiple placeholder="请选择" class="length">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>   
      </div>
      <div class="breedunit filtrate_name">
        <div class="breedunit_title filtrate_title">育种单位：</div>
        <div class="breedunit_options filtrate_options">
          <span class="breedunit_all filtrate_all" style="color:white">全部</span>
          <div>
            <el-select v-model="value3" multiple placeholder="请选择" class="length">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="saveplace filtrate_name">
        <div class="saveplace_title filtrate_title">保存地点：</div>
        <div class="saveplace_options filtrate_options">
          <span class="saveplace_all filtrate_all" style="color:white">全部</span>
         <div>
            <el-select v-model="value4" multiple placeholder="请选择" class="length">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="conditions filtrate_name">
        <div class="conditions_title filtrate_title">已选条件：</div>
        <div class="conditions_placeholder filtrate_options" v-if="conditions.length==0">暂时没有选择过滤条件</div>
        <div class="conditions_items filtrate_options" v-else>
          <span class="conditions_item" v-for="item in conditions" :key="item.title" @click="removeCondition(item)" style="font-size:14x;font-weight:700">{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import {request} from 'network/request.js'

export default {
  data() {
    return {
      intime: ['2017','2018','2019','2020','2021'],
      // attr: ['柑橘属'],
      // category: ['柑类'],
      // breedunits:['日本宫崎县日南市','美国加州','不详','云南省农科院',
      //             '四川省农业科学院园艺研究所','湖北省农科院果树茶叶研究所','广丰县农业局','美国','南丰县原产','福建长泰县农业局'],
      // saveplace: ['华中农大国家柑橘育种基地'],
      conditions: [],
      options1: [{
          value: '选项1',
          label: '柑橘属'
        }],
      options2: [{
          value: '选项1',
          label: '柑类'
        }],
      options3: [
          {
            value: '选项1',
            label: '日本宫崎县日南市'
          },
          {
            value: '选项2',
            label: '美国加州'
          },
          {
            value: '选项3',
            label: '不详'
          },
          {
            value: '选项4',
            label: '云南省农科院'
          },
          {
            value: '选项5',
            label: '四川省农业科学院园艺研究所'
          },
          {
            value: '选项6',
            label: '湖北省农科院果树茶叶研究所'
          },
          {
            value: '选项7',
            label: '广丰县农业局'
          },
          {
            value: '选项8',
            label: '美国'
          },
          {
            value: '选项9',
            label: '南丰县原产'
          },
          {
            value: '选项10',
            label: '福建长泰县农业局'
          }
          
        ],
        options4: [{
          value: '选项1',
          label: '华中农大国家柑橘育种基地'
        }],
        value1: [],
        value2: [],
        value3: [],
        value4: []
    }
  },
  // created() {
  //   request({
  //     url: '/Apple/listAllApple',
  //   }).then(res => {
  //     console.log(res);
  //   })
  // },
  methods: {
    changeCondition(index,event) {
      console.log(index,event,event.getAttribute("class"));
      let classname = event.getAttribute("class");
      classname = classname.split(' ')[0];
      let condition = event.innerHTML;
      var pos = this.conditions.findIndex(function(item) {
        return item.title == condition;
      });
      if(pos == -1) {
        this.conditions.push({title:condition,class:classname,pos:index});
        let doms = document.getElementsByClassName(classname);
        doms[index].classList.add('chosen');
      } else {
        this.conditions.splice(pos,1);
        let doms = document.getElementsByClassName(classname);
        doms[index].classList.remove('chosen');
      }
    },
    removeCondition(item) {
      let condition = item.title;
      var pos = this.conditions.findIndex(function(item) {
        return item.title == condition;
      });
      this.conditions.splice(pos,1);
      let doms = document.getElementsByClassName(item.class);
      doms[item.pos].classList.remove('chosen');
    }
  },
  
}
</script>
<style>
  #filtrate {
    width: 100%;
    /* padding: 5px; */
    border: 1px solid #d3d0d0;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 5px;
  } 
  .filtrate_select_items {
    padding: 5px;
  }
  .filtrate_select {
    /* width: 100%; */
    background-color: #009688;
    border: 1px solid #009688;
    color: white;
    padding-left: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .filtrate_name {
    display: flex;
    border-bottom: 1px dotted #d6e8fa;
  }
  .filtrate_name>div {
    min-height: 40px;
  }
  .filtrate_title {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
    font-size: 14px;
    font-weight: 700;
  }
  .filtrate_options {
    flex: 10;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .filtrate_options>span {
    display: block;
    /* min-width: 80px; */
    text-align: center;
    margin-right: 15px;
    margin-top: 2px;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 2px;
    padding-left: 2px;
    padding-right: 2px;

  }
  .filtrate_options>span:hover {
    cursor: pointer;
    color:white;
    background-color: rgb(137, 9, 9);
    border-radius: 2px;
  }
  .chosen {
    color:white;
    background-color: rgb(137, 9, 9);
    border-radius: 2px;
  }
  .filtrate_all {
    width: 38px;
    background-color: #009688;
    color: white;
  }
  .conditions_placeholder {
    font-size: 13px;
    font-weight: 200;
  }
  .length {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 500px;
  }

</style>