import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';
import { CardTitle } from '../../components/CardBox/style';
import mining from '../../assets/icon_mining.svg';
import { CardDiv, Container, RightLine, WrapperBridge } from './style';
import { reName } from '../../helper/hooks';
import BitcoinBlock from './block';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Host from './host';
import Claim from './claim';
import { get } from '../../hooks/useApi';
import MyEchart from './myEcharts';
import { ShorterLink } from '../../components/LinkX';


export default function CrossBlock() {
  const {t} = useTranslation();

  const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;

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

  const tabList: TabInfo[] = [
    {
      title: t('Block'),
      content: <BitcoinBlock/>,
    },
    {
      title: t('Deposit Deals'),
      content: <Deposit/>,
    },
    {
      title: t('Withdraw'),
      content: <Withdraw/>,
    },
    {
      title: t('Host'),
      content: <Host/>,
    },
    {
      title: t('Claim'),
      content: <Claim/>,
    }
  ];
  const [mingApiData, setMingApiData] = useState<any>([{
    name: t('Total Balance'),
    data: '-'
  }, {
    name: t('Total Weight'),
    data: '-'
  }, {
    name: t('Reward Pot Last Update Height(PCX)'),
    data: '-'
  }, {
    name: t('Mining Power(PCX)'),
    data: '-'
  }, {
    name: t('Equivalent Nominations(PCX)'),
    data: '-'
  }, {
    name: t('Reward Pot Balance(PCX)'),
    data: '-'
  }]);
  const [rewardPot,setRewardPot] = useState('')
  const getData = async () => {
    const {items}: any = await get(`/crossblocks/deposit_mine?page=0&page_size=20`, ``);
    setMingApiData([{
      name: t('Total Balance'),
      data: (items[0]?.balance?.Usable) / 1000000
    }, {
      name: t('Total Weight'),
      data: items[0]?.lastTotalMiningWeight / 1000000
    }, {
      name: t('Reward Pot Last Update Height(PCX)'),
      data: items[0]?.lastTotalMiningWeightUpdate
    }, {
      name: t('Mining Power(PCX)'),
      data: items[0]?.miningPower
    }, {
      name: t('Equivalent Nominations(PCX)'),
      data: items[0]?.equivalent_nominations
    }, {
      name: t('Reward Pot Balance(PCX)'),
      data: items[0]?.rewardPotBalance
    }]);
    setRewardPot(items[0]?.rewardPot)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header/>
      <Wrapper className="px-24 py-4 bg-gray-bgWhite screen:px-4">
        <BridgeWrapper>
          <Wrapper>
            <CardTitle>
              <div className="flex flex-row" style={{padding: '1rem 0rem 1rem 2rem'}}>
                <img src={mining} alt=""/>
                <span className="ml-4" style={{fontSize: '14px'}}>{t('Deposit Mining')}</span>
              </div>
            </CardTitle>
            <div className="flex flex-row w-overSpread justify-between px-8 py-4">
              <div className="flex flex-col">
                <span style={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)'}}>{t('Asset Type')}</span>
                <span style={{fontSize: '18px', fontWeight: 'bold'}}>Interchain BTC(X-BTC)</span>
              </div>
              <div className="flex flex-col">
                <span style={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)'}}>{t('Reward Pot Address(PCX)')}</span>
                <span style={{fontSize: '18px', fontWeight: 'bold'}}><ShorterLink linkUrl={`/addressDetails/${rewardPot}`} content={rewardPot}/></span>
              </div>
            </div>
            <WrapperBridge>
              {mingApiData?.map((item: any, index: any) => {
                return (
                  <CardDiv key={index}>
                    <Container className={'container-div'}>
                      <div className="flex flex-col justify-start my-auto ">
                        <span className="name"
                              style={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)'}}>{item.name}</span>
                        <span className="date" style={{fontSize: '18px', fontWeight: 'bold'}}>{reName(item.data)}</span>
                      </div>
                    </Container>
                    {/*<RightLine className={'line-div'}/>*/}
                  </CardDiv>);
              })}
            </WrapperBridge>
          </Wrapper>
          <Wrapper>
            <CardTitle>
              <div className="flex flex-row" style={{padding: '1rem 0rem 1rem 2rem'}}>
                <img src={mining} alt=""/>
                <span className="ml-4" style={{fontSize: '14px'}}>{t('Mining Distribution')}</span>
              </div>
            </CardTitle>
            <MyEchart/>
          </Wrapper>
        </BridgeWrapper>
        <Wrapper>
          <CardTitle>
            <div className="flex flex-row" style={{padding: '1rem 0rem 1rem 2rem'}}>
              <img src={mining} alt=""/>
              <span className="ml-4" style={{fontSize: '14px'}}>{t('Bitcoin Bridge')}</span>
            </div>
          </CardTitle>
          <TableMenuBox tabList={tabList} key={''}/>
        </Wrapper>
      </Wrapper>
      <Footer/>
    </>
  );
}
