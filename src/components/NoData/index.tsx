import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import noDataIcon from '../../assets/noData.svg';

const Wrapper = styled.div`
    min-height: 688px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

export default function NoData() {
  const {t} = useTranslation();


  return (
    <div className="px-24 py-4 bg-gray-bgWhite  screen:px-4">
      <Wrapper>
        <div className="flex flex-col ">
          <img src={noDataIcon} alt="" className='inline-block w-12 mx-auto'/>
          <span className='inline-block w-12 mx-auto'>{t('No Data')}</span>
        </div>
      </Wrapper>
    </div>
  );
}
