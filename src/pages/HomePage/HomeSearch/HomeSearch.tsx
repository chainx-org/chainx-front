import React from 'react';
import Search from '../../../components/Search';
import styled from 'styled-components';
// import bgImg from '../../../assets/Lightning@2x.webp'

const TableWrapper = styled.div`
      display: grid;
      grid-template-columns: 60% 40%;
      place-content: space-around space-evenly;
      padding: 3rem 6rem 2rem 6rem;
      position: relative;
      @media screen and (max-width: 900px) {
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
      @media screen and (max-width: 900px) {
        grid-template-columns:1fr;
        grid-template-rows: 10rem 10rem;
      }
    `;

function homeSearch() {

    return (
      <TableWrapper>
        <div className='w-overSpread h-overSpread absolute items-center mx-auto my-auto'>
          <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aa196664-5b95-4456-9127-0fdb50f1c9d1/Untitled.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211027T104802Z&X-Amz-Expires=86400&X-Amz-Signature=81254857e01c1c48ac77121f1d9f3405205fdf0735a8dbfadae19c93f2409997&X-Amz-SignedHeaders=host' alt="" style={{position: 'relative', objectFit: 'cover', margin: 'auto auto',maxWidth:'none',width:'60%'}}/>
        </div>
        <div className="grid grid-rows-2 relative" style={{zIndex:2}}>
          <div className="h-13 text-4xl PingFangSC-Medium, PingFang SC text-textColor-white">ChainX Blockchain
            Explorer
          </div>
          <Search className="Home_pageSearch"/>
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
