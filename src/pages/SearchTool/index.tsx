import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';
import searchIcon from '../../assets/img_switch.png';
import { CardTitle, Container, SpliteLine, Wrapper } from '../../components/CardBox/style';
import arrowChangeIcon from '../../assets/icon_awitch.svg';
import CardListItem from '../../components/CardListItem';
import Icon from '../../assets/address_icon.svg';
import leakageIcon from '../../assets/icon_Account switch.svg';

import { Input } from 'antd';
import { get } from '../../hooks/useApi';
import JsonApi from '../../components/Jsonformat';


export default function Tools() {
  const {TextArea} = Input;
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState('');
  const [listValue, setListValue] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isCorrectValue, setIsCorrectValue] = useState('');
  const [nowSearch,setNowSearch] = useState('Event')

  const changeAddress = (value: string) => {
    setInputValue(value);
    if (value) {
      setIsCorrectValue('');
    }
  };
  const textInput = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const getData = async () => {
    if (nowSearch === 'Event') {
      let res: any = await get(`/search/${inputValue}?page=${page}&page_size=${pageSize}`, ``);
      try {
        setListValue(res);
      }catch (e) {
        setIsCorrectValue('')
      }
    } else {
      let res: any = await get(`/searchExtrinsic/${inputValue}?page=${page}&page_size=${pageSize}`, ``);
      try {
        setListValue(res);
      }catch (e) {
        setIsCorrectValue('')
      }
    }
  }
  const searchFun = () => {
    getData();
  };
  const {Search} = Input;

  return (
    <>
      <Header/>
      <div className="Container">
        <Wrapper>
          <CardTitle>
            <img src={leakageIcon} alt=""/>
            <span>{t('搜索事件/交易')}</span>
          </CardTitle>
          <SpliteLine/>
          <Container>
            <div className="items-center my-auto mx-0 text-start">
              <div className="flex flex-col mb-12">
                <div className="flex flex-row">
                  <span className="inline-block mr-1">{'选择类型'}</span>
                  <span className="inline-block">{'?'}</span>
                </div>
                <Search placeholder={nowSearch} enterButton/>
                <ul className="toolList">
                  <li>
                    <div onClick={()=>{setNowSearch('Event')}}>{t('Event')}</div>
                  </li>
                  <li>
                    <div onClick={()=>{setNowSearch('exe')}}>{t('exe')}</div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mb-12">
                  <span className="inline-block mr-1">{'请输入哈希/名称/进行查询'}</span>
                <div className="border">
                  <TextArea
                    value={inputValue}
                    onChange={textInput}
                    placeholder={'333'}
                    autoSize={{minRows: 6, maxRows: 10}}
                    bordered={true}
                  />
                </div>
              </div>

              <div className="w-overSpread h-12 bg-topBar-black text-topBar-white mt-12 items-center text-center"
                   style={{borderRadius: '4px'}} onClick={searchFun}>
                <span className="inline-block" style={{lineHeight: '3rem'}}>{t('Search')}</span>
              </div>
            </div>
            <div className="items-center my-auto mx-auto text-center">
              <img src={arrowChangeIcon} alt=""/>
            </div>
            <div
              className="items-center my-auto mx-0 text-center bg-topBar-gray h-overSpread flex justify-center items-center"
              style={{
                background: '#F9F9F9',
                borderRadius: '10px',
                border: '1px solid #DBDBDB'
              }}>
              <div className="h-12 overflow-scroll">
                {<JsonApi json={listValue}/>}
              </div>
              <div className="flex flex-col">
                <img className="inline-block w-12" src={leakageIcon} alt=""/>
                <div>{'4444'}</div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </div>
      <Footer/>

    </>
  );
}
