/** @format */

import React from 'react'
import moreIcon from '../../assets/icon_more.svg'
import styled from 'styled-components'

interface OperationProps {
  content: string
  more?: boolean
  mini?: boolean
  left?: boolean
}
const ContentBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  padding: 0.05rem 0.5rem;
  @media screen and (max-width: 1150px) {
    font-size: 12px;
  }
`
const ContentMiniBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 1px solid #e9e9e9;
  padding: 0rem 0.5rem;
  @media screen and (max-width: 1150px) {
    font-size: 12px;
  }
`
export default function Operation({content, more, mini, left}: OperationProps) {
  return (
    <>
      {left ? (
        <div className='flex flex-row justify-start'>
          {mini ? <ContentMiniBox>{content}</ContentMiniBox> : <ContentBox>{content}</ContentBox>}
          {/*{!more && <img src={moreIcon} alt="" style={{cursor: 'pointer'}}/>}*/}
        </div>
      ) : (
        <div className='flex flex-row justify-end'>
          {mini ? <ContentMiniBox>{content}</ContentMiniBox> : <ContentBox>{content}</ContentBox>}
          {/*{!more && <img src={moreIcon} alt="" style={{cursor: 'pointer'}}/>}*/}
        </div>
      )}
    </>
  )
}
