import React, { useEffect, useState } from 'react';
import Search from '../../../components/Search';
import bgImg from '../../../assets/Lightning@2x.webp';
import icon from '../../../assets/icon_PCX _head.webp'
import Model_echarts from './charts';
import { EchartBox, TableWrapper } from './style';
import { outSideAPI } from '../../../hooks/useApi';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

function HomeSearch() {
  const {t} = useTranslation();
  const [chainxResult, setChainxResult] = useState({});
  const [currentPrice, setCurrentPrice] = useState('-');
  //取每12小时的数据
  const sliceChainxVolumesData = (value: Array<string>) => {
    let result = {
      resultTime: [] as any,
      resultValue: [] as any
    };
    let targeIndex = [0, 11, 23, 35, 47, 59, 71];
    value.map((item, index) => {
      if (targeIndex.includes(index)) {
        result.resultTime.push(moment(Number(item[0])).format(`MM ${t('Months')}DD`));
        result.resultValue.push(item[1]);
      }
    });
    return result;
  };
  const getChainXData = async () => {
    await outSideAPI.get('')
      .then((response) => {
        let totalVolumes = response?.data?.total_volumes;
        setCurrentPrice(response?.data?.prices[response?.data?.prices?.length-1][1].toFixed(3))
        let result = sliceChainxVolumesData(totalVolumes);
        setChainxResult(result);
      });
  };

  useEffect(() => {
    getChainXData();
  }, []);
  return (
    <TableWrapper>
      <div className="w-overSpread h-overSpread absolute items-center mx-auto my-auto">
        <img src={bgImg} alt="" className="bgImage"/>
      </div>
      <div className="grid grid-rows-2 relative" style={{zIndex: 2}}>
        <div className="h-13 text-4xl PingFangSC-Medium, PingFang SC text-textColor-white mb-5">ChainX Blockchain
          Explorer
        </div>
        <Search className="Home_pageSearch "/>
      </div>
      {/*<EchartBox>*/}
      {/*  <div className="flex flex-col justify-start px-6 py-1">*/}
      {/*    <div className="flex flex-row">*/}
      {/*      <img src={icon} alt="" className="h-6 pr-2"/>*/}
      {/*      <span className="text-base text-gray-white">ChainX</span>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-row justify-between pb-2">*/}
      {/*      <span className="text-3xl text-gray-white pr-6">$ {currentPrice}</span>*/}
      {/*      <div className="flex flex-row justify-start">*/}
      {/*        /!*<span className="miniGrayFront">11%</span>*!/*/}
      {/*        <div id="triangle" className="leading-12"/>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="Line"/>*/}
      {/*    <div className="flex flex-row justify-between py-2">*/}
      {/*      <span className="miniGrayFront">发行总量</span>*/}
      {/*      <span className="miniGrayFront">$ 6,731,598,423</span>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-row justify-between pt-2">*/}
      {/*      <span className="miniGrayFront">24小时交易量</span>*/}
      {/*      <span className="miniGrayFront">$ 12,423</span>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="w-overSpread h-overSpread">*/}
      {/*    <Model_echarts data={chainxResult}/>*/}
      {/*  </div>*/}
      {/*</EchartBox>*/}
    </TableWrapper>
  );
}

export default React.memo(HomeSearch);
