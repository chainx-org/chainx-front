// 引入 ECharts 主模块
import * as echarts from 'echarts';
// // 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/pie';
import { useEffect, useState } from 'react';
import React from 'react';

const  Model_echarts = (props:any) => {
  let [main , setMain] = useState<any>('')
  const option ={
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  useEffect(()=>{
    let node = document.getElementById('main')
    setMain(node)
  } , [])
  // 基于准备好的dom，初始化echarts实例
  if(main !== ""){
    let myChart = echarts.init(main);
    myChart.resize()
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      let myChart = echarts.init(main);
      myChart.resize()
      myChart.setOption(option);
    });
  }
  // 绘制图表
  return (
    <div id="main"></div>
  )
}

export default Model_echarts;