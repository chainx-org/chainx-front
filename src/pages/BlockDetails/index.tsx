import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import moment from 'moment';
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
import { ListBgColor, WrapperDetails, WrapperList } from '../../css/Wrapper';


export default function BlockDetails() {

  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [blockDetails, setBlockDetails] = useState<any>();
  const block = window.location.pathname.slice(14, window.location.pathname.length);
  const isBlockNumber = (/^[0-9]*$/.test(block));
  const [nowBlock, setNowBlock] = useState(block);
  const tag = 'blockDetails'
  const [currentTab, setCurrentTab] = useState('extrinsic');
  const getData = async () => {
    const res: any = await get(`/blocks/${nowBlock}`, ``);
    if (res) {
      setBlockDetails(res);
      setLoading(false);
    } else {
      setNoData(true);
    }

  };
  useEffect(() => {
    getData().then(
      ).catch(() => {
        setNoData(true);
      });
  }, []);
  useEffect(()=>{
    
    const activeTab = sessionStorage.getItem(tag)
    if(activeTab){
      setCurrentTab(activeTab)
    }else{
      setCurrentTab('extrinsic')
    }

  },[])
  const list = [
    {
      title: t('Block Height'),
      content: (
        <div
          className="font-medium text-gray-arrow ">{(blockDetails?.header?.number) ? blockDetails?.header?.number : '-'}</div>
      ),
    },
    {
      title: t('Time'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {(blockDetails?.blockTime) ? moment(Number(blockDetails?.blockTime)).format('YYYY-MM-DD HH:mm:ss') + '(+UTC)' : '-'}
        </div>)
    },
    // {
    //   title: t('Status'),
    //   content: (
    //     <div>
    //       {(blockDetails?.isSuccess) ?
    //         <div className="flex flex-row items-center"><img src={successIcon} alt=""/><span
    //           className="inline-block">{t('Success')}</span></div> : '-'}
    //     </div>
    //   )
    // },
    {
      title: t('Block Hash'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {blockDetails?.hash}
        </div>
      ),
    },
    {
      title: t('Parent Hash'),
      content: (
        <a style={{display: 'inline-block', color: '#3C88C6'}}
           href={`/blockDetails/${blockDetails?.header?.parentHash}`}>{blockDetails?.header?.parentHash}</a>)
    },
    {
      title: t('Extrinsics Root'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {blockDetails?.header?.stateRoot}
        </div>
      ),
    },
    // {
    //   title: t('Block Time'),
    //   content:
    //     <div className="font-medium text-gray-arrow ">
    //       {/*{moment(Number(blockDetails?.blockTime)).format('YYYY-MM-DD HH:mm:ss')}*/}
    //       -
    //     </div>,
    // }, {
    //   title: t('Validator'),
    //   content:
    //     <div className="font-medium text-gray-arrow ">
    //       {(blockDetails?.address) ?
    //         <LinkXWithPopAndIcon content={blockDetails?.address} linkUrl={`/addressDetails/${blockDetails?.address}`}
    //                              img={successIcon}/> : '-'}
    //     </div>
    // }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Extrinsic'),
      content: <Extrinsic block={block}/>,
      name:'extrinsic'
    },
    {
      title: t('Event'),
      content: <Event block={block}/>,
      name:'event'
    }
  ];
  const routerPath = () => {
    return (
      <div className="flex flex-row cursor-pointer text-gray-white text-base">
      <Link to={'/'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Home')}<span className='inline-block mx-2'>/</span></Link>
      <Link to={'/chain'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Chain')}<span className='inline-block mx-2'>/</span> </Link>
      <Link to={`./${block}`}>{t('BlockDetails')}</Link>
    </div>);
  };
  return (
    <>
      {/* <Header showSearch={true}/> */}
      <ListBgColor/>
      {noData ?
        <NoData/> :
        <WrapperList>
          <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
            <DetailTitle routeTitle={t('Block Height')} content={nowBlock} isBlock={isBlockNumber}
                         setNowBlock={setNowBlock}
                         routePath={routerPath}/>
          </div>
          <List list={list} loading={loading}/>
          <div className="px-24 pb-4 bg-gray-bgWhite screen:px-4">
            <WrapperDetails>
              <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag}/>
            </WrapperDetails>
          </div>
        </WrapperList>
      }
      {/* <Footer/> */}
    </>);
}