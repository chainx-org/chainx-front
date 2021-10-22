import { CardDiv, MetaDataBox, Wrapper,Container,RightLine } from './style';
import React from 'react';
import { reName } from '../../helper/hooks';
class OrderItem {
  'icon': any;
  'name': string;
  'data': string
}

interface metaDataProps {
    metaData: Array<OrderItem>
}

export default function MetaData({metaData}:metaDataProps) {

  return (
    <MetaDataBox>
      <Wrapper>
        {metaData.map((item:any) => {
          return (
            <CardDiv>
              <Container className={'container-div'}>
                <img src={item.icon} alt=""/>
                <div className="flex flex-col justify-start my-auto ">
                  <span className="name">{item.name}</span>
                  <span className="date">{reName(item.data)}</span>
                </div>
              </Container>
              <RightLine className={'line-div'}/>
          </CardDiv>);
        })}
      </Wrapper>
    </MetaDataBox>);
}
