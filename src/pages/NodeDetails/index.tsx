import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/useApi';
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
import {  ListBgColor,  WrapperDetails, WrapperList } from '../../css/Wrapper';
import CopyText from '../../components/copyText';

const {hexToU8a, isHex} = require('@polkadot/util');

export default function NodeDetails() {

  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [addressDetails, setAddressDetails] = useState<any>();
  const node = window.location.hash.slice(14, window.location.hash.length);
  const [noData, setNoData] = useState(false);
  const tag = 'nodeTetails'
  const [currentTab, setCurrentTab] = useState('missed');
  const getData = async (node:string) => {
    const {items}: any = await get(`/validators/all`, ``);
    const result =  items.filter((item: any) => {
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
        <div className="text-black-textColor">
          <div className='flex flex-row'>
            <span>{addressDetails?.referralId}</span>{(addressDetails?.isValidating)?<TrustTag/>:'-'}</div>
        </div>
      ),
    },
    {
      title: t('Account'),
      content: (
        <div className="text-black-textColor">
          <CopyText text={addressDetails?.rewardPotAccount} children={ <div className="text-black-textColor">{reName(addressDetails?.account)}</div>}/>
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
        <CopyText text={addressDetails?.rewardPotAccount} children={ <div className="text-black-textColor">{addressDetails?.rewardPotAccount}</div>}/>
      ),
    },
    {
      title: t('Missed Blocks'),
      content: (
        <div className="text-black-textColor">
          {(addressDetails?.missed)?(addressDetails?.missed):'0'}
        </div>
      ),
    },{
      title: t('Self Bonded'),
      content: (
        <div className="text-black-textColor">
          {accuracy(addressDetails?.selfBonded)}
        </div>
      ),
    },
    {
      title: t('Total Nominations'),
      content: (
        <div className="text-black-textColor">
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
      content: <div className="text-black-textColor">
        {addressDetails?.lastTotalVoteWeightUpdate}
      </div>,
    }, {
      title: t('Total Weight'),
      content: <div className="text-black-textColor">
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
      <ListBgColor/>
      {noData ?
        <NoData/> :
        <WrapperList>
          <div className="px-24 bg-gray-arrow desktop:pt-8 screen:px-4  medium:px-4">
            <DetailTitle routeTitle={t('Validator')} content={node} isBlock={false}
                         routePath={routerPath}/>
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