/** @format */

import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TableMenuBox from '../../components/TableMenuBox'
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'
import {TabInfo} from '../../components/SwitchTab'
import Validators from './validators'
import StandBy from './standBy'
import Trustees from './trustees'
import ValidatorSlashed from './validatorSlashed'
import RecentSlashed from './recentSlashed'
import {Wrapper} from '../../css/Wrapper'

export default function Validator() {
  const {t} = useTranslation()
  const tag = 'validator'
  const [currentTab, setCurrentTab] = useState('validators')
  useEffect(() => {
    const activeTab = sessionStorage.getItem(tag)
    if (activeTab) {
      setCurrentTab(activeTab)
    } else {
      setCurrentTab('validators')
    }
  }, [])
  const tabList: TabInfo[] = [
    {
      title: t('Validators'),
      content: <Validators />,
      name: 'validators',
    },
    {
      title: t('StandBy Node'),
      content: <StandBy />,
      name: 'node',
    },
    {
      title: t('Bitcoin Trustees') + ' (Bitcoin)',
      content: <Trustees />,
      name: 'trustees',
    },
    {
      title: t('Validator Slashed'),
      content: <ValidatorSlashed />,
      name: 'slashed',
    },
    {
      title: t('Recent Slashed List'),
      content: <RecentSlashed />,
      name: 'recent',
    },
  ]

  return (
    <>
      <div className="px-24 py-4 bg-gray-bgWhite  screen:px-4">
        <Wrapper>
          <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag} />
        </Wrapper>
      </div>
    </>
  )
}
