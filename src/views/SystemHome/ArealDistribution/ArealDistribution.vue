<template>
  <div id="arealdistribution">
    <div class="area_map"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
// import '../../../utils/bmap.min.js'
require('echarts/extension/bmap/bmap')
export default {
  mounted() {
    var areamap = document.getElementsByClassName('area_map')[0];
    var myChart = echarts.init(areamap);
    var map = new BMapGL.Map(areamap);
    var point = new BMapGL.Point(106.404, 35.915);
    map.centerAndZoom(point, 6); 
    map.enableScrollWheelZoom(true);  
    map.setMapStyleV2({     
        styleId: '9baa23e74ec33261c2ec635d0b5ed12b'
    });


    // var option = {
    //     // 加载 bmap 组件
    //     bmap: {
    //         // 百度地图中心经纬度
    //         center: [120.13066322374, 30.240018034923],
    //         // 百度地图缩放
    //         zoom: 14,
    //         // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
    //         roam: true,
    //         // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
    //         mapStyle: {}
    //     },
    //     series: [{
    //         type: 'scatter',
    //         // 使用百度地图坐标系
    //         coordinateSystem: 'bmap',
    //         // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
    //         data: [ [120, 30, 1] ]
    //     }]
    // }
    // // 获取百度地图实例，使用百度地图自带的控件
    // console.log(echarts);
    // console.log(bmap);
    
    // var bmap = echarts.getModel().getComponent('bmap').getBMap()
    // bmap.addControl(new BMap.MapTypeControl());
  
  //   var _this = this;

  //   _this.echartsModel = echarts.init(areamap)
  //   _this.echartsModel.setOption({
  //       bmap: {
  //           roam: true, // 用户是否可以拖放和缩放地图
  //           opt: { 
  //             enableMapClick: false, //禁止地图底图的点击事件
  //           }
  //       },
  //       animation: false,//关闭动画效果，这样在地图上覆盖散点图或者热力图的时候，拖动将不会有比较长时间的延迟
  //       series: [],
  //   });

  //   // 添加百度地图插件bmp，获得地图对象，获取到的百度地图对象适用于所有的百度地图的接口。
  //   _this.mapModel = _this.echartsModel.getModel().getComponent('bmap').getBMap();
  //   //设置地图的中心点和缩放级别
  //   _this.mapModel.centerAndZoom(new BMap.Point(_this.centerLng,_this.centerLat),_this.zoom);
    
  }

  
}
</script>
<style>
  #arealdistribution {
    width: 100%;
    height: calc(100vh - 64px);
    /* background-color: tomato; */
  }
  .area_map {
    width: 100%;
    height: 100%;
  }
</style>