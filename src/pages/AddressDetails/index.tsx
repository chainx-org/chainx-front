import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { get } from '../../hooks/useApi';
import List from '../../components/List';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import { TabInfo } from '../../components/SwitchTab';
import DetailTitle from '../../components/DetailTitle';
import NoData from '../../components/NoData';
import decodeAddress from '../../helper/decodeAddress';
import publicKeyIcon from '../../assets/icon_key.svg';
import { Popover } from 'antd';
import Assets from './assets';
import Transaction from './transaction';
import Transfers from './transfers';
import { ListBgColor, WrapperDetails, WrapperList } from '../../css/Wrapper';
import { BgColor } from '../HomePage/style';

export default function AddressDetails() {

  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [blockDetails, setBlockDetails] = useState<any>();
  const address = window.location.pathname.slice(16, window.location.pathname.length);
  const pubKey = decodeAddress(address) || '';
  const [nowBlock, setNowBlock] = useState(address);
  const tag = 'address'
  const [currentTab, setCurrentTab] = useState('assets');
  const getData = async () => {
    const res: any = await get(`/accounts/${address}/assets`, ``);
    if (res) {
      setBlockDetails(res);
      setLoading(false);
    } else {
      setNoData(true);
    }

  };
  useEffect(()=>{
    
    const activeTab = sessionStorage.getItem(tag)
    if(activeTab){
      setCurrentTab(activeTab)
    }else{
      setCurrentTab('assets')
    }

  },[])
  useEffect(() => {
    // if (window.history.state && window.history.state?.state) {
    //   setBlockDetails(window.history.state.state);
    //   console.log('window', window.history.state.state);
    //   setLoading(false);
    // } else {
      getData().then(
      ).catch(() => {
        console.log('find error');
        setNoData(true);
      });
    // }
  }, []);
  const PublicContainer = styled.div`
    .publicKey {
      display: none;
    }
  `;
  const list = [
    {
      title: t('PublicKey'),
      content: (
        <Popover content={pubKey}>
          <img src={publicKeyIcon} alt=""/>
        </Popover>)
    },
    {
      title: t('Address'),
      content: (
        <div
          className="font-medium text-gray-arrow ">{address}</div>
      ),
    },
    {
      title: t('Nonce'),
      content: (
        <div className="font-medium text-gray-arrow ">
          {blockDetails?.nonce}
        </div>
      )
    }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Assets'),
      content: <Assets account={address}/>,
      name:'assets'
    },
    {
      title: t('Transactions'),
      content: <Transaction account={address}/>,
      name:'transaction'
    },
    {
      title: t('Transfers'),
      content: <Transfers account={address}/>,
      name:'transfer'
    }
  ];
  const routerPath = () => {
    return (<div className="flex flex-row cursor-pointer text-gray-white text-base mx-0 my-auto">
      <Link to={'/'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Home')}<span className='inline-block mx-2'>/</span></Link>
      <Link to={'/chain/extrinsic'} style={{color:'rgba(255, 255, 255, 0.65)'}}>{t('Chain')}<span className='inline-block mx-2'>/</span> </Link>
      <Link to={`./${address}`} >{t('AccountDetails')}</Link>
    </div>);
  };
  return (
    <>
      <Header showSearch={true}/>
      <ListBgColor style={{height:'195px'}}/>
      {noData ?
        <NoData/> :
        <WrapperList>
          <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
            <DetailTitle routeTitle={t('Address')} content={nowBlock}
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
      <Footer/>
    </>);
}