/** @format */

import React from 'react'
import {ItemContainer, ItemContext} from './css'
import CopyText from '../../components/copyText'
import Identicon from '@polkadot/react-identicon'

interface CardListItem {
  itemTitle: string
  itemIcon: string
  itemContent: string
  isPublic?: boolean
}

export default function CardListItem({itemTitle, itemIcon, itemContent, isPublic}: CardListItem) {
  return (
    <ItemContainer>
      {isPublic ? (
        <img src={itemIcon} className='imgIcon' alt='' />
      ) : (
        <Identicon className='imgIcon' value={itemContent} size={40} theme='polkadot' />
      )}

      <ItemContext>
        <span>{itemTitle}</span>
        <CopyText text={itemContent}>
          <span>{itemContent}</span>
        </CopyText>
      </ItemContext>
    </ItemContainer>
  )
}
