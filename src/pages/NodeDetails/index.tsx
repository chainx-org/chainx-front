import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/useApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { TabInfo } from '../../components/SwitchTab';
import Extrinsic from '../Chain/extrinsic';
import Event from '../Chain/event';
import DetailTitle from '../../components/DetailTitle';
import { Link } from 'react-router-dom';
import NoData from '../../components/NoData';
import VotedList from './votedList';
import Missed from './missed';

export default function NodeDetails() {
  const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [addressDetails, setAddressDetails] = useState<any>();
  const node = window.location.pathname.slice(13, window.location.pathname.length);
  const [nowAddress, setNowAddress] = useState(node);
  const [noData, setNoData] = useState(false);

  const getData = async () => {
    const {items}: any = await get(`/validators/all`, ``);
   const item =  items.filter((item: any, index: number) => {
      return item.account === node
    });
    if(item.length>0){
      setAddressDetails(item[0]);
      setLoading(false);
    }else{
      setLoading(true);
      setNoData(true)
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const list = [
    {
      title: t('Nikename'),
      content: (
        <div className="text-black-dark">{addressDetails?.referralId}-{(addressDetails?.isValidating)?'<TrustTag/>':'-'}</div>
      ),
    },
    {
      title: t('Account'),
      content: (
        <div className="text-black-dark">
          {addressDetails?.account}
        </div>)
    },
    {
      title: t('Authored Address'),
      content: (
        <div className="text-blue-light cursor-pointer"
             onClick={() => <div>{addressDetails?.header?.number}</div>}/>
      )
    },
    {
      title: t('Jackpot Address'),
      content: (
        <div className="text-black-dark">{addressDetails?.hash}</div>
      ),
    },
    {
      title: t('Missed Blocks'),
      content: (
        <div className="text-black-dark">
          {addressDetails?.extrinsicsRoot}
        </div>
      ),
    },{
      title: t('Self Bonded'),
      content: (
        <div className="text-black-dark">
          {addressDetails?.selfBonded}
        </div>
      ),
    },
    // {
    //   title: t('Missed Blocks'),
    //   content: (
    //     <div className="text-black-dark">
    //       {addressDetails?.extrinsicsRoot}
    //     </div>
    //   ),
    // },
    {
      title: t('Authored Blocks'),
      content:
        <div className="text-black-dark">
          {addressDetails?.totalNomination}
        </div>,
    }, {
      title: t('Vote Weight Last Update'),
      content: <div className="text-black-dark">
        {addressDetails?.lastTotalVoteWeightUpdate}
      </div>,
    }, {
      title: t('Total Weight'),
      content: <div className="text-black-dark">
        {addressDetails?.lastTotalVoteWeight}
      </div>,
    }
  ];
  const tabList: TabInfo[] = [
    {
      title: t('Voted List'),
      content:<></>
      // content: <VotedList/>,
    },
    {
      title: t('Missed'),
      // content:<></>
      content: <Missed/>,
    }
  ];
  const routerPath = () => {
    return (<div className="flex flex-row cursor-pointer text-gray-white">
      <Link to={'/'}>首页/</Link>
      <Link to={'/validators'}>验证节点/ </Link>
      <Link to={`./${node}`}>节点详情</Link>
    </div>);
  };
  return (
    <>
      <Header/>
      {noData ?
        <NoData/> :
        <>
          <div className="px-24 pt-8 bg-gray-arrow screen:px-4">
            <DetailTitle routeTitle={t('Validator')} content={Number(nowAddress)} isBlock={false}
                         routePath={routerPath}/>
          </div>
          <List list={list} loading={loading}/>
          <div className="px-24 pb-16 bg-gray-bgWhite screen:px-4">
            <Wrapper>
              <TableMenuBox tabList={tabList}/>
            </Wrapper>
          </div>
        </>}

      <Footer/>
    </>);
}