import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardBox from '../../components/CardBox';
import { useTranslation } from 'react-i18next';
import blockLeakage from '../../assets/blockLeakage.svg';
import searchIcon from '../../assets/img_switch.png';


export default function SearchPage() {
  const {t} = useTranslation();

  // const Wrapper = styled.div`
  //   min-height: 688px;
  //   background: #FFFFFF;
  //   box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  //   border-radius: 10px;
  //   border: 1px solid #E9E9E9;
  //   @
  // `;
  const changeAddress = (value:string)=>{
    // setInputValue(value)
  }
  const BoxContainer = {
    title: t('Enter the address of block leakage for query'),
    container: t('Please enter the block leakage address'),
    icon: searchIcon,
    result: t('Enter the address or public key for conversion')

  };


  return (
    <>
      <Header showSearch={true}/>
      <CardBox cardBoxTitleIcon={blockLeakage} cardBoxTitleName={t('Query block leakage')}
               cardBoxTitleContainer={BoxContainer} inputValueFun={changeAddress} selectAddress={changeAddress}/>
      <Footer/>

    </>
  );
}
