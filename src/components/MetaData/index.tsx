/** @format */

import {CardDiv, MetaDataBox, Wrapper, Container, RightLine} from './style'
import React from 'react'
import {reName} from '../../helper/hooks'
class OrderItem {
  'icon': any
  'name': string
  'data': string
}

interface metaDataProps {
  metaData: Array<OrderItem>
}

export default function MetaData({metaData}: metaDataProps) {
  return (
    <MetaDataBox>
      <Wrapper>
        {metaData.map((item: any, index) => {
          return (
            <CardDiv key={index}>
              <Container className={'container-div'}>
                <img src={item.icon} alt='' />
                <div className='flex flex-col justify-start my-auto ml-4'>
                  <span>{item.name}</span>
                  <span>{reName(item.data)}</span>
                </div>
              </Container>
              <RightLine className={'line-div'} />
            </CardDiv>
          )
        })}
      </Wrapper>
    </MetaDataBox>
  )
}
