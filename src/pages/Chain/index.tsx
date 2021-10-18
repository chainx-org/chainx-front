import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';
import Block from './block';
import Account from './account';
import Extrinsic from './extrinsic';
import Transfer from './transfer';
import Event from './event';


export default function Chian() {
  const {t} = useTranslation();

  const Wapper = styled.div`
    min-height: 688px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;

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
      title: t('Transfer'),
      content: <Transfer/>,
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
      <Header/>
      <div className="px-24 pt-8 pb-16 bg-gray-bgWhite screen:px-4">
        <Wapper>
          <TableMenuBox tabList={tabList}/>
        </Wapper>
      </div>
      <Footer/>
    </>
  );
}
