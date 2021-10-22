import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { get } from '../../hooks/api';
import styled from 'styled-components';
import Event from '../Chain/event';
import List from '../../components/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import Jsonformat from '../../components/Jsonformat';
import { LinkX, LinkXWithPop } from '../../components/LinkX';
import Operation from '../../components/Operation';
import CopyText from '../../components/copyText';
import successIcon from '../../assets/icon_success.svg';

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
    if (window.history.state && window.history.state?.state) {
      setExtrinsicsDetails(window.history.state.state);
      console.log('window', window.history.state.state);
      setLoading(false);
    } else {
      getData();
    }
  }, []);
  const list = [
    {
      title: t('Block'),
      content: (
        <LinkX linkUrl={`/blockDetails/${extrinsicsDetails?.indexer?.blockHeight}`}
               content={
                 <div className="flex flex-row items-center">
                   <img src={successIcon} alt=""/>
                   <span className="inline-block mr-1">{extrinsicsDetails?.indexer?.blockHeight}</span>
                 </div>
               }/>
      ),
    },
    {
      title: t('Block Time'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {moment(Number(extrinsicsDetails?.indexer?.blockTime)).format('YYYY-MM-DD HH:mm:ss')}
        </div>)

    },
    {
      title: t('Extrinsic Hash'),
      content: (
        <LinkXWithPop linkUrl={'/'} content={extrinsicsDetails?.hash}/>
      )
    },
    {
      title: t('Operation'),
      content: (
        <Operation content={extrinsicsDetails?.section + '-' + extrinsicsDetails?.name} more={false}/>
      ),
    },
    {
      title: t('Sender'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {extrinsicsDetails?.extrinsicsRoot}
        </div>
      ),
    },
    {
      title: t('Fee'),
      content:
        <div className="text-gray-arrow font-semibold">
          {extrinsicsDetails?.blockTime}
        </div>,
    }, {
      title: t('Node'),
      content: <div className="text-gray-arrow font-semibold">
      </div>,
    }, {
      title: t('Result'),
      content: <div className="text-gray-arrow font-semibold">
        {extrinsicsDetails?.isSuccess}
      </div>,
    }, {
      title: t('Arguments'),
      content:
        <CopyText children={<Jsonformat json={extrinsicsDetails?.args}/>} text={JSON.stringify(extrinsicsDetails?.args)}/>
    }, {
      title: t('Signature'),
      content: <div className="text-gray-arrow font-semibold">
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
        <DetailTitle routeTitle={t('Extrinsics')}
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