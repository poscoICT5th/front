import React from 'react'
// import './App.css';
// import './style.css'
import { useState } from 'react';
import EChartsReact from 'echarts-for-react';
import 'echarts-gl';

function Echarts1() {
  var hours = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  var days = ['1', '2', '3','4', '5', '6', '7'];
  var data = [[1, 1,700,], ];

  const [options, setOptions] = useState({
    title: {
      text: 'Warehouse map'
    },
    tooltip: {
     // trigger: 'axis',

    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['천안']
    },
    visualMap: {
      min: 500,
      max: 1000,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      }
    },
    xAxis3D: {
      type: 'category',
      data: hours
    },
    yAxis3D: {
      type: 'category',
      data: days
    },
    zAxis3D: {
      type: 'value'
    },
    grid3D: {
      boxWidth: 200,
      boxDepth: 80,
      viewControl: {
        // projection: 'orthographic'
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true
        },
        ambient: {
          intensity: 0.3
        }
      }
    },
    series: [
      {
        name: '천안',
        type: 'bar3D',
        data: data.map(function (item) {
          console.log(item);
          return {
            value: [item[1], item[0], item[2], ],
            
          };
        }),
        shading: 'lambert',
        label: {
          fontSize: 16,
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20,
            color: '#900'
          },
          itemStyle: {
            color: '#900'
          }
        }
      },


    ]
});

  return (
    <EChartsReact
         option={options}
      opts={{ renderer: 'canvas', width:"1500px", height:"700px"}}
    />

  )
}

export default Echarts1