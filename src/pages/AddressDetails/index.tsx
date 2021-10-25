import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Event from '../Chain/event';
import Extrinsic from '../Chain/extrinsic';
import { get } from '../../hooks/useApi';
import List from '../../components/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import NoData from '../../components/NoData';
import decodeAddress from '../../helper/encodeAddress';


export default function AddressDetails() {
  const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
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

  const list = [
    {
      title: t('Address'),
      content: (
        <div
          className="text-gray-arrow font-semibold">{address}</div>
      ),
    },
    {
      title: t('Publick'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {pubKey}
        </div>)
    },
    {
      title: t('Status'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {blockDetails?.nonce}
        </div>
      )
    }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Extrinsic'),
      content: <Extrinsic/>,
    },
    {
      title: t('Event'),
      content: <Event/>,
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
      <Header/>
      {noData ?
        <NoData/> :
        <>
          <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
            <DetailTitle routeTitle={t('Block Height')} content={nowBlock}
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