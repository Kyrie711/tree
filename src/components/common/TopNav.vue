<template>
  <div id="topnav">
    <div class="top_funcs">
      <div class="open_side" @click="oc_sidenav">
        <i class="el-icon-s-operation"></i>
      </div>
      <div class="top_func" v-for="(item,index) in this.funcs" :key="item.func" @click="tolinkk(index)" :class="{active : activer == item.name}">
        <i :class="item.icon"></i>
        <span>{{item.func}}</span>
      </div>
      <div class="top_name" >
        <i :class="user.icon"></i>
        <span>{{user.name}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '管理员哦',
        icon: 'el-icon-s-custom'
      },
      oc: false
    }
  },
  props: ['activer','funcs'],
  methods: {
    changeActiver(name) {
      console.log('changeActiver');
      this.activer = name
    },
    tolinkk(index) {
      this.$router.push({path:this.funcs[index].route})
    },
    //侧栏开关
    oc_sidenav() {
      console.log(123);
      var sidenav = document.getElementsByClassName('sidenav')[0];
      var content = document.getElementsByClassName('content')[0];
      this.$store.commit('changeoc')
      console.log(sidenav,content);
      if(this.$store.state.oc == true) {
        console.log('true');
        sidenav.style.width = '217px';
        content.style.width = 'calc(100% - 217px)';
        // this.oc = true;
      } else {
        // this.oc = false;
        console.log('false');
        console.log(sidenav.style.width);
        sidenav.style.width = '54px';
        content.style.width = 'calc(100% - 54px)';
      }
    }
  }
}
</script>
<style>
  #topnav {
    width: 100%;
    height: 64px;
    /* background-color: tomato; */
    position: fixed;
    top: 0px;
    z-index: 5;
    background-color: white;
    border-bottom: 1px solid rgb(199, 198, 198);
    box-shadow: 2px 0px 4px rgb(188, 190, 191);
  }
  .top_funcs {
    display: flex;
    margin-left: 50px;
    position: relative;
  }
  .open_side {
    position: absolute;
    left: -40px;
    height: 64px;
    line-height: 70px;
    transition: transform 0.2s;
  }
  .open_side:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .open_side i {
    font-size: 25px;
  }
  .top_func {
    height: 64px;
    line-height: 64px;
    margin-right: 30px;
    position: relative;
  }
  .top_func::after {
    content: '';
    display: block;
    position: absolute;
    width: 0%;
    bottom: 0px;
    border-bottom: 3px solid #009688;
    transition: width 0.2s;
    left: 50%;
    transform: translateX(-50%);
    
  }
  .top_func:hover::after {
    width: 105%;
  }
  .top_func i {
    margin-right: 10px;
    color: rgb(94, 92, 92);
  }
  .top_func span {
    color: rgb(94, 92, 92);
    font-weight: 600;
  }
  .top_func:hover{
    cursor: pointer;
  }
  .top_func:hover span{
    /* color: black; */
    /* font-weight: 600; */
  }
  .top_name {
    height: 64px;
    line-height: 64px;
    position: fixed;
    top: 0px;
    right: 100px;
  }
  .top_name i {
    font-size: 22px;
    margin-right: 10px;
  }
  .top_name span {
    font-size: 21px;
  }
  .active::after {
    content: '';
    display: block;
    position: absolute;
    width: 105%;
    bottom: 0px;
    border-bottom: 3px solid #009688;
    transition: width 0.2s;
    left: 50%;
    transform: translateX(-50%);
  }
  .active span{
    /* font-size: 20px; */
    font-weight: 800;
    /* font-size: 17px; */
    color: rgb(0, 0, 0);
  }
</style>