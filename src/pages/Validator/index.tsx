import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';
import Validators from './validators'
import StandBy from './standBy'
import Trustees from './trustees'
import ValidatorSlashed from './validatorSlashed'
import RecentSlashed from './recentSlashed'


export default function Validator() {
  const {t} = useTranslation();

  const Wrapper = styled.div`
    min-height: 688px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;

  const tabList: TabInfo[] = [
    {
      title: t('Validators'),
      content: <Validators/>,
    },
    {
      title: t('StandBy Node'),
      content:<StandBy/>,
    },
    {
      title: t('Bitcoin Trustees')+' (Bitcoin)',
      content: <Trustees/>,
    },
    {
      title: t('Validator Slashed'),
      content: <ValidatorSlashed/>,
    },
    {
      title: t('Recent Slashed List'),
      content: <RecentSlashed/>,
    }
  ];

  return (
    <>
      <Header/>
      <div className="px-24 py-4 bg-gray-bgWhite  screen:px-4">
        <Wrapper>
          <TableMenuBox tabList={tabList} key={''}/>
        </Wrapper>
      </div>
      <Footer/>

    </>
  );
}
