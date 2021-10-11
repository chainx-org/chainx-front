import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import arrowChangeIcon from '../../assets/icon_awitch.svg';
import { Input } from 'antd';
import { Wapper,CardTitle, SpliteLine, Container } from './css';
const { TextArea } = Input;
interface CardBoxProps {
  cardBoxTitleicon: string;
  cardBoxTitleName: string;
  cardBoxTitleContainer: any;
}

export default function AccountTransfer({cardBoxTitleicon, cardBoxTitleName, cardBoxTitleContainer}: CardBoxProps) {
  const {t} = useTranslation();
  const [inputValue,setInputValue] = useState('')

  const textInput = (e:any) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <div className="px-24 pt-6 pb-16 bg-gray-bgWhite">
      <Wapper>
        <CardTitle>
          <img src={cardBoxTitleicon} alt=""/>
          <span>{cardBoxTitleName}</span>
        </CardTitle>
        <SpliteLine/>
        <Container>
          <div className='items-center my-auto mx-0'>
            <span>{cardBoxTitleContainer.title}</span>
            <TextArea
              value={inputValue}
              onChange={textInput}
              placeholder={cardBoxTitleContainer.container}
              autoSize={{ minRows: 3, maxRows: 5 }}
              bordered={true}
            />
          </div>
          <div><img src={arrowChangeIcon} alt=""/></div>
          <div><img src={cardBoxTitleContainer.icon} alt=""/>
            <div>{cardBoxTitleContainer.result}</div>
          </div>
        </Container>
      </Wapper>
    </div>
  );
}
