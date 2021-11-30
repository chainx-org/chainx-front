/** @format */

// 引入 ECharts 主模块
import * as echarts from 'echarts'
// // 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/pie'
import {useEffect, useState} from 'react'
import React from 'react'

const Model_echarts = (props: any) => {
  let [mainChat, setMain] = useState<any>('')
  const option = {
    xAxis: {
      type: 'category',
      data: props?.data?.resultTime,
      boundaryGap: false,
    },
    yAxis: {
      interval: 500000, // 步长
      min: 0, // 起始
      max: 800000, // 终止
      type: 'value',
      splitLine: {
        //网格线
        lineStyle: {
          type: 'dashed',
          color: 'rgba(233, 233, 233, 0.2)', //设置网格线类型 dotted：虚线   solid:实线
        },
        show: true, //隐藏或显示
      },
      axisLine: {
        // 隐藏y轴
        show: false,
      },
      axisLabel: {
        inside: true,
      },
      axisTick: {
        // 隐藏y轴刻度线
        show: false,
      },
    },
    series: [
      {
        data: props?.data?.resultValue,
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {},
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  }
  useEffect(() => {
    if (mainChat != null && mainChat != '' && mainChat != undefined) {
      mainChat.dispose()
    }
    let node = document.getElementById('mainChat')
    setMain(node)
  }, [])
  // 基于准备好的dom，初始化echarts实例
  if (mainChat !== '') {
    let myChart = echarts.init(mainChat)
    myChart.resize()
    myChart.setOption(option)
    window.addEventListener('resize', function () {
      let myChart = echarts.init(mainChat)
      myChart.resize()
      myChart.setOption(option)
    })
  }
  // 绘制图表
  return <div id="mainChat" style={{width: '100%', height: '100%'}}></div>
}

export default Model_echarts
