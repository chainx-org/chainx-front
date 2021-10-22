import React from 'react';
import moreIcon from '../../assets/icon_more.svg';
import styled from 'styled-components';

interface OperationProps{
  content:string
  more?:boolean
}
const ContentBox = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 1px solid #E9E9E9;
  padding: 0.25rem 0.5rem;
`;
export default function Operation({content,more}:OperationProps) {

  return (
    <div className="flex flex-row justify-between">
      <ContentBox>{content}</ContentBox>
      {!more && <img src={moreIcon} alt="" style={{cursor: 'pointer'}}/>}
    </div>);

}