import { CardDiv, MetaDataBox, Wrapper } from './css';
import React from 'react';
import first from '../../assets/icon_high_sure.svg';

export default function MetaData() {
  const metaDataList = [{
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }, {
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }, {
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }, {
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }, {
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }, {
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }, {
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }, {
    icon: 'first',
    name: '确认高度',
    data: '191,121'
  }];

  return (
    <MetaDataBox>
      <Wrapper>
        {metaDataList.map((item) => {
          return (<CardDiv>
            <img src={item.icon} alt=""/>
            <div className="flex flex-col justify-start my-auto">
              <span className="name">已确认块高</span>
              <span className="date">1,111,000</span>
            </div>
          </CardDiv>);
        })}
      </Wrapper>
    </MetaDataBox>);
}
