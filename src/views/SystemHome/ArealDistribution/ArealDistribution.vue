<template>
    <div>
      <div id="container"></div>
      <div class="info" style="min-width: 200px;">
        <h4>地区</h4>
        <p>中文名字：<span id="name">--</span></p>
        <p>SOC：<span id="soc">--</span></p><hr>
        <p>移动至地图任意陆地区域</p>
      </div>

 </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
    name:"Mapview",
    data(){
        return{
            map: null,
            Fill: 'rgba(20, 120, 230, 0.3)',
            disCountry: null
        } 
    },
    created(){

    },
    mounted(){
        // this.initAMap();
        AMapLoader.load({
                key:'7deda6e595fc22846191297879e66f8f',  //设置您的key
                version:"2.0",
                plugins:['AMap.ToolBar','AMap.Driving'],
                AMapUI:{
                    version:"1.1",
                    plugins:[],

                },
                Loca:{
                    version:"2.0"
                },
            }).then((AMap)=>{
                 this.disCountry = new AMap.DistrictLayer.Country({
                  zIndex: 10,
                  styles: {
                      // 颜色格式: #RRGGBB、rgba()、rgb()、[r, g, b, a]
                      // 国境线
                      //'nation-stroke': nationStroke,
                      // 海岸线
                      //'coastline-stroke': '',
                      // 填充
                      'fill': function (props) {
                          console.log(props.adcode);
                          if (props.adcode == 420000) {
                              updateInfo(props);
                              return 'rgba(20, 120, 230, 0.3)';
                          } else {
                              return 'white'
                          }
                      }
                  }
              });

                this.map = new AMap.Map("container",{
                  zooms: [5, 18],
                  center: [110,35],
                  showIndoorMap: false,
                  zoom: 3,
                  isHotspot: false,
                  defaultCursor: 'pointer',
                  touchZoomCenter: 1,
                  pitch: 0,
                  layers: [
                    this.disCountry
                  ],
                  viewMode: '3D',

                });
                
            }).catch(e=>{
                console.log(e);
            }).then(() => {
              let m = this.map
               this.map.on('complete',() =>{
        var layer = new AMap.LabelsLayer({
            // 开启标注避让，默认为开启，v1.4.15 新增属性
            collision: false,
            // 开启标注淡入动画，默认为开启，v1.4.15 新增属性
            animation: true,
        });
        
        for (var i = 0; i < LabelsData.length; i++) {
            LabelsData[i].text.style.fontSize = 12
            LabelsData[i].text.style.strokeWidth = 3
            var labelsMarker = new AMap.LabelMarker(LabelsData[i]);
            layer.add(labelsMarker);
        }
        console.log(this.map);
        this.map.add(layer);
    })
    let disc = this.disCountry
    this.map.on('mousemove', function (ev) {

        var px = ev.pixel;
        // 拾取所在位置的行政区

        var props = disc.getDistrictByContainerPos(px);

        if (props) {
            var adcode = props.adcode;
            if(adcode){
                // 重置行政区样式
                disc.setStyles({
                    // 国境线
                    //nation-stroke': nationStroke,
                    // 海岸线
                    //'coastline-stroke': '',
                    'fill': function (props) {
                        return props.adcode == adcode ? 'rgba(20, 120, 230, 0.3)' : 'white';
                    }

                });
                updateInfo(props);

            }
            

            
        }
    });
            })

            function updateInfo(props) {
              document.getElementById('name').innerText = props.NAME_CHN;
              document.getElementById('soc').innerText = props.SOC;
            } 
        function updateInfo(props) {
              document.getElementById('name').innerText = props.NAME_CHN;
              document.getElementById('soc').innerText = props.SOC;
        } 




    },
    methods:{
    }


}
</script>
<style  scoped>
    @import url(//a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css);
    #container{
        padding:0px;
        margin: 0px;
        width: 100%;
        height: 100%;
        position:absolute;
    }

    .info {
      margin-top: 60px;
      font-size: 16px;
    }

    .info span {
      color: #0288d1;
      font-size: 16px;
    }

</style>