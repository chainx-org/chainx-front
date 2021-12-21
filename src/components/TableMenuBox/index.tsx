/** @format */

import React from 'react'
import SwitchTab, {TabInfo} from '../../components/SwitchTab'
interface SwitchTabProps {
  tabList: TabInfo[]
  currentTab?: any
  setCurrentTab?: any
  tag: string
}
export default function TableMenuBox({tabList, currentTab, setCurrentTab, tag}: SwitchTabProps) {
  return (
    <>
      <SwitchTab size='lg' tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag} />
    </>
  )
}
