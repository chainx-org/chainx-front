import React from 'react';
import SwitchTab, { TabInfo }  from '../../components/SwitchTab';
interface SwitchTabProps {
  tabList:TabInfo[],
  currentTab?:any,
}
export default function TableMenuBox({tabList,currentTab}:SwitchTabProps) {
  return (
    <>
      <SwitchTab size="lg" tabList={tabList} currentTab={currentTab} />
    </>);
}