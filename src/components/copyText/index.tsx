import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import Icon from '../../assets/copy.svg';

const Wrapper = styled.div`
  display: flex;

  > :first-child {
    margin-right: 8px;
  }
`;

// @ts-ignore
export default function CopyText({children, text}) {
  const onCopy = () => {
    if (text && copy(text)) {
      console.log(text);
    }
  };

  return (
    <Wrapper>
      <div>{children}</div>
      <img src={Icon} alt="" onClick={onCopy}/>
    </Wrapper>);
}
