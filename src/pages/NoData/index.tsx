import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NoData from '../../components/NoData';

const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;
export default function NoDataPage() {

  const {t} = useTranslation();

  return (
    <>
      <Header showSearch={true}/>
        <NoData/>
      <Footer/>
    </>);
}