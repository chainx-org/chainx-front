import { List } from 'echarts';
import React from 'react'
import styled from 'styled-components'
import iconImg from '../../assets/icon.png'
interface LatestItemPop
{
    title: string,
    icon: string,
    ListData: Array<any>
}
export default function LatestItem({ title, icon, ListData }: LatestItemPop)
{
    const LatestItem = styled.div`
        display:flex;
        flex-direction:column;
        border:1px solid #E9E9E9;
        background:#FFFFFF;
        box-shadow:0px 2px 10px 0px rgba(0, 0, 0, 0.04);
        border-radius:10px;
        padding:16px;
    `;
    return (
        <LatestItem>
            <div className="flex flex-row justify-between">
                <span className="text-gray-backgroundGray text-xl font-medium" style={{ marginRight: '18.75rem' }}>{title}</span>
                <div id="homePageBtn">
                    <span>查看全部</span>
                </div>
            </div>
            {title === '最新区块' ?
                ListData?.map((item) =>
                {
                    return (<div className="flex flex-row justify-start px-4 py-4">
                        <div className="latestDiv">
                            <span>BX</span>
                        </div>
                        <div className="flex flex-col justify-start ml-4">
                            <div className="w-100 flex flex-row justify-between">
                                <span>{item.block}</span>
                                <div>
                                    <span>验证人</span>
                                    <span>{item.identifier}</span>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div>
                                    <span>包含{item.number}</span>
                                    <span>交易{item.event}</span>
                                    <span>事件{item.exe}</span>
                                </div>
                                <div>
                                    <span>{item.time}秒之前</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                })
                : ListData?.map((item) =>
                {
                    return (<div className="flex flex-row justify-start px-4 py-4">
                        <div className="latestDiv">
                            <span>TX</span>
                        </div>
                        <div className="flex flex-col justify-start ml-4">
                            <div className="w-100 flex flex-row justify-between">
                                <span>{item.exe}</span>
                                <div className="flex flex-row">
                                    <span>{item.pcxnum}</span>
                                    <img src={iconImg} alt="" style={{ width: '12px', height: '12px' }} />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div>
                                    <span>类型{item.type}</span>
                                </div>
                                <div>
                                    <span>{item.time}秒之前</span>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
        </LatestItem>
    )
}
