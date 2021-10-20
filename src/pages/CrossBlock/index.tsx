import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';
import { CardTitle, SpliteLine } from '../../components/CardBox/css';
import mining from '../../assets/icon_mining.svg';
import { CardDiv, Container, RightLine, WrapperBridge } from './style';
import { reName } from '../../hooks/hooks';
import BitcoinBlock from './block';
import Deposit from './deposit'
import Withdraw from './withdraw';
import Host from './host';
import Claim from './claim';


export default function CrossBlock() {
  const {t} = useTranslation();

  const Wapper = styled.div`
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
      content:<BitcoinBlock/>,
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

  const [metaData, setMetaData] = useState([{
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
  return (
    <>
      <Header/>
      <Wapper className="px-24 py-4 bg-gray-bgWhite ">
          <BridgeWrapper>
            <Wapper>
              <CardTitle>
                <img src={mining} alt=""/>
                <span>{'跨链挖矿'}</span>
              </CardTitle>
              <div className="flex flex-row w-overSpread justify-between px-8 py-4">
                <div className="flex flex-col">
                  <span>资产类型</span>
                  <span>111111</span>
                </div>
                <div className="flex flex-col">
                  <span>奖池地址(PCX)</span>
                  <span>5RgUvw4....MSNqb</span>
                </div>
              </div>
              <WrapperBridge>
                {metaData.map((item: any) => {
                  return (<CardDiv>
                    <Container className={'container-div'}>
                      <div className="flex flex-col justify-start my-auto ">
                        <span className="name">{item.name}</span>
                        <span className="date">{reName(item.data)}</span>
                      </div>
                    </Container>
                    <RightLine className={'line-div'}/>
                  </CardDiv>);
                })}
              </WrapperBridge>
            </Wapper>
            <Wapper>
              <CardTitle>
                <img src={mining} alt=""/>
                <span>{'挖矿收益比率'}</span>
              </CardTitle>
            </Wapper>
          </BridgeWrapper>
        <Wapper>
          <CardTitle>
            <img src={mining} alt=""/>
            <span>{'Bitcoin 转接桥'}</span>
          </CardTitle>
          <TableMenuBox tabList={tabList} key={''}/>
        </Wapper>
      </Wapper>
      <Footer/>
    </>
  );
}
