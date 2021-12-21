/** @format */

import React from 'react'
import CardBox from '../../components/CardBox'
import {useTranslation} from 'react-i18next'
import blockLeakage from '../../assets/blockLeakage.svg'
import searchIcon from '../../assets/img_switch.png'

export default function AccountTransfer() {
  const {t} = useTranslation()

  const changeAddress = (value: string) => {}
  const BoxContainer = {
    title: t('Enter the address of block leakage for query'),
    container: t('Please enter the block leakage address'),
    icon: searchIcon,
    result: t('Enter the address or public key for conversion'),
  }
  return (
    <CardBox
      cardBoxTitleIcon={blockLeakage}
      cardBoxTitleName={t('Query block leakage')}
      cardBoxTitleContainer={BoxContainer}
      inputValueFun={changeAddress}
      selectAddress={changeAddress}
    />
  )
}
