import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import CardBox from '../../components/CardBox'
import { useTranslation } from 'react-i18next';
import blockLeakage from '../../assets/icon_Account switch.svg'
import searchIcon from '../../assets/img_switch.png'


export default function SS58() {
  const {t} = useTranslation();

  // const Wapper = styled.div`
  //   min-height: 688px;
  //   background: #FFFFFF;
  //   box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  //   border-radius: 10px;
  //   border: 1px solid #E9E9E9;
  //   @
  // `;

  const BoxContainer = {
    title:t('Enter the address of block leakage for query'),
    container:t('Please enter the block leakage address'),
    icon:searchIcon,
    result:t('Enter the address or public key for conversion')

  }


  return (
    <>
      <Header/>
      <CardBox cardBoxTitleIcon={blockLeakage} cardBoxTitleName={t('Transform Address/Public Key')} cardBoxTitleContainer={BoxContainer}/>
      <Footer/>

    </>
  );
}
