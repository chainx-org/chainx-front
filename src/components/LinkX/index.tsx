import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import CopyText from '../../components/copyText';

const LinkSpan = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #3C88C6;
  line-height: 22px;
  cursor: pointer;
`;

interface LinkProps {
  linkUrl: string,
  content: string,
  children?: any
}


//简短的link ,样式，点击跳转方法
export function LinkX({linkUrl, content}: LinkProps) {
  return (<Link to={linkUrl}><LinkSpan>{content}</LinkSpan></Link>);
}

// //格式化样式，缩短hash
export function ShorterLink({linkUrl, content}: LinkProps) {
  let value = content.toString();
  const popWithCopy = (
    <div>
      <CopyText children={value} text={value}/>
    </div>
  );
  return (<Popover content={popWithCopy}><Link
    to={linkUrl}><LinkSpan>{value.substring(0, 5).concat('...').concat(value.substring(value.length - 5))}</LinkSpan></Link></Popover>);
}

export function Shorter({linkUrl, content}: LinkProps) {
  let value = content.toString();
  const popWithCopy = (
    <div>
      <CopyText children={value} text={value}/>
    </div>
  );
  return (<Popover content={popWithCopy}><Link
    to={linkUrl}><LinkSpan>{value.substring(0, 5).concat('...').concat(value.substring(value.length - 5))}</LinkSpan></Link></Popover>);
}


