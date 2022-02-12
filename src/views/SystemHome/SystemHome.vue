<template>
  <div id="systemhome">
    <topnav ref="topnav" :activer="activer" :funcs="funcs"></topnav>
    <div class="homecontent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import topnav from 'components/common/TopNav.vue'
export default {
  data() {
    return {
      activer: this.$route.name || 'SystemDetails',
      funcs: [
        {
          icon: 'el-icon-notebook-1',
          func: '系统详情',
          name: 'systemdetails',
          route: '/home'
        },
        {
          icon: 'el-icon-notebook-1',
          func: '品质数据采集区域分布',
          name: 'arealdistribution',
          route: '/home/arealdistribution'
        },
        {
          icon: 'el-icon-notebook-1',
          func: '资源种类分布',
          name: 'speciedistribution',
          route: '/home/speciedistribution'
        }
      ]
    }
  },
  components: {
    topnav
  },
  mounted() {
    // console.log('系统首页：',this.$route);
  },
  watch: {
    $route(to,from) {
      this.activer = to.name;
    }
  }
}
</script>
<style>
  .homecontent {
    width: 100%;
    min-width: 1200px;
    margin-top: 64px;
    height: calc(100vh - 64px);
  }
</style>