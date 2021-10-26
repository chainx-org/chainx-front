import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Event from '../Chain/event';
import { get } from '../../hooks/useApi';
import List from '../../components/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import NoData from '../../components/NoData';
import decodeAddress from '../../helper/decodeAddress';
import publicKeyIcon from '../../assets/icon_key.svg';
import { Popover } from 'antd';
import Assets from './assets';
import Transaction from './transaction';
import Transfers from './transfers';

const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
export default function AddressDetails() {

  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [blockDetails, setBlockDetails] = useState<any>();
  const address = window.location.pathname.slice(16, window.location.pathname.length);
  const pubKey = decodeAddress(address) || '';
  const [nowBlock, setNowBlock] = useState(address);
  const getData = async () => {
    const res: any = await get(`/accounts/${address}/assets`, ``);
    if (res) {
      setBlockDetails(res);
      setLoading(false);
    } else {
      setNoData(true);
    }

  };
  useEffect(() => {
    if (window.history.state && window.history.state?.state) {
      setBlockDetails(window.history.state.state);
      console.log('window', window.history.state.state);
      setLoading(false);
    } else {
      getData().then(
      ).catch(() => {
        console.log('find error');
        setNoData(true);
      });
    }
  }, []);
  const PublicContainer = styled.div`
    .publicKey {
      display: none;
    }
  `;
  const list = [
    {
      title: t('PublicKey'),
      content: (
        <Popover content={pubKey}>
          <img src={publicKeyIcon} alt=""/>
        </Popover>)
    },
    {
      title: t('Address'),
      content: (
        <div
          className="text-gray-arrow font-semibold">{address}</div>
      ),
    },
    {
      title: t('Nonce'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {blockDetails?.nonce}
        </div>
      )
    }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Assets'),
      content: <Assets account={address}/>,
    },
    {
      title: t('Transactions'),
      content: <Transaction account={address}/>,
    },
    {
      title: t('Transfers'),
      content: <Transfers account={address}/>
    }
  ];
  const routerPath = () => {
    return (<div className="flex flex-row cursor-pointer text-gray-white">
      <Link to={'/'}>首页/</Link>
      <Link to={'/chain'}>区块链/ </Link>
      <Link to={`./blockDetail/${address}`}>区块详情</Link>
    </div>);
  };
  return (
    <>
      <Header showSearch={true}/>
      {noData ?
        <NoData/> :
        <>
          <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
            <DetailTitle routeTitle={t('Address')} content={nowBlock}
                         setNowBlock={setNowBlock}
                         routePath={routerPath}/>
          </div>
          <List list={list} loading={loading}/>
          <div className="px-24 pb-16 bg-gray-bgWhite screen:px-4">
            <Wrapper>
              <TableMenuBox tabList={tabList}/>
            </Wrapper>
          </div>
        </>}
      <Footer/>
    </>);
}