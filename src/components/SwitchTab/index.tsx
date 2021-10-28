import React, { ReactNode } from 'react';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';

const { TabPane } = Tabs;

export interface TabInfo {
  key?:number,
  title: string;
  name?: string;
  content: ReactNode;
}

interface SwitchTabsProps {
  children?: ReactNode;
  tabList: TabInfo[];
  className?: string;
  size: 'lg' | 'medium' | 'sm';
  currentTab?: string;
  setCurrentTab?:any;
  tag:string
}

function SwitchTab({
                     children,
                     currentTab,
                     setCurrentTab,
                     tag,
                     tabList,
                     size,
                     className = '',
                   }: SwitchTabsProps): React.ReactElement<SwitchTabsProps> {
  const {t} = useTranslation();
  function changeTab(key:any){
    
    setCurrentTab(key)
    sessionStorage.setItem(tag,key)
  }
  return (
    <Tabs
      defaultActiveKey={currentTab}
      activeKey={currentTab}
      className={`${className} ui--switchTabs-${size ? size : ''} `}
      onChange={changeTab}
     >
      {tabList.map((tab) => (
        <TabPane tab={tab.title} key={tab.name}>
          {tab.content}
        </TabPane>
      ))}
      {children}
    </Tabs>
  )
}

export default SwitchTab