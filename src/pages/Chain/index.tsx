import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';
import Block from './block';
import Account from './account';
import Extrinsic from './extrinsic';
import Event from './event';

const Wrapper = styled.div`
    min-height: 688px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;

export default function Chain() {
  const {t} = useTranslation();
  const currentRoute = window.location.pathname.slice(7, window.location.pathname.length);
  const [currentTab, setCurrentTab] = useState(currentRoute);
  const chooseTab = (currentRoute: string) => {
    switch (currentRoute) {
      case 'extrinsic':
        setCurrentTab(t('Extrinsic'));
        break;
      case 'event':
        setCurrentTab(t('Event'));
        break;
      case 'account':
        setCurrentTab(t('Accounts'));
        break;
      default:
        setCurrentTab(t('Blocks'));
    }
  };
  useEffect(() => {chooseTab(currentRoute);}, [currentTab]);

  const tabList: TabInfo[] = [
    {
      title: t('Blocks'),
      content: <Block/>,
    },
    {
      title: t('Extrinsic'),
      content: <Extrinsic/>,
    },
    {
      title: t('Event'),
      content: <Event/>,
    },
    {
      title: t('Accounts'),
      content: <Account/>,
    }
  ];
  return (
    <>
      <Header showSearch={true}/>
      <div className="px-24 pt-8 pb-16 bg-gray-bgWhite screen:px-4">
        <Wrapper>
          <TableMenuBox tabList={tabList} currentTab={currentTab}/>
        </Wrapper>
      </div>
      <Footer/>
    </>
  );
}
