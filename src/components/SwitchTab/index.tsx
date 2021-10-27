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

}

function SwitchTab({
                     children,
                     currentTab,
                     tabList,
                     size,
                     className = '',
                   }: SwitchTabsProps): React.ReactElement<SwitchTabsProps> {
  const {t} = useTranslation();
  return (
    <Tabs
      defaultActiveKey={currentTab}
      className={`${className} ui--switchTabs-${size ? size : ''} `}
     >
      {tabList.map((tab) => (
        <TabPane tab={tab.title} key={tab.title}>
          {tab.content}
        </TabPane>
      ))}
      {children}
    </Tabs>
  )
}

export default SwitchTab