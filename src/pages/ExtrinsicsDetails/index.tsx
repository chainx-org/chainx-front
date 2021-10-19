import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { TabInfo } from '../../components/SwitchTab';
import Event from '../Chain/event';
import DetailTitle from '../../components/DetailTitle';
import { Link } from 'react-router-dom';
import Jsonformat from '../../components/Jsonformat';

export default function ExtrinsicsDetails() {
  const Wapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [extrinsicsDetails, setExtrinsicsDetails] = useState<any>();
  const extrinsics = window.location.pathname.slice(19, window.location.pathname.length);
  const [nowExtrinsics, setNowExtrinsics] = useState(extrinsics);
  const getData = async () => {
    const res: any = await get(`/extrinsics/${nowExtrinsics}`, ``);
    setExtrinsicsDetails(res);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const list = [
    {
      title: t('Block'),
      content: (
        <div className="text-black-dark">{extrinsicsDetails?.indexer?.blockHeight}</div>
      ),
    },
    {
      title: t('Block Time'),
      content: (
        <div className="text-black-dark">
          {extrinsicsDetails?.indexer?.blockTime}
        </div>)
    },
    {
      title: t('Extrinsic Hash'),
      content: (
        <div className="text-blue-light cursor-pointer">
          {extrinsicsDetails?.hash}
        </div>
      )
    },
    {
      title: t('Operation'),
      content: (
        <div className="text-black-dark">{extrinsicsDetails?.section + '-' + extrinsicsDetails?.name}</div>
      ),
    },
    {
      title: t('Sender'),
      content: (
        <div className="text-black-dark">
          {extrinsicsDetails?.extrinsicsRoot}
        </div>
      ),
    },
    {
      title: t('Fee'),
      content:
        <div className="text-black-dark">
          {extrinsicsDetails?.blockTime}
        </div>,
    }, {
      title: t('Node'),
      content: <div className="text-black-dark">
      </div>,
    }, {
      title: t('Result'),
      content: <div className="text-black-dark">
        {extrinsicsDetails?.isSuccess}
      </div>,
    }, {
      title: t('参数'),
      content:
        <Jsonformat json={extrinsicsDetails?.args}/>
    }, {
      title: t('签名'),
      content: <div className="text-black-dark">
        {extrinsicsDetails?.data}
      </div>,
    }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Event'),
      content: <Event extrinsics={extrinsics}/>,
    }
  ];
  const routerPath = () => {
    return (<div className="flex flex-row cursor-pointer text-gray-white">
      <Link to={'/'}>首页/</Link>
      <Link to={'/chain/extrinsic'}>交易列表/ </Link>
      <Link to={`./${extrinsics}`}>交易详情</Link>
    </div>);
  };
  return (
    <>
      <Header/>
      <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
        <DetailTitle routeTitle={'Block Height'}
                     content={extrinsicsDetails?.indexer?.blockHeight + '-' + extrinsicsDetails?.indexer?.index}
                     isBlock={false} setNowBlock={extrinsics} routePath={routerPath}/>
      </div>
      <List list={list} loading={loading}/>
      <div className="px-24 pb-16 bg-gray-bgWhite screen:px-4">
        <Wapper>
          <TableMenuBox tabList={tabList} key={''}/>
        </Wapper>
      </div>
      <Footer/>
    </>);
}