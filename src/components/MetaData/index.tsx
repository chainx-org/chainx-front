import { CardDiv, MetaDataBox, Wrapper } from './css';
import React from 'react';
import highsure from '../../assets/icon_high_sure.svg';
import holders from '../../assets/icon_holders.svg'
import transfer from '../../assets/icon_transfer.svg'
import node from '../../assets/icon_node.svg'
import issuance from '../../assets/icon-issuance.svg'
export default function MetaData() {
  const metaDataList = [{
    icon: highsure,
    name: '已确认块高',
    data: '191,121'
  }, {
    icon: highsure,
    name: '最新块高',
    data: '191,121'
  }, {
    icon: holders,
    name: '交易签名',
    data: '191,121'
  }, {
    icon: holders,
    name: '账户信息',
    data: '191,121'
  }, {
    icon: transfer,
    name: '转账总数',
    data: '191,121'
  }, {
    icon: node,
    name: '验证节点',
    data: '191,121'
  }, {
    icon: issuance,
    name: '总供应量',
    data: '191,121'
  }, {
    icon: issuance,
    name: '质押率',
    data: '191,121'
  }];

  return (
    <MetaDataBox>
      <Wrapper>
        {metaDataList.map((item) => {
          return (<CardDiv>
            <img src={item.icon} alt=""/>
            <div className="flex flex-col justify-start my-auto ">
              <span className="name">{item.name}</span>
              <span className="date">{item.data}</span>
            </div>
          </CardDiv>);
        })}
      </Wrapper>
    </MetaDataBox>);
}
