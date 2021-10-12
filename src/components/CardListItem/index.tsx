import React from 'react';
import touxiang from '../../assets/touxiang.svg'
import {ItemContainer,ItemContext} from './css'
export default  function CardListItem(){
  return (
    <ItemContainer>
      <img src={touxiang} alt=""/>
      <ItemContext>
        <span>Public Key</span>
        <span>0x2792d15bd786f0ddd55ba4b49e6b4fcd821d7790be00539ca21caacfbfe28fd1</span>
      </ItemContext>
  </ItemContainer>);
}