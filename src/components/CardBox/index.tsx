import React from 'react';
import { useTranslation } from 'react-i18next';
import arrowChangeIcon from '../../assets/icon_awitch.svg';
import CardListItem from '../../components/CardListItem';
import { Input } from 'antd';
import { CardTitle, Container, SpliteLine, Wrapper } from './css';
import Icon from '../../assets/address_icon.svg';

const {TextArea} = Input;

interface CardBoxProps {
  cardBoxTitleIcon: string;
  cardBoxTitleName: string;
  cardBoxTitleContainer?: any;
  inputValue?: string;
  inputValueFun: Function;
  selectAddress: Function;
  listValue?: any;
  correctValue?: string;
}

export default function CardBox({
                                  cardBoxTitleIcon,
                                  cardBoxTitleName,
                                  cardBoxTitleContainer,
                                  inputValue,
                                  inputValueFun,
                                  selectAddress,
                                  listValue,
                                  correctValue
                                }: CardBoxProps) {
  const {t} = useTranslation();
  const textInput = (e: any) => {
    const value = e.target.value;
    inputValueFun(value);
  };
  const searchFun = () => {
    selectAddress();
  };
  return (
    <div className="Container">
      <Wrapper>
        <CardTitle>
          <img src={cardBoxTitleIcon} alt=""/>
          <span>{cardBoxTitleName}</span>
        </CardTitle>
        <SpliteLine/>
        <Container>
          <div className="items-center my-auto mx-0 text-center">
            <span className="inline-block mb-12">{cardBoxTitleContainer.title}</span>
            <div className="border">
              <TextArea
                value={inputValue}
                onChange={textInput}
                placeholder={cardBoxTitleContainer.container}
                autoSize={{minRows: 6, maxRows: 10}}
                bordered={true}
              />
            </div>
            {correctValue ? <div>{correctValue}</div> : ''}
            <div className="w-overSpread h-12 bg-topBar-black text-topBar-white mt-12 items-center text-center"
                 style={{borderRadius: '4px'}} onClick={searchFun}>
              <span className="inline-block" style={{lineHeight: '3rem'}}>{t('Search')}</span>
            </div>
          </div>
          <div className="items-center my-auto mx-auto text-center">
            <img src={arrowChangeIcon} alt=""/>
          </div>
          <div className="items-center my-auto mx-0 text-center bg-topBar-gray h-overSpread" style={{
            background: '#F9F9F9',
            borderRadius: '10px',
            border: '1px solid #DBDBDB'
          }}>
            <div className="h-12 overflow-scroll">
              {listValue?.map((item: any) => {
                return (
                  <CardListItem itemIcon={Icon} itemContent={item?.value} itemTitle={item?.name}/>
                );
              })}
            </div>
            {!correctValue ? <>
              <img className="inline-block" src={cardBoxTitleContainer.icon} alt=""/>
              <div>{cardBoxTitleContainer.result}</div>
            </> : ''}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}
