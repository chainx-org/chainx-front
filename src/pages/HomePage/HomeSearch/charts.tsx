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
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed'],
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                },
                show:true //隐藏或显示
            }
        
        },
        series: [{
            data: [932, 901, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
            },
        },
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