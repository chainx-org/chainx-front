import React from 'react'
import styled from 'styled-components'
import icon from '../../assets/Group8Copy1.svg'
import Search from '../Search'
interface HeaderPop
{
    showSearch?: boolean
}
export default function Header(showSearch: HeaderPop)
{
    const handleClick = (e: any) =>
    {
        e.persist()
        console.log(e)
        if (e._targetInst.key === '1') {

        } else if (e._targetInst.key === '2') {

        }
    }
    const Wrapper = styled.div`
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: flex-end;
    `;

    const NavLink = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        height:3rem;
        line-height:3rem;
        @media screen and (max-width: 1200px) {
            display:none;
        }
    `;
    // 添加搜索框组件，通过传参来设置是否显示
    return (
        <div className="flex flex-row justify-between bg-gray-arrow px-12">
            <Wrapper>
                <img src={icon} alt="" />
                <NavLink onClick={handleClick}>
                    <span className="pl-2 text-gray-white mr-9.5">EXPLORER</span>
                    <span key="1" className="text-gray-white mr-9.5">首页</span>
                    <span key="2" className="text-gray-white mr-9.5">区块链</span>
                    <span key="3" className="text-gray-white mr-9.5">验证节点</span>
                    <span key="4" className="text-gray-white mr-9.5">跨链转接桥</span>
                    <span key="5" className="text-gray-white mr-9.5">币币交易</span>
                    <span key="6" className="text-gray-white mr-9.5">工具</span>
                </NavLink>
            </Wrapper>
            <Search className="NavSearch" />


        </div>
    )
}
