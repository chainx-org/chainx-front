import React from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';


export default function Dex() {
  const {t} = useTranslation();

  const Wapper = styled.div`
    min-height: 688px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;


  return (
    <>
      <Header/>
      <div className="px-24 py-4 bg-gray-bgWhite ">
        <Wapper>

        </Wapper>
      </div>
      <Footer/>

    </>
  );
}