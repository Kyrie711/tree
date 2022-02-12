const echarts = require('echarts')
export default function(dom) {
  var myChart = echarts.init(dom);
  var option;
  option = {
    tooltip: {
      trigger: 'item',
      // padding: 1,
      formatter: function(param) {  
        console.log(param);
          return param.name + ':' + param.value;
      },
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: 'white'
      }
    },
    series: [{
        type: 'treemap',
        data: [{
            name: '武汉',            // First tree
            value: 15,
            children: [{
                name: '北京',       // First leaf of first tree
                value: 9
            }, {
                name: '长沙',       // Second leaf of first tree
                value: 6
            }]
        }, {
            name: '',            // Second tree
            value: 20,
            children: [{
                name: '武汉',       // Son of first tree
                value: 20,
                children: [{
                    name: '武汉',  // Granson of first tree
                    value: 20
                }]
            }]
        }, {
          name: '杭州',
          value: 15
        }, {
          name: '黄冈',
          value: 25
        }, {
          name: '邯郸',
          value: 18
        }],
        colorAlpha: [0.3,0.8]
    }]
};
  myChart.setOption(option)
}