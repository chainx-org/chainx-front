import React from 'react'
import first from '../../assets/icon_high_sure.svg'
import styled from 'styled-components';
export default function MetaData()
{
    const CardDiv = styled.div`
    width:312px;
    height:87.5px;
    padding:20px 0px 0px 36px;
    display:flex;
    .card-item{
        width:248px;
        padding-bottom:21px;
        &.border-bottom{
            border-bottom:1px solid #000;
        }
        .name{
            color:#000;
        }
        .date{
            color:#000;
        }
        
    }
    .line{
        height:67px;
        width:1px;
        background-color:#000;
        margin-left:32px;
        &.line-top{
            position:relative;
            top:-21px;
        }
    }
    `;
    const metaDataList = [{
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }]
    return (
        <div className="flex flex-row justify-start flex-wrap text-gray-bgWhite bg-white"
            style={{ 'background': '#fff', width: '1249px', borderRadius: '6px', marginBottom: '24px' }}>
            {metaDataList?.map((item, i) =>
            {
                return (
                    <CardDiv>
                        <img src={item.icon} alt="" />
                        <div className={['flex', 'flex-col', 'justify-start', 'card-item', i < 4 ? 'border-bottom' : ''].join(' ')}>
                            <span className="name">{item.name}</span>
                            <span className="date">{item.data}</span>
                        </div>
                        <div className={[i + 1 % 4 !== 0 ? 'line' : '', i > 3 ? 'line-top' : ''].join(' ')}></div>
                    </CardDiv>
                )
            })}
        </div>
    )
}
