import React from 'react'
import icon from '../../assets/Group8Copy1.svg'
import Search from '../Search'
interface HeaderPop
{
    showSearch?: boolean
}
export default function Footer(showSearch: HeaderPop)
{
    const handleClick = (e: any) =>
    {
        e.persist()
        console.log(e)
        if (e._targetInst.key === '1') {

        } else if (e._targetInst.key === '2') {

        }
    }
    // 添加搜索框组件，通过传参来设置是否显示
    return (
        <div className="flex flex-row justify-between bg-gray-arrow">
            <div className="flex flex-row">
                <img src={icon} alt="" />
                <div onClick={handleClick} className="flex flex-row items-center h-12">
                    <span className="pl-2 text-gray-white mr-9.5">EXPLORER</span>
                    <span key="1" className="text-gray-white mr-9.5">首页</span>
                    <span key="2" className="text-gray-white mr-9.5">区块链</span>
                    <span key="3" className="text-gray-white mr-9.5">验证节点</span>
                    <span></span>
                </div>
            </div>

        </div>
    )
}
