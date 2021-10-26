import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';
import { CardTitle, Container, SpliteLine, Wrapper } from '../../components/CardBox/style';
import arrowChangeIcon from '../../assets/icon_awitch.svg';
import leakageIcon from '../../assets/icon_Account switch.svg';

import { Input } from 'antd';
import { get } from '../../hooks/useApi';
import JsonApi from '../../components/Jsonformat';
import noDataIcon from '../../assets/noData.svg';


export default function Tools() {
  const {Search, TextArea} = Input;
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [listValue, setListValue] = useState<any>('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isCorrectValue, setIsCorrectValue] = useState('');
  const [nowSearch,setNowSearch] = useState('Event')

  const textInput = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const getData = async () => {
    if (nowSearch === 'Event') {
      try {
        let res: any = await get(`/search/${inputValue}?page=${page}&page_size=${pageSize}`, ``);
        setListValue(res);
      }catch (e) {
        setIsCorrectValue('')
      }
    } else {
      try {
        let res: any = await get(`/searchExtrinsic/${inputValue}?page=${page}&page_size=${pageSize}`, ``);
        setListValue(res);
      }catch (e) {
        setIsCorrectValue('')
      }
    }
  }
  const searchFun = () => {
    getData();
  };

  return (
    <>
      <Header showSearch={true}/>
      <div className="Container">
        <Wrapper>
          <CardTitle>
            <img src={leakageIcon} alt=""/>
            <span>{t('Search Events/Extrinsics')}</span>
          </CardTitle>
          <SpliteLine/>
          <Container>
            <div className="items-center my-auto mx-0 text-start">
              <div className="flex flex-col mb-12">
                <div className="flex flex-row">
                  <span className="inline-block mr-1">{t('selective type')}</span>
                  <span className="inline-block">{'?'}</span>
                </div>
                <div className="toolSearch">
                  <div className="showSelect"><span>{nowSearch}</span></div>
                  <div className="selectBtn">
                    <ul className="toolList">
                      <li>
                        <div onClick={() => {setNowSearch('Event');}}>{t('Event')}</div>
                      </li>
                      <li>
                        <div onClick={() => {setNowSearch('exe');}}>{t('exe')}</div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="flex flex-col mb-12">
                <span className="inline-block mr-1">{t('Please enter Hash / Name to search')}</span>
                <div className="border">
                  <TextArea
                    value={inputValue}
                    onChange={textInput}
                    placeholder={t('Please enter Hash / Name to search')}
                    autoSize={{minRows: 6, maxRows: 10}}
                    bordered={true}
                  />
                </div>
              </div>

              <div className="w-overSpread h-12 bg-topBar-black text-topBar-white mt-12 items-center text-center"
                   style={{borderRadius: '4px',cursor:'pointer'}} onClick={searchFun}>
                <span className="inline-block" style={{lineHeight: '3rem'}}>{t('Search')}</span>
              </div>
            </div>
            <div className="items-center my-auto mx-auto text-center">
              <img src={arrowChangeIcon} alt=""/>
            </div>
            <div
              className="items-center my-auto ml-0 text-center mr-6 bg-topBar-gray h-overSpread flex justify-center items-center"
              style={{
                background: '#F9F9F9',
                borderRadius: '10px',
                border: '1px solid #DBDBDB'
              }}>
              {listValue ?
                <div className="overflow-scroll w-overSpread h-overSpread"
                     style={{background: 'white', borderRadius: '10px'}}>
                  {<JsonApi json={listValue}/>}
                </div> : <>
                  {!isCorrectValue ?
                    <div className="flex flex-col">
                      {/*<img className="inline-block w-18 my-0 mx-auto" src={cardBoxTitleContainer.icon} alt=""/>*/}
                      <div>{t('Enter the address or public key for conversion')}</div>
                    </div> :
                    <div className="flex flex-col">
                      {/*<img className="inline-block w-18 my-0 mx-auto" src={noDataIcon} alt=""/>*/}
                      <div>{t(`${isCorrectValue}`)}</div>
                    </div>
                  }
                </>}
            </div>
          </Container>
        </Wrapper>
      </div>
      <Footer/>

    </>
  );
}
