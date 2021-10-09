import React from 'react';
import SwitchTab,{ TabInfo }  from '../../components/SwitchTab';

export default function TableMenuBox() {
  const tabList: TabInfo[] = [
    {
      title: '111',
      content: <></>,
    },
    {
      title: '222',
      content: <></>,
    }
  ];

  return (
    <>
      <SwitchTab size="lg" tabList={tabList}/>
    </>);
}