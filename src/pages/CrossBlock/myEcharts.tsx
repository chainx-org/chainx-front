// 引入 ECharts 主模块
import * as echarts from 'echarts';
// // 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/pie';
import React, { useEffect, useState } from 'react';

const  Model_echarts = (props:any) => {
  let [mainEchats , setMain] = useState<any>('')
  const option ={
    animation: false,//去除动画渲染
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} ({d}%)'
    },

    legend: {
      bottom: '1%',
      left: 'center',
      icon: 'circle',   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
      itemWidth: 10,  // 设置宽度
      itemHeight: 10, // 设置高度
      itemGap: 40 // 设置间距
    },

    color: ['#E0E0E0', '#FFE403', '#2C83EA'],
    series: [
      {
        name: 'Rate',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          {value: 12, name: 'TR'},
          {value: 8.8, name: 'X-BTC'},
          {value: 79.2, name: 'PCX'},
        ],
        label: {            //饼图图形上的文本标签
          normal: {
            show: true,
            position: 'outside', //标签的位置
            textStyle: {
              fontWeight: 400,
              fontSize: 12    //文字的字体大小
            },
            formatter: '{b} {d}%'
          }
        }
      }

    ]
  };
  useEffect(()=>{
    if (mainEchats != null && mainEchats != "" && mainEchats != undefined) {
      mainEchats.dispose();
    }
    let node = document.getElementById('mainEchats')
    setMain(node)

  } , [])
  // 基于准备好的dom，初始化echarts实例
  if(mainEchats != null && mainEchats != "" && mainEchats != undefined){
    let myChart = echarts.init(mainEchats);
    myChart.resize()
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      let myChart = echarts.init(mainEchats);
      myChart.resize()
      myChart.setOption(option);
    });
  }
  // 绘制图表
  return (
    <div id="mainEchats" style={{width: '410px', height: '280px', margin: 'auto'}}></div>
  )
}

export default Model_echarts;