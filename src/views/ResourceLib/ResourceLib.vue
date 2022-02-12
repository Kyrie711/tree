<template>
  <div id="resourcelib">
    <topnav :activer="activer" :funcs="funcs"></topnav>
    <div class="resourcecontent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import topnav from 'components/common/TopNav.vue'
export default {
  data() {
    return {
      activer: this.$route.path.split('/')[3] || 'situation',
      funcs: [
        {
          icon: 'el-icon-notebook-1',
          func: '资源概况',
          name: 'situation',
          route: '/home/resourcelib'
        },
        {
          icon: 'el-icon-notebook-1',
          func: '种质资源库',
          name: 'datalist',
          route: '/home/resourcelib/datalist'
        },
        {
          icon: 'el-icon-notebook-1',
          func: '数据录入',
          name: 'adddata',
          route: '/home/resourcelib/adddata'
        }
      ]
    }
  },
  components: {
    topnav
  },
  watch: {
    $route(to,from) {
      var active = to.path.split('/')[3];
      this.activer = active == undefined ? 'situation' : active;
    }
  },
  mounted() {
    console.log(this.$route);
  }
}
</script>
<style>
  .resourcecontent {
    margin-top: 64px;
    height: calc(100vh - 64px);
  }
</style>