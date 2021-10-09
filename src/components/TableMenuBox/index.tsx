import React from 'react';
import SwitchTab, { TabInfo }  from '../../components/SwitchTab';
interface SwitchTabProps {
  tabList:TabInfo[]
}
export default function TableMenuBox({tabList}:SwitchTabProps) {

  return (
    <>
      <SwitchTab size="lg" tabList={tabList}/>
    </>);
}