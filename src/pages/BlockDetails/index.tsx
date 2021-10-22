import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import Event from '../Chain/event';
import Extrinsic from '../Chain/extrinsic';
import { get } from '../../hooks/api';
import List from '../../components/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import { LinkXWithPop, LinkXWithPopAndIcon } from '../../components/LinkX';
import successIcon from '../../assets/icon_success.svg';


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
  const isBlockNumber = (typeof (block) === 'number');
  const [nowBlock, setNowBlock] = useState(block);
  const getData = async () => {
    const res: any = await get(`/blocks/${nowBlock}`, ``);
    setBlockDetails(res);
    setLoading(false);
  };
  useEffect(() => {
    if (window.history.state && window.history.state?.state) {
      setBlockDetails(window.history.state.state);
      console.log('window', window.history.state.state);
      setLoading(false);
    } else {
      getData();
    }
  }, []);

  const list = [
    {
      title: t('Block Height'),
      content: (
        <div
          className="text-gray-arrow font-semibold">{(blockDetails?.header?.number) ? blockDetails?.header?.number : '-'}</div>
      ),
    },
    {
      title: t('Time'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {(blockDetails?.blockTime) ? moment(Number(blockDetails?.blockTime)).format('YYYY-MM-DD HH:mm:ss') + '(+UTC)' : '-'}
        </div>)
    },
    {
      title: t('Status'),
      content: (
        <div>
          {blockDetails?.isSuccess === true ?
            <div className="flex flex-row items-center"><img src={successIcon} alt=""/><span
              className="inline-block">{t('Success')}</span></div> : '-'}
        </div>
      )
    },
    {
      title: t('Block Hash'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {blockDetails?.hash}
        </div>
      ),
    },
    {
      title: t('Parent Hash'),
      content: (
        <LinkXWithPop linkUrl={`/blockDetails/${blockDetails?.header?.parentHash}`} content={blockDetails?.header?.parentHash}/>
      ),
    },
    {
      title: t('Extrinsics Root'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {blockDetails?.header?.stateRoot}
        </div>
      ),
    },
    {
      title: t('Block Time'),
      content:
        <div className="text-gray-arrow font-semibold">
          {/*{moment(Number(blockDetails?.blockTime)).format('YYYY-MM-DD HH:mm:ss')}*/}
          -
        </div>,
    }, {
      title: t('Validator'),
      content:
        <div className="text-gray-arrow font-semibold">
          {(blockDetails?.address) ?
            <LinkXWithPopAndIcon content={blockDetails?.address} linkUrl={`/addressDetails/${blockDetails?.address}`}
                                 img={successIcon}/> : '-'}
        </div>
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
        <DetailTitle routeTitle={t('Block Height')} content={nowBlock} isBlock={isBlockNumber} setNowBlock={setNowBlock}
                     routePath={routerPath}/>
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