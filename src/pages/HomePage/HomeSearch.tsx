import React from 'react'
import Search from '../../components/Search'
import icon from '../../assets/icon.png'
import Model_echarts from './charts.jsx'

export default function HomeSearch()
{
    return (
        <div className="flex flex-row flex-wrap justify-between bg-gray-arrow">
            <div className="flex flex-col">
                <div className="h-13 text-4xl PingFangSC-Medium, PingFang SC text-textColor-white">ChainX Blockchain Explorer</div>
                <Search />
            </div>
            <div className="border-gray-borderGray bg-gray-backgroundGray rounded-lg flex flex-row">
                <div className="flex flex-col justify-start px-6 py-1">
                    <div className="flex flex-row" >
                        <img src={icon} alt="" className="w-6 h-6 pr-1" />
                        <span className="text-base text-gray-white">ChainX</span>
                    </div>
                    <div className="flex flex-row justify-center pb-2">
                        <span className="text-3xl text-gray-white pr-6">$ 3.375</span>
                        <span className="miniGrayFront">11%</span>
                        <div id="triangle" className=" leading-12"></div>
                    </div>
                    <div className="Line" />
                    <div className="flex flex-row justify-between pt-1">
                        <span className="miniGrayFront">发行总量</span>
                        <span className="miniGrayFront">$ 6,731,598,423</span>
                    </div>
                    <div className="flex flex-row justify-between pb-1">
                        <span className="miniGrayFront">24小时交易量</span>
                        <span className="miniGrayFront">$ 12,423</span>
                    </div>
                </div>
                <div className="Linecol" />
                <div className='w-fitContent h-12'>
                    <Model_echarts />
                </div>
            </div>

        </div >
    )
}
