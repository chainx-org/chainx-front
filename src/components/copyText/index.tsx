/** @format */

import React from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'
import Icon from '../../assets/copy.svg'
import listIcon from '../../assets/icon_copy_address.svg'
import {message} from 'antd'
import {useTranslation} from 'react-i18next'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  //justify-content: space-between;
  > :first-child {
    margin-right: 8px;
  }
`
interface CopyTextProps {
  children?: any
  text: string
  showText?: boolean
}

// @ts-ignore
export default function CopyText({children, text, showText}: CopyTextProps) {
  const {t} = useTranslation()
  const onCopy = () => {
    if (text && copy(text)) {
      message.success({content: t('copy success')})
    }
  }

  return (
    <Wrapper>
      {!showText ? <div style={{margin: 'auto 0'}}>{children}</div> : ''}
      {!showText ? (
        <img
          src={Icon}
          alt=''
          onClick={onCopy}
          className='cursor-pointer'
          style={{maxWidth: 'none', marginLeft: '8px'}}
        />
      ) : (
        <img
          src={listIcon}
          alt=''
          onClick={onCopy}
          className='cursor-pointer'
          style={{maxWidth: 'none', marginLeft: '8px'}}
        />
      )}
    </Wrapper>
  )
}
