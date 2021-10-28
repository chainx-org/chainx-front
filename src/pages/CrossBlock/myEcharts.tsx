// 引入 ECharts 主模块
import * as echarts from 'echarts';
// // 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/pie';
import React, { useEffect, useState } from 'react';

const  Model_echarts = (props:any) => {
  let [main , setMain] = useState<any>('')
  const option ={
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '1%',
      left: 'center',
      icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
      itemWidth: 10,  // 设置宽度
      itemHeight: 10, // 设置高度
      itemGap: 40 // 设置间距
    },
    series: [
      {
        name: 'Rate',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          {value: 50.00, name: 'X-BTC'},
          {value: 2.00, name: 'PCX'},
          {value: 42.87, name: 'TR'},
        ]
      }
    ]
    // series: [
    //   {
    //     name: 'Rate',
    //     type: 'pie',
    //     radius: ['40%', '70%'],
    //     avoidLabelOverlap: false,
    //     label: {
    //       show: true,
    //       position: 'center'
    //     },
    //     emphasis: {
    //       label: {
    //         show: true,
    //         fontSize: '30',
    //         fontWeight: 'bold'
    //       }
    //     },
    //     labelLine: {
    //       show: true
    //     },
    //     data: [
    //       { value: 50.00,name: 'X-BTC' },
    //       { value: 2.00, name: 'PCX' },
    //       { value: 42.87, name: 'TR' },
    //     ]
    //   }
    // ]
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