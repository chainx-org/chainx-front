import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';
import { CardTitle } from '../../components/CardBox/style';
import mining from '../../assets/icon_mining.svg';
import { BottomLine, CardDiv, RightLine, WrapperBridge } from './style';
import { accuracy, reName } from '../../helper/hooks';
import BitcoinBlock from './block';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Host from './host';
import Claim from './claim';
import { get } from '../../hooks/useApi';
import MyEchart from './myEcharts';
import { ShorterLink } from '../../components/LinkX';
import distributionIcon from '../../assets/icon_Mining_rate.svg';
import bridgeIcon from '../../assets/icon_bridge.svg';
import { WrapperBgWhite, WrapperWith } from '../../css/Wrapper';

const BridgeWrapper = styled.div`
  display: grid;
  grid-template-columns: 59% 39%;
  grid-gap: 1rem;
  place-content: space-around space-evenly;
  position: relative;
  margin-bottom: 2rem;
  @media screen and (max-width: 900px) {
    grid-template-columns: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    > div {
      > div {
        font-size: 1.5rem !important;
      }
    }
  }
`;
export default function CrossBlock() {
  const {t} = useTranslation();

  const tag = 'crossBlock'
  const [currentTab, setCurrentTab] = useState('block');
  const tabList: TabInfo[] = [
    {
      title: t('Block'),
      content: <BitcoinBlock/>,
      name:'block'
    },
    {
      title: t('Deposit Deals'),
      content: <Deposit/>,
      name:'deals'

    },
    {
      title: t('Withdraw'),
      content: <Withdraw/>,
      name:'withdraw'

    },
    {
      title: t('Host'),
      content: <Host/>,
      name: 'host'

    },
    {
      title: t('Claim'),
      content: <Claim/>,
      name: 'claim'
    }
  ];
  const [mingApiData, setMingApiData] = useState<any>([[{
    name: 'Total Balance',
    data: '-'
  }, {
    name: 'Total Weight',
    data: '-'
  }], [{
    name: 'Reward Pot Last Update Height(PCX)',
    data: '-'
  }, {
    name: 'Mining Power(PCX)',
    data: '-'
  }], [{
    name: 'Equivalent Nominations(PCX)',
    data: '-'
  }, {
    name: 'Reward Pot Balance(PCX)',
    data: '-'
  }]]);
  const [rewardPot, setRewardPot] = useState('');
  const getData = async () => {
    const {items}: any = await get(`/crossblocks/deposit_mine?page=0&page_size=20`, ``);
    setMingApiData([
      [{
        name: 'Total Balance',
        data: accuracy(items[0]?.balance?.Usable)
      }, {
        name: 'Total Weight',
        data: accuracy(items[0]?.lastTotalMiningWeight)
      }], [{
        name: 'Reward Pot Last Update Height(PCX)',
        data: items[0]?.lastTotalMiningWeightUpdate
      }, {
        name: 'Mining Power(PCX)',
        data: items[0]?.miningPower
      }], [{
        name: 'Equivalent Nominations(PCX)',
        data: accuracy(items[0]?.equivalent_nominations)
      }, {
        name: 'Reward Pot Balance(PCX)',
        data: accuracy(items[0]?.rewardPotBalance)
      }]]);
    setRewardPot(items[0]?.rewardPot);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(()=>{
    
    const activeTab = sessionStorage.getItem(tag)
    if(activeTab){
      setCurrentTab(activeTab)
    }else{
      setCurrentTab('block')
    }

  },[])
  return (
    <>
      <Header showSearch={true}/>
      <WrapperBgWhite className="px-24 py-4 screen:px-4">
        <BridgeWrapper>
          <WrapperWith>
            <CardTitle>
              <div className="flex flex-row">
                <img src={mining} alt=""/>
                <span className="ml-4 text-base text-black-titleColor font-medium">{t('Deposit Mining')}</span>
              </div>
            </CardTitle>
            <div className="flex flex-row w-overSpread justify-between px-8 py-4">
              <div className="flex flex-col">
                <span style={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)'}}>{t('Asset Type')}</span>
                <span style={{fontSize: '18px', fontWeight: 'bold'}}>Interchain BTC(X-BTC)</span>
              </div>
              <div className="flex flex-col">
                <span style={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)'}}>{t('Reward Pot Address(PCX)')}</span>
                <span style={{fontSize: '18px', fontWeight: 'bold'}}><ShorterLink
                  linkUrl={`/addressDetails/${rewardPot}`} content={rewardPot}/></span>
              </div>
            </div>
            <WrapperBridge>
              {mingApiData?.map((item: any, index: any) => {
                return (
                  <>
                    <div className="itemThree">
                      <div className="flex flex-col">
                        <CardDiv>
                          <div className="flex flex-col justify-start my-auto ">
                        <span className="name"
                              style={{
                                fontSize: '14px',
                                color: 'rgba(0, 0, 0, 0.45)'
                              }}>{t(`${item[0]?.name}`)}</span>
                            <span className="date"
                                  style={{fontSize: '18px', fontWeight: 'bold'}}>{reName(item[0]?.data)}</span>
                          </div>
                        </CardDiv>
                        <BottomLine/>
                        <CardDiv>
                          <div className="flex flex-col justify-start my-auto ">
                        <span className="name"
                              style={{
                                fontSize: '14px',
                                color: 'rgba(0, 0, 0, 0.45)'
                              }}>{t(`${item[1]?.name}`)}</span>
                            <span className="date"
                                  style={{fontSize: '18px', fontWeight: 'bold'}}>{reName(item[1]?.data)}</span>
                          </div>
                        </CardDiv>
                      </div>
                      <RightLine/>
                    </div>
                    <div className="itemTwo">
                      <div className="flex flex-row">
                        <CardDiv>
                          <div className="flex flex-col justify-start my-auto ">
                        <span className="name"
                              style={{
                                fontSize: '14px',
                                color: 'rgba(0, 0, 0, 0.45)'
                              }}>{t(`${item[0]?.name}`)}</span>
                            <span className="date"
                                  style={{fontSize: '18px', fontWeight: 'bold'}}>{reName(item[0]?.data)}</span>
                          </div>
                        </CardDiv>
                        <RightLine/>
                        <CardDiv>
                          <div className="flex flex-col justify-start my-auto ">
                        <span className="name"
                              style={{
                                fontSize: '14px',
                                color: 'rgba(0, 0, 0, 0.45)'
                              }}>{t(`${item[1]?.name}`)}</span>
                            <span className="date"
                                  style={{fontSize: '18px', fontWeight: 'bold'}}>{reName(item[1]?.data)}</span>
                          </div>
                        </CardDiv>
                      </div>
                    </div>
                  </>

                );
              })}
            </WrapperBridge>
          </WrapperWith>
          <WrapperWith>
            <CardTitle>
              <div className="flex flex-row">
                <img src={distributionIcon} alt=""/>
                <span className="ml-4 text-base text-black-titleColor font-medium">{t('Mining Distribution')}</span>
              </div>
            </CardTitle>
            {/*<div className='w-20 h-13'>*/}
            <MyEchart/>
            {/*</div>*/}
          </WrapperWith>
        </BridgeWrapper>
        <WrapperWith>
          <CardTitle>
            <div className="flex flex-row">
              <img src={bridgeIcon} alt=""/>
              <span className="ml-4 text-base text-black-titleColor font-medium">{t('Bitcoin Bridge')}</span>
            </div>
          </CardTitle>
          <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag}/>
        </WrapperWith>
      </WrapperBgWhite>
      <Footer/>
    </>
  );
}
