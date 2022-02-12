<template>
  <div id="home">
    <div class="sidenav">
      <div class="opro_title" v-if="this.$store.state.oc">
        <img src="~assets/img/logo/1.png" alt="">
        <span>树种资源管理系统</span>
      </div>
      <div class="cpro_title" v-else>
        <img src="~assets/img/logo/1.png" alt="">
      </div>
      
      <div class="pro_funcs">
        <div class="pro_func" @click="changeroute('/home')">
          <i class="el-icon-s-grid"></i>
          <span>系统首页</span>
        </div>
        <div class="pro_func" @click="changeroute('/home/resourcelib')">
          <i class="el-icon-document-copy"></i>
          <span>种质资源库</span>
        </div>
        <div class="pro_func" @click="changeroute('/home/personalinfo')">
          <i class="el-icon-s-promotion"></i>
          <span>个人中心</span>
        </div>
        <div class="pro_func" @click="changeroute('/home/admin')">
          <i class="el-icon-user-solid"></i>
          <span>成员管理</span>
        </div>
        <div class="pro_func" @click="changeroute('/')">
          <i class="el-icon-s-flag"></i>
          <span>登录系统</span>
        </div>
        <div class="pro_func setting">
          <i class="el-icon-s-tools"></i>
           <span>设置</span>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import sidenav from 'components/common/SideNav.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // sidenav
  },
  data() {
    return {
    }
  },
  props: ['oc'],
  methods: {
    //控制侧栏开关
    // oc_sidenav() {
    //   console.log(123);
    //   var sidenav = document.getElementsByClassName('sidenav')[0];
    //   var content = document.getElementsByClassName('content')[0];
    //   console.log(sidenav,content);
    //   if(this.oc == false) {
    //     console.log('true');
    //     sidenav.style.width = '217px';
    //     content.style.width = 'calc(100% - 217px)';
    //     this.oc = true;
    //   } else {
    //     this.oc = false;
    //     console.log('false');
    //     console.log(sidenav.style.width);
    //     sidenav.style.width = '54px';
    //     content.style.width = 'calc(100% - 54px)';
    //   }
    // },
    changeroute(path) {
      // console.log(123);
      this.$router.push(path)
    }
  },
}
</script>
<style>
#home {
  width: 100%;
  height: 100%;
  min-height: 700px;
  position: relative;
}
.sidenav {
  width: 54px;
  height: 100vh;
  min-height: 500px;
  position: fixed;
  top: 0px;
  bottom: 0px;
  background-color: #304156;
  box-shadow: 1px 0px 3px rgb(105, 102, 102);
  overflow: hidden;
  transition: all 0.2s ease;
  z-index: 99;
}
.content {
  width: calc(100% - 56px);
  min-height: 700px;
  /* margin-left: 54px; */
  position: absolute;
  right: 0px;
  transition: width 0.2s;
}
.cpro_title {
  margin-top: 15px;
  width: 40px;
  height: 40px;
  margin-left: 7px;
}
.cpro_title > img {
  width: 40px;
  height: 40px;
}
.opro_title {
  margin-top: 15px;
  height: 40px;
  width: 210px;
  text-align: center;
}
.opro_title > img {
  width: 35px;
  height: 35px;
  vertical-align: middle;
  margin-left: 7px;
}
.opro_title > span {
  color: white;
  font-size: 15px;
  vertical-align: middle;
  display: inline-block;
  margin-left: 10px;
  font-weight: 600;
}
.pro_funcs {
  width: 217px;
  height: calc(100% - 40px);
  margin-top: 30px;
  position: relative;
}
.pro_func {
  height: 56px;
  width: 100%;
  /* background-color: tomato; */
  margin-top: 5px;
  line-height: 56px;
}
.pro_func:hover {
  background-color: #2b4b78;
  cursor: pointer;
}
.pro_func:hover i {
  color: white;
}
.pro_func i {
  color: #dee5ee;
  font-size: 20px;
  margin-left: 17px;
  margin-right: 18px;
}
.pro_func span {
  color: #BFCBD9;
  font-size: 15px;
}
.setting {
  position: absolute;
  bottom: 56px;
}
</style>