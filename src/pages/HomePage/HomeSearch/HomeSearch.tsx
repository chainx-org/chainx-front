import React from 'react';
import Search from '../../../components/Search';
import styled from 'styled-components';
import bgImg from '../../../assets/Lightning@2x.webp'

const TableWrapper = styled.div`
      display: grid;
      grid-template-columns: 60% 40%;
      place-content: space-around space-evenly;
      padding: 3rem 6rem 2rem 6rem;
      position: relative;
      @media screen and (max-width: 1150px) {
        grid-template-columns: 100%;
        padding: 1rem;
        > div {
          > div {
            font-size: 1.5rem !important;
          }
        }

        .bgImage {
          display: none;
        }
      }
  .Home_pageSearch {
    width: 70%;
    @media screen and (max-width: 1150px) {
      width: 100%;
    }
  }
`;

const EchartBox = styled.div`
      //grid grid-cols-2 border-gray-borderGray bg-gray-backgroundGray rounded-lg
      display: grid;
      grid-template-columns:1fr 1fr;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      border: 1px solid rgba(105, 168, 237, 0.21);
      background: #111519!important;
      opacity: 1;
      position:relative;
      z-index:1;
      @media screen and (max-width: 1150px) {
        grid-template-columns:1fr;
        grid-template-rows: 10rem 10rem;
      }
    `;

function homeSearch() {

    return (
      <TableWrapper>
        <div className='w-overSpread h-overSpread absolute items-center mx-auto my-auto'>
          <img src={bgImg} alt="" style={{position: 'relative', objectFit: 'cover', margin: 'auto auto',maxWidth:'none',width:'60%',zIndex:1}}/>
        </div>
        <div className="grid grid-rows-2 relative" style={{zIndex:2}}>
          <div className="h-13 text-4xl PingFangSC-Medium, PingFang SC text-textColor-white mb-5">ChainX Blockchain
            Explorer
          </div>
          <Search className="Home_pageSearch "/>
          {/*<Search  className="media_pageSearch"/>*/}
        </div>
        {/*<EchartBox>*/}
        {/*    <div className="flex flex-col justify-start px-6 py-1">*/}
        {/*        <div className="flex flex-row">*/}
        {/*            <img src={icon} alt="" className="h-6 pr-1"/>*/}
        {/*            <span className="text-base text-gray-white">ChainX</span>*/}
        {/*        </div>*/}
        {/*        <div className="flex flex-row justify-between pb-2">*/}
        {/*            <span className="text-3xl text-gray-white pr-6">$ 3.375</span>*/}
        {/*            <div className="flex flex-row justify-start">*/}
        {/*                <span className="miniGrayFront">11%</span>*/}
        {/*                <div id="triangle" className="leading-12"/>*/}
        {/*              </div>*/}
        {/*          </div>*/}
        {/*          <div className="Line" />*/}
        {/*          <div className="flex flex-row justify-between py-2">*/}
        {/*              <span className="miniGrayFront">发行总量</span>*/}
        {/*              <span className="miniGrayFront">$ 6,731,598,423</span>*/}
        {/*          </div>*/}
        {/*        <div className="flex flex-row justify-between pt-2">*/}
        {/*            <span className="miniGrayFront">24小时交易量</span>*/}
        {/*            <span className="miniGrayFront">$ 12,423</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="w-overSpread h-overSpread">*/}
        {/*        <Model_echarts/>*/}
        {/*    </div>*/}
        {/*</EchartBox>*/}
      </TableWrapper>
    )
}
export default React.memo(homeSearch);
