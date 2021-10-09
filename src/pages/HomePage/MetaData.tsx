import React from 'react'
import first from '../../assets/icon_high_sure.svg'
import styled from 'styled-components';
export default function MetaData()
{
    const CardDiv = styled.div`
    height:87.5px;
    padding:20px 0px 0px 36px;
    display:flex;

    .card-item{
        width:248px;
        padding-bottom:21px;
        &.border-bottom{
            border-bottom:1px solid #E9E9E9FF;
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

    const Wrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, 310px);
        background:white;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
        border: 1px solid #E9E9E9;
        border-radius:6px;
        //position: absolute;
        width: 94%;
        margin:-3rem 3rem 0rem 3rem;
        @media screen and (min-width: 1366px) {
            & > div:nth-child(4n+4) {
                .line {
                    display: none;
                }

            }
        }
        @media screen and (min-width: 800px) and (max-width: 1280px){
            & > div:nth-child(3n+3) {
                .line {
                    display: none;
                }

            }
        }
            
    }
    `;
    // const MetaBox = styled.div`
    //     width: 100px;
    //     height: 100px;
    //     border-left:50px solid #000;
    //     border-right:50px solid #fff;
    //     box-sizing: border-box;
    // `;

    return (
        // <MetaBox>
        <Wrapper>
            {metaDataList?.map((item, i) =>
            {
                return (
                    <CardDiv>
                        <img src={first} alt="" />
                        <div className={['flex', 'flex-col', 'justify-start', 'card-item', i < 4 ? 'border-bottom' : ''].join(' ')}>
                            <span className="name">{item.name}</span>
                            <span className="date">{item.data}</span>
                        </div>
                        <div className={[i + 1 % 4 !== 0 ? 'line' : '', i > 3 ? 'line-top' : ''].join(' ')}></div>
                    </CardDiv>
                )
            })}
        </Wrapper>
        // </MetaBox>

    )
}
