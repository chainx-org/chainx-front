import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NoData from '../../components/NoData';
import {Wrapper} from '../../css/Wrapper'

export default function NoDataPage() {

  const {t} = useTranslation();

  return (
    <>
      {/* <Header showSearch={true}/> */}
        <NoData/>
      {/* <Footer/> */}
    </>);
}