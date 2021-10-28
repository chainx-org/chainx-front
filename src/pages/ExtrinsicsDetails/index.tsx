import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { get } from '../../hooks/useApi';
import styled from 'styled-components';
import Event from '../Chain/event';
import List from '../../components/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonApi from '../../components/Jsonformat'
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import { LinkX, LinkXWithPop } from '../../components/LinkX';
import Operation from '../../components/Operation';
import CopyText from '../../components/copyText';
import successIcon from '../../assets/icon_success.svg';
import NoData from '../../components/NoData';

const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
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
  useEffect(()=>{
    
    const activeTab = sessionStorage.getItem(tag)
    if(activeTab){
      setCurrentTab(activeTab)
    }else{
      setCurrentTab('event')
    }

  },[])
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
        <div className="text-gray-arrow font-semibold">
          {moment(Number(extrinsicDetails?.indexer?.blockTime)).format('YYYY-MM-DD HH:mm:ss')}
        </div>)

    },
    {
      title: t('Extrinsic Hash'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {(extrinsicDetails?.hash)?(extrinsicDetails?.hash):'-'}
        </div>
        // <LinkXWithPop linkUrl={'/'} content={extrinsicDetails?.hash}/>
        // <></>

      )
    },
    {
      title: t('Operation'),
      align:'right',
      width:'15rem',
      content: (
        <Operation content={extrinsicDetails?.section + '-' + extrinsicDetails?.name} more={false} left={true}/>
        // <></>
      ),
    },
    {
      title: t('Sender'),
      content: (
        <div className="text-gray-arrow font-semibold">
          {(extrinsicDetails?.singer)?(extrinsicDetails?.singer):'-'}
        </div>
    // <LinkXWithPop linkUrl={'/'} content={extrinsicDetails?.singer}/>

),
    },
    // {
    //   title: t('Fee'),
    //   content:
    //     <div className="text-gray-arrow font-semibold">
    //       {extrinsicDetails?.blockTime}
    //     </div>,
    // }, {
    //   title: t('Node'),
    //   content: <div className="text-gray-arrow font-semibold">
    //   </div>,
    // }, {
    //   title: t('Result'),
    //   content: <div className="text-gray-arrow font-semibold">
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
    //   content: <div className="text-gray-arrow font-semibold">
    //     {extrinsicDetails?.data}
    //   </div>,
    // }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Event'),
      content: <Event extrinsic={extrinsic}/>,
      name:'event'
    }
  ];
  const routerPath = () => {
    return (<div className="flex flex-row cursor-pointer text-gray-white">
      <Link to={'/'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Home')}/</Link>
      <Link to={'/chain/extrinsic'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Extrinsic')}/ </Link>
      <Link to={`./${extrinsic}`}>{t('ExtrinsicDetails')}</Link>
    </div>);
  };
  return (
    <>
      <Header showSearch={true}/>
      {noData ?
        <NoData/> :
        <>
          <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
            <DetailTitle routeTitle={t('Extrinsics')}
                         content={extrinsicDetails?.indexer?.blockHeight + '-' + extrinsicDetails?.indexer?.index}
                         isBlock={false} setNowBlock={extrinsic} routePath={routerPath}/>
          </div>
          <List list={list} loading={loading}/>
          <div className="px-24 pb-4 bg-gray-bgWhite screen:px-4">
            <Wrapper>
              <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag}/>
            </Wrapper>
          </div>
        </>}

      <Footer/>
    </>);
}