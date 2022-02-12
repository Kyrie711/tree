const echarts = require('echarts')
export default function(dom) {
  console.log('pic1哦');
  var myChart = echarts.init(dom);

  var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

  var option;
  
  myChart.showLoading();
  $.getJSON(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
      myChart.hideLoading();
  
      graph.nodes.forEach(function (node) {
          node.label = {
              show: node.symbolSize > 30
          };
      });
      option = {
          title: {
              // text: 'Les Miserables',
              // subtext: 'Default layout',
              top: 'bottom',
              left: 'right'
          },
          tooltip: {},
          legend: [{
              // selectedMode: 'single',
              data: graph.categories.map(function (a) {
                  return a.name;
              }),
              textStyle: {
                color: 'white'
              }
          }],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
              {
                  name: 'Les Miserables',
                  type: 'graph',
                  layout: 'none',
                  data: graph.nodes,
                  links: graph.links,
                  categories: graph.categories,
                  roam: true,
                  label: {
                      position: 'center',
                      formatter: '{b}'
                  },
                  lineStyle: {
                      color: 'source',
                      curveness: 0.3
                  },
                  emphasis: {
                      focus: 'adjacency',
                      lineStyle: {
                          width: 10
                      }
                  }
              }
          ]
      };
  
      myChart.setOption(option);
  });
  
}