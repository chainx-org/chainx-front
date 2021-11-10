import React from 'react';
import { useTranslation } from 'react-i18next';
import arrowChangeIcon from '../../assets/icon_awitch.svg';
import CardListItem from '../../components/CardListItem';
import { Button, Input } from 'antd';
import { CardTitle, Container, SpliteLine, Wrapper } from './style';
import Icon from '../../assets/address_icon.svg';
import noDataIcon from '../../assets/noData.svg';
import publicIcon from '../../assets/icon_key.svg';
import decodeAddress from '../../helper/decodeAddress';

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
  loading?: boolean;
}

export default function CardBox({
                                  cardBoxTitleIcon,
                                  cardBoxTitleName,
                                  cardBoxTitleContainer,
                                  inputValue,
                                  inputValueFun,
                                  selectAddress,
                                  listValue,
                                  correctValue,
                                  loading
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
            <span className="inline-block mb-12 text-sm font-medium text-black-textColor">{cardBoxTitleContainer.title}</span>
            <div className="border">
              <TextArea
                value={inputValue}
                onChange={textInput}
                placeholder={cardBoxTitleContainer.container}
                autoSize={{minRows: 6, maxRows: 10}}
                bordered={true}
              />
            </div>
            <Button block style={{background: 'black', borderRadius: '4px', cursor: 'pointer'}}
                    className="toolsBtn w-overSpread h-12 bg-topBar-black text-topBar-white mt-12 items-center text-center"
                    onClick={searchFun} disabled={loading} loading={loading}>{!loading &&
            <span className="inline-block mx-auto my-auto">{t('Search')}</span>}</Button>
          </div>
          <div className="items-center my-auto mx-auto text-center">
            <img className='arrowChange' src={arrowChangeIcon} alt=""/>
          </div>
          <div
            className="items-center my-auto ml-0 text-center mr-6 bg-topBar-gray h-overSpread flex justify-center items-center"
            style={{
              background: '#F9F9F9',
              borderRadius: '10px',
              border: '1px solid #DBDBDB',
              maxHeight:'34rem'
            }}>

            {listValue.length > 0 ?
              <div className="overflow-scroll w-overSpread h-overSpread"
                   style={{background: 'white', borderRadius: '10px'}}>
                <CardListItem itemIcon={publicIcon} itemContent={listValue[0].value!==''?(decodeAddress(inputValue) ||''):''}
                              itemTitle={'Public Key'}/>
                {listValue?.map((item: any,index:number) => {
                    return (
                      <CardListItem key={index} itemIcon={Icon} itemContent={item?.value} itemTitle={item?.name}/>
                    );
                  }
                )}
              </div> :
              <>
                {loading ?
                  <img src="https://scan.chainx.org/static/media/loading.80f33db6.png" alt=""/> : <> {!correctValue ?
                    <div className="flex flex-col">
                      <img className="inline-block w-18 my-0 mx-auto" src={cardBoxTitleContainer.icon} alt=""/>
                      <div className='inline-block mb-12 text-sm text-black-textLighter'>{t('Enter the address or public key for conversion')}</div>
                    </div> :
                    <div className="flex flex-col">
                      <img className="inline-block w-18 my-0 mx-auto" src={noDataIcon} alt=""/>
                      <div className='inline-block mb-12 text-sm text-black-textLighter'>{t(`${correctValue}`)}</div>
                    </div>}</>}
              </>}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}
