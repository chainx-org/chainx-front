import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';
import Block from './block';
import Account from './account';
import Extrinsic from './extrinsic';
import Event from './event';
import {Wrapper} from '../../css/Wrapper'

export default function Chain() {
  const {t} = useTranslation();
  // const currentRoute = window.location.pathname.slice(7, window.location.pathname.length);
  const tag = 'chain'
  const [currentTab, setCurrentTab] = useState('block');

  useEffect(()=>{
    
    const activeTab = sessionStorage.getItem(tag)
    if(activeTab){
      setCurrentTab(activeTab)
    }else{
      setCurrentTab('block')
    }

  },[])
  // useEffect(() => {chooseTab(currentRoute);}, [currentTab]);

  const tabList: TabInfo[] = [
    {
      title: t('Blocks'),
      content: <Block/>,
      name:'block'
    },
    {
      title: t('Extrinsic'),
      content: <Extrinsic/>,
      name:'extrinsic'
    },
    {
      title: t('Event'),
      content: <Event/>,
      name:'event'
    },
    {
      title: t('Accounts'),
      content: <Account/>,
      name:'account'
    }
  ];
  return (
    <>
       <Header showSearch={true}/>
      <div className="px-24 pt-8 pb-16 bg-gray-bgWhite screen:px-4">
        <Wrapper>
          <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag}/>
        </Wrapper>
      </div>
       {/*<Footer/>*/}
    </>
  );
}
