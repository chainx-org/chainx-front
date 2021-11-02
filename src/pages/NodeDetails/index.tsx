import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/useApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import { Link } from 'react-router-dom';
import NoData from '../../components/NoData';
import Missed from './missed';
import { encodeAddress } from '@polkadot/keyring';
import decodeAddress from '../../helper/encodeAddress';
import TrustTag from '../../components/TrustTag';
import { accuracy, reName } from '../../helper/hooks';
import { ExtrinWrapper, ListBgColor, Wrapper, WrapperDetails, WrapperList } from '../../css/Wrapper';

const {hexToU8a, isHex} = require('@polkadot/util');

export default function NodeDetails() {

  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [addressDetails, setAddressDetails] = useState<any>();
  const node = window.location.pathname.slice(13, window.location.pathname.length);
  const [nowAddress, setNowAddress] = useState(node);
  const [noData, setNoData] = useState(false);
  const tag = 'nodeTetails'
  const [currentTab, setCurrentTab] = useState('missed');
  const getData = async (node:string) => {
    const {items}: any = await get(`/validators/all`, ``);
    const result =  items.filter((item: any, index: number) => {
      if(item.account === node){
        return item
      }
    });
    if (result.length > 0) {
      setAddressDetails(result[0]);
      setLoading(false);
    } else {
      setLoading(true);
      setNoData(true);
    }
  };

  const initNode = ()=>{
    if (node.includes('0x')) {
      let recordResult = encodeAddress(
        isHex(node)
          ? hexToU8a(node)
          : decodeAddress(node)
      );
      getData(recordResult);
    } else {
      try {
        return getData(node);
      } catch (error) {
        setNoData(true)
        return false;
      }
    }
  }

  useEffect(() => {
    initNode()
  }, []);
  useEffect(()=>{
    
    const activeTab = sessionStorage.getItem(tag)
    if(activeTab){
      setCurrentTab(activeTab)
    }else{
      setCurrentTab('missed')
    }

  },[])
  const list = [
    {
      title: t('NikeName'),
      content: (
        <div className="font-medium text-gray-arrow ">
          <div className='flex flex-row'>
            <span>{addressDetails?.referralId}</span>{(addressDetails?.isValidating)?<TrustTag/>:'-'}</div>
        </div>
      ),
    },
    {
      title: t('Account'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {reName(addressDetails?.account)}
        </div>)
    },
    // {
    //   title: t('Authored Address'),
    //   content: (
    //     <div className="text-blue-light cursor-pointer"
    //          onClick={() => <div>{(addressDetails?.header?.number)?reName(addressDetails?.header?.number):'-'}</div>}/>
    //   )
    // },
    {
      title: t('Jackpot Address'),
      content: (
        <div className="font-medium text-gray-arrow ">{addressDetails?.rewardPotAccount}</div>
      ),
    },
    {
      title: t('Missed Blocks'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {(addressDetails?.missed)?(addressDetails?.missed):'0'}
        </div>
      ),
    },{
      title: t('Self Bonded'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {accuracy(addressDetails?.selfBonded)}
        </div>
      ),
    },
    {
      title: t('Total Nominations'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {accuracy(addressDetails?.totalNomination)}
        </div>
      ),
    },
    // {
    //   title: t('Authored Blocks'),
    //   content:
    //     <div className="font-medium text-gray-arrow ">
    //       {reName(addressDetails?.totalNomination)}
    //     </div>,
    // },
    {
      title: t('Vote Weight Last Update'),
      content: <div className="font-medium text-gray-arrow ">
        {addressDetails?.lastTotalVoteWeightUpdate}
      </div>,
    }, {
      title: t('Total Weight'),
      content: <div className="font-medium text-gray-arrow ">
        {reName(addressDetails?.lastTotalVoteWeight)}
      </div>,
    }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Missed'),
      // content:<></>
      content: <Missed/>,
      name:'missed'
    }
  ];
  const routerPath = () => {
    return (<div className="flex flex-row cursor-pointer text-gray-white text-base mx-0 my-auto" style={{'whiteSpace': 'nowrap'}}>
      <Link to={'/'} style={{color:'rgba(255, 255, 255, 0.65)'}}><div className='flex flex-row'>{t('Home')}<span className='inline-block mx-2'>/</span></div></Link>
        <Link to={'/validators'} style={{color:'rgba(255, 255, 255, 0.65)'}}><div className='flex flex-row'>{t('Chain')}<span className='inline-block mx-2'>/</span></div></Link>
      <Link to={`./${node}`}>{t('NodeDetails')}</Link>
    </div>);
  };
  return (
    <>
       <Header showSearch={true}/>
      <ListBgColor/>
      {noData ?
        <NoData/> :
        <WrapperList>
          <div className="px-24 bg-gray-arrow desktop:pt-8 screen:px-4 ">
            <DetailTitle routeTitle={t('Validator')} content={node} isBlock={false}
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
       {/*<Footer/> */}
    </>);
}