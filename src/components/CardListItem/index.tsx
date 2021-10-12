import React from 'react';
import {ItemContainer,ItemContext} from './css'
import CopyText from '../../components/copyText'
interface CaedListItem {
  itemTitle:string,
  itemIcon:string,
  itemContect:string
}
export default  function CardListItem({itemTitle,itemIcon,itemContect}:CaedListItem){
  return (
    <ItemContainer>
      <img src={itemIcon} alt=""/>
      <ItemContext>
        <span>{itemTitle}</span>
        <CopyText text={itemContect}>
        <span>{itemContect}</span>
        </CopyText>
      </ItemContext>
  </ItemContainer>);
}