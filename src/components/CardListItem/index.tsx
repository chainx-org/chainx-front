import React from 'react';
import {ItemContainer,ItemContext} from './css'
import CopyText from '../../components/copyText'
interface CardListItem {
  itemTitle:string,
  itemIcon:string,
  itemContent:string
}
export default  function CardListItem({itemTitle,itemIcon,itemContent}:CardListItem){
  return (
    <ItemContainer>
      <img src={itemIcon} alt=""/>
      <ItemContext>
        <span>{itemTitle}</span>
        <CopyText text={itemContent}>
        <span>{itemContent}</span>
        </CopyText>
      </ItemContext>
  </ItemContainer>);
}