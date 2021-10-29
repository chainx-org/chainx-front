import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { get } from '../../hooks/useApi';
import Event from '../Chain/event';
import List from '../../components/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonApi from '../../components/Jsonformat';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import { LinkX, Normal } from '../../components/LinkX';
import Operation from '../../components/Operation';
import CopyText from '../../components/copyText';
import successIcon from '../../assets/icon_success.svg';
import NoData from '../../components/NoData';
import { ListBgColor, WrapperDetails, WrapperList } from '../../css/Wrapper';

export default function ExtrinsicDetails() {

  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [extrinsicDetails, setExtrinsicDetails] = useState<any>();
  const extrinsic = window.location.pathname.slice(18, window.location.pathname.length);
  const tag = 'extrinsicsDetails'
  const [currentTab, setCurrentTab] = useState('event');
  const [nowExtrinsic, setNowExtrinsics] = useState(extrinsic);
  const getData = async () => {
    const res: any = await get(`/extrinsics/${nowExtrinsic}`, ``);
    if (res) {
      setExtrinsicDetails(res);
      setLoading(false);
    } else {
      setNoData(true);
    }
  };
  useEffect(() => {
    // if (window.history.state && window.history.state?.state) {
    //   console.log(window.history.state?.state)
    //   setExtrinsicDetails(window.history.state.state);
    //   console.log('window', window.history.state.state);
    //   setLoading(false);
    // } else {
    getData();
    // }
  }, []);
  useEffect(() => {

    const activeTab = sessionStorage.getItem(tag)
    if (activeTab) {
      setCurrentTab(activeTab)
    } else {
      setCurrentTab('event')
    }

  }, [])
  const list = [
    {
      title: t('Block'),
      content: (
        <LinkX linkUrl={`/blockDetails/${extrinsicDetails?.indexer?.blockHeight}`}
               content={
                 <div className="flex flex-row items-center">
                   <img src={successIcon} alt=""/>
                   <span className="inline-block mr-1">{extrinsicDetails?.indexer?.blockHeight}</span>
                 </div>
               }/>
        // <></>
      ),
    },
    {
      title: t('Block Time'),
      content: (
        <Normal state={moment(Number(extrinsicDetails?.indexer?.blockTime)).format('YYYY-MM-DD HH:mm:ss')}/>
      )
    },
    {
      title: t('Extrinsic Hash'),
      content: (
        <Normal state={(extrinsicDetails?.hash) ? (extrinsicDetails?.hash) : '-'}/>
      )
    },
    {
      title: t('Operation'),
      align: 'right',
      width: '15rem',
      content: (
        <Operation content={extrinsicDetails?.section + '-' + extrinsicDetails?.name} more={false} left={true}/>
      ),
    },
    {
      title: t('Sender'),
      content: (
        <Normal state={(extrinsicDetails?.singer) ? (extrinsicDetails?.singer) : '-'}/>),
    },
    // {
    //   title: t('Fee'),
    //   content:
    //     <div className="font-medium text-gray-arrow ">
    //       {extrinsicDetails?.blockTime}
    //     </div>,
    // }, {
    //   title: t('Node'),
    //   content: <div className="font-medium text-gray-arrow ">
    //   </div>,
    // }, {
    //   title: t('Result'),
    //   content: <div className="font-medium text-gray-arrow ">
    //     {extrinsicDetails?.isSuccess}
    //   </div>,
    // },
    {
      title: t('Arguments'),
      content:
        <CopyText children={
          <JsonApi json={extrinsicDetails?.args}/>}
                  text={extrinsicDetails?.args}/>
    }
    // , {
    //   title: t('Signature'),
    //   content: <div className="font-medium text-gray-arrow ">
    //     {extrinsicDetails?.data}
    //   </div>,
    // }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Event'),
      content: <Event extrinsic={extrinsic}/>,
      name: 'event'
    }
  ];
  const routerPath = () => {
    return (<div className="flex flex-row cursor-pointer text-gray-white text-base mx-0 my-auto">
      <Link to={'/'} style={{color: 'rgba(255, 255, 255, 0.65)'}}>{t('Home')}<span
        className="inline-block mx-2">/</span></Link>
      <Link to={'/chain/extrinsic'} style={{color: 'rgba(255, 255, 255, 0.65)'}}>{t('Extrinsic')}<span
        className="inline-block mx-2">/</span></Link>
      <Link to={`./${extrinsic}`}>{t('ExtrinsicDetails')}</Link>
    </div>);
  };
  return (
    <>
      <Header showSearch={true}/>
      <ListBgColor style={{height:'195px'}}/>
      {noData ?
        <NoData/> :
        <>
          <WrapperList>
            <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
              <DetailTitle routeTitle={t('Extrinsics')}
                           content={extrinsicDetails?.indexer?.blockHeight + '-' + extrinsicDetails?.indexer?.index}
                           isBlock={false} setNowBlock={extrinsic} routePath={routerPath}/>
            </div>
            <List list={list} loading={loading}/>
            <div className="px-24 pb-4 bg-gray-bgWhite screen:px-4">
              <WrapperDetails>
                <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag}/>
              </WrapperDetails>
            </div>
          </WrapperList>
        </>
      }
      <Footer/>
    </>
  )
}
