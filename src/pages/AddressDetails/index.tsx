import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/useApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { TabInfo } from '../../components/SwitchTab';
import Extrinsic from '../Chain/extrinsic';
import Event from '../Chain/event';
import DetailTitle from '../../components/DetailTitle';
import {Link} from 'react-router-dom'

export default function AddressDetails() {
  const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [addressDetails, setAddressDetails] = useState<any>();
  const address = window.location.pathname.slice(16, window.location.pathname.length);
  const [nowAddress,setNowAddress] = useState(address)
  const getData = async () => {
    const res: any = await get(`/addresss/${nowAddress}`, ``);
    debugger

    setAddressDetails(res);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const list = [
    {
      title: t('address height'),
      content: (
        <div className="text-black-dark">{addressDetails?.header?.number}</div>
      ),
    },
    {
      title: t('address Time'),
      content: (
        <div className="text-black-dark">
          {addressDetails?.addressTime}
        </div>)
    },
    {
      title: t('Status'),
      content: (
        <div className="text-blue-light cursor-pointer"
             onClick={() => <div>{addressDetails?.header?.number}</div>}/>
      )
    },
    {
      title: t('address Hash'),
      content: (
        <div className="text-black-dark">{addressDetails?.hash}</div>
      ),
    },
    {
      title: t('Extrinsics Root'),
      content: (
        <div className="text-black-dark">
          {addressDetails?.extrinsicsRoot}
        </div>
      ),
    },
    {
      title: t('address Time'),
      content:
        <div className="text-black-dark">
          {addressDetails?.addressTime}
        </div>,
    }, {
      title: t('Validator'),
      content: <div className="text-black-dark">
      </div>,
    }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Extrinsic'),
      content: <></>,
    },
    {
      title: t('Event'),
      content: <></>,
    }
  ];
  const routerPath =()=>{
    return (<div className='flex flex-row cursor-pointer text-gray-white'>
      <Link to={'/'}>首页/</Link>
      <Link to={'/validators'}>验证节点/ </Link>
      <Link to={`./${address}`}>节点详情</Link>
    </div>)
  }
  return (
    <>
      <Header/>
      <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
        <DetailTitle routeTitle={t('Validator')} content={Number(nowAddress)} isBlock={false} routePath={routerPath}/>
      </div>
      <List list={list} loading={loading}/>
      <div className="px-24 pb-16 bg-gray-bgWhite screen:px-4">
        <Wrapper>
          <TableMenuBox tabList={tabList}/>
        </Wrapper>
      </div>
      <Footer/>
    </>);
}