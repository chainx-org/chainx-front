import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/useApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import { Link } from 'react-router-dom';
import NoData from '../../components/NoData';
import Missed from './missed';
import { encodeAddress } from '@polkadot/keyring';
import decodeAddress from '../../helper/encodeAddress';
import TrustTag from '../../components/TrustTag';
import { reName } from '../../helper/hooks';

const {hexToU8a, isHex} = require('@polkadot/util');

const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
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
        console.log(item)
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
        <div className="text-black-dark">
          <div className='flex flex-row'>
            <span>{addressDetails?.referralId}</span>{(addressDetails?.isValidating)?<TrustTag/>:'-'}</div>
        </div>
      ),
    },
    {
      title: t('Account'),
      content: (
        <div className="text-black-dark">
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
        <div className="text-black-dark">{addressDetails?.rewardPotAccount}</div>
      ),
    },
    {
      title: t('Missed Blocks'),
      content: (
        <div className="text-black-dark">
          {(addressDetails?.missed)?(addressDetails?.missed):'0'}
        </div>
      ),
    },{
      title: t('Self Bonded'),
      content: (
        <div className="text-black-dark">
          {reName(addressDetails?.selfBonded)}
        </div>
      ),
    },
    {
      title: t('Total Nominations'),
      content: (
        <div className="text-black-dark">
          {addressDetails?.totalNomination}
        </div>
      ),
    },
    // {
    //   title: t('Authored Blocks'),
    //   content:
    //     <div className="text-black-dark">
    //       {reName(addressDetails?.totalNomination)}
    //     </div>,
    // },
    {
      title: t('Vote Weight Last Update'),
      content: <div className="text-black-dark">
        {addressDetails?.lastTotalVoteWeightUpdate}
      </div>,
    }, {
      title: t('Total Weight'),
      content: <div className="text-black-dark">
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
    return (<div className="flex flex-row cursor-pointer text-gray-white">
      <Link to={'/'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Home')}/</Link>
      <Link to={'/validators'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Chain')}/ </Link>
      <Link to={`./${node}`}>{t('NodeDetails')}</Link>
    </div>);
  };
  return (
    <>
      <Header showSearch={true}/>
      {noData ?
        <NoData/> :
        <>
          <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
            <DetailTitle routeTitle={t('Validator')} content={node} isBlock={false}
                         routePath={routerPath}/>
          </div>
          <List list={list} loading={loading}/>
          <div className="px-24 pb-16 bg-gray-bgWhite screen:px-4">
            <Wrapper>
              <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag} />
            </Wrapper>
          </div>
        </>}

      <Footer/>
    </>);
}