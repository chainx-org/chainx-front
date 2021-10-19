import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { TabInfo } from '../../components/SwitchTab';
import Extrinsic from '../Chain/extrinsic';
import Event from '../Chain/event';
import DetailTitle from '../../components/DetailTitle';
import {Link} from 'react-router-dom'

export default function BlockDetails() {
  const Wapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [blockDetails, setBlockDetails] = useState<any>();
  const block = window.location.pathname.slice(14, window.location.pathname.length);
  const [nowBlock,setNowBlock] = useState(block)
  const getData = async () => {
    const res: any = await get(`/blocks/${nowBlock}`, ``);
    setBlockDetails(res);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const list = [
    {
      title: t('Block height'),
      content: (
        <div className="text-black-dark">{blockDetails?.header?.number}</div>
      ),
    },
    {
      title: t('Block Time'),
      content: (
        <div className="text-black-dark">
          {blockDetails?.blockTime}
        </div>)
    },
    {
      title: t('Status'),
      content: (
        <div className="text-blue-light cursor-pointer"
             onClick={() => <div>{blockDetails?.header?.number}</div>}/>
      )
    },
    {
      title: t('Block Hash'),
      content: (
        <div className="text-black-dark">{blockDetails?.hash}</div>
      ),
    },
    {
      title: t('Extrinsics Root'),
      content: (
        <div className="text-black-dark">
          {blockDetails?.extrinsicsRoot}
        </div>
      ),
    },
    {
      title: t('Block Time'),
      content:
        <div className="text-black-dark">
          {blockDetails?.blockTime}
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
      content: <Extrinsic block={block}/>,
    },
    {
      title: t('Event'),
      content: <Event block={block}/>,
    }
  ];
  const routerPath =()=>{
    return (<div className='flex flex-row cursor-pointer text-gray-white'>
      <Link to={'/'}>首页/</Link>
      <Link to={'/chain'}>区块链/ </Link>
      <Link to={`./blockDetail/${block}`}>区块详情</Link>
    </div>)
  }
  return (
    <>
      <Header/>
      <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
        <DetailTitle routeTitle={'Block Height'} content={Number(nowBlock)} isBlock={true} setNowBlock={setNowBlock} routePath={routerPath}/>
      </div>
      <List list={list} loading={loading}/>
      <div className="px-24 pb-16 bg-gray-bgWhite screen:px-4">
        <Wapper>
          <TableMenuBox tabList={tabList}/>
        </Wapper>
      </div>
      <Footer/>
    </>);
}