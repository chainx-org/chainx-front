import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Event from '../Chain/event';
import Extrinsic from '../Chain/extrinsic';
import { get } from '../../hooks/useApi';
import List from '../../components/List';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import NoData from '../../components/NoData';
import { ListBgColor, WrapperDetails, WrapperList } from '../../css/Wrapper';
import CopyText from '../../components/copyText';


export default function BlockDetails() {

  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [blockDetails, setBlockDetails] = useState<any>();
  const block = window.location.hash.slice(15, window.location.hash.length);
  debugger
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
          className="text-black-textColor">{(blockDetails?.header?.number) ? blockDetails?.header?.number : '-'}</div>
      ),
    },
    {
      title: t('Time'),
      content: (
        <div className="text-black-textColor">
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
        <div className="text-black-textColor">
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
        <div className='flex flex-row'>
          <div className="text-black-textColor mr-1">{blockDetails?.header?.stateRoot}</div>
          <CopyText text={blockDetails?.header?.stateRoot} showText={true}/>
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
      <div className="flex flex-row cursor-pointer text-gray-white text-base" style={{'whiteSpace': 'nowrap'}}>
      <Link to={'/'} style={{color:'rgba(255, 255, 255, 0.65)'}}><div className='flex flex-row w-fitContent'>{t('Home')}<span className='inline-block mx-2'>/</span></div></Link>
      <Link to={'/chain'} style={{color:'rgba(255, 255, 255, 0.65)'}}><div className='flex flex-row w-fitContent'>{t('Chain')}<span className='inline-block mx-2'>/</span></div></Link>
      <Link to={`./${block}`}>{t('BlockDetails')}</Link>
    </div>);
  };
  return (
    <>
      <ListBgColor/>
      {noData ?
        <NoData/> :
        <WrapperList>
          {/*<Search className="NavSearch"/>*/}
          <div className="px-24 bg-gray-arrow desktop:pt-8 screen:px-4 medium:px-4">
            <DetailTitle routeTitle={t('Block Height')} content={nowBlock} isBlock={isBlockNumber}
                         setNowBlock={setNowBlock}
                         routePath={routerPath} showHeightIcon = {true}/>
          </div>
          <List list={list} loading={loading}/>
          <div className="px-24 pb-4 bg-gray-bgWhite screen:px-4 medium:px-4">
            <WrapperDetails>
              <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag}/>
            </WrapperDetails>
          </div>
        </WrapperList>
      }
    </>);
}