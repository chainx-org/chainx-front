import React, { ReactNode } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

export interface TabInfo
{
    title: string;
    content: ReactNode;
}

interface SwitchTabsProps
{
    children?: ReactNode;
    tabList: TabInfo[];
    className?: string;
    size: 'lg' | 'medium' | 'sm';
    onTabClick?: (e: string) => void;
}

function SwitchTabs({ children, onTabClick, tabList, size, className = '' }: SwitchTabsProps): React.ReactElement<SwitchTabsProps>
{
    return (
        <Tabs
            className={`${className} ui--switchTabs-${size ? size : ''} `}>
            {tabList.map((tab) => (
                <TabPane tab={tab.title} key={tab.title} >
                    {tab.content}
                </TabPane>
            ))}
            {children}
        </Tabs>
    )
}

export default SwitchTabs