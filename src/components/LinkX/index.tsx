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
  content: any,
  children?: any,
  img?: any,
  state?: any,
}

//简短的link ,样式，点击跳转方法
export function LinkX({linkUrl, content, state}: LinkProps) {
  return (<Link to={{pathname: linkUrl, state: state}}><LinkSpan>{content}</LinkSpan></Link>);
}

export function LinkXWithPop({linkUrl, content, state}: LinkProps) {
  return (<CopyText children={<Link to={{pathname: linkUrl, state: state}}><LinkSpan>{content}</LinkSpan></Link>}
                    text={content}/>);
}

export function LinkXWithPopAndIcon({linkUrl, content, img, state}: LinkProps) {
  return (<CopyText
    children={<div className="flex flex-row items-center mr-1"><img src={img} alt="" style={{display: 'inline-block'}}/><Link
      to={{pathname: linkUrl, state: state}}><LinkSpan>{content}</LinkSpan></Link></div>} text={content}/>);
}

// //格式化样式，缩短hash
export function ShorterLink({linkUrl, content, state}: LinkProps) {
  let value = content?.toString();
  const popWithCopy = (
    <div>
      <CopyText children={value} text={value}/>
    </div>
  );
  return (<Popover content={popWithCopy}><Link to={{
    pathname: linkUrl,
    state: state
  }}><LinkSpan>{value?.substring(0, 5).concat('...').concat(value?.substring(value.length - 5))}</LinkSpan></Link></Popover>);
}

export function Shorter({linkUrl, content, state}: LinkProps) {
  let value = content?.toString();
  const popWithCopy = (
    <div>
      <CopyText children={value} text={value}/>
    </div>
  );
  return (
    // <Popover content={popWithCopy}>
      <Link to={{
        pathname: linkUrl,
        state: state
      }}>
        <LinkSpan>{value?.substring(0, 5).concat('...').concat(value?.substring(value.length - 5))}</LinkSpan>
      </Link>
    // </Popover>
);
}


