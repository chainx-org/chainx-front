import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import arrowChangeIcon from '../../assets/icon_awitch.svg';
import { Input } from 'antd';
import { CardTitle, Container, SpliteLine, Wapper } from './css';

const {TextArea} = Input;

interface CardBoxProps {
  cardBoxTitleicon: string;
  cardBoxTitleName: string;
  cardBoxTitleContainer: any;
}

export default function AccountTransfer({cardBoxTitleicon, cardBoxTitleName, cardBoxTitleContainer}: CardBoxProps) {
  const {t} = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const textInput = (e:any) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <div className="Container">
      <Wapper>
        <CardTitle>
          <img src={cardBoxTitleicon} alt=""/>
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
            <div className="w-overSpread h-12 bg-topBar-black text-topBar-white mt-12 items-center text-center">查询</div>
          </div>
          <div className="items-center my-auto mx-0 text-center">
            <img src={arrowChangeIcon} alt=""/>
          </div>
          <div className="items-center my-auto mx-0 text-center bg-topBar-gray">
            <img className="inline-block" src={cardBoxTitleContainer.icon} alt=""/>
            <div>{cardBoxTitleContainer.result}</div>
          </div>
        </Container>
      </Wapper>
    </div>
  );
}
