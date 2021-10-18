import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import Icon from '../../assets/copy.svg';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;

  > :first-child {
    margin-right: 8px;
  }
`;
interface CopyTextProps{
  children?:any,
  text:string
}

// @ts-ignore
export default function CopyText({children, text}:CopyTextProps) {
  const {t} = useTranslation()
  const onCopy = () => {
    if (text && copy(text)) {
      message.success(t('copy success'))
    }
  };

  return (
    <Wrapper>
      <div>{children}</div>
      <img src={Icon} alt="" onClick={onCopy}/>
    </Wrapper>);
}
