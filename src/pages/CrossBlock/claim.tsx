import { useTranslation } from 'react-i18next';
import React from 'react';
import swapEndian from '../../helper/swapEndian';
import ChainxTable from '../../components/Table/table';


export default function Claim() {
  const {t} = useTranslation();

  const chainColumns = [
    {
      title: t('Bitcoin Transaction Hash'),
      dataIndex: 'Bitcoin Transaction Hash',
      key: 'Bitcoin Transaction Hash',
      render: (text: any, record: any) => {
        return (
          <a style={{display:'inline-block',color:'#3C88C6'}} href={`https://live.blockcypher.com/btc/tx/${swapEndian(record.data[0])}/`} target="_Blank">{(swapEndian(record.data[0]))}</a>
        );
      }
    },
    {
      title: t('Bitcoin Source Address'),
      dataIndex: 'Bitcoin Source Address',
      key: 'Bitcoin Source Address',
      render: (text: any, record: any) => {
        return (
          <a style={{display: 'inline-block', color: '#3C88C6'}}
             href={`https://live.blockcypher.com/btc/address/${record.data[1]}/`}
             target="_Blank">{'0x'.concat(record.data[1])}</a>
        );
      }
    }
  ];

  return (
    <ChainxTable Columns={chainColumns} urlControl={'/crossblocks/bitcoin/unclaim?'} result={'items'} keyNum={7}/>
  );
}
