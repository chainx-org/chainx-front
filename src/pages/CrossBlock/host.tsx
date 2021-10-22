import { useTranslation } from 'react-i18next';
import React from 'react';
import { ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import ChainxTable from '../../hooks/table';


export default function Host() {
  const {t} = useTranslation();

  const chainColumns = [
    {
      title: t('Multi Signer Threshold'),
      dataIndex: 'Threshold',
      key: 'Threshold',
      render: (text: any, record: any) => {
        return (
          <div>
            {record.threshold}
          </div>
        );
      }
    },
    {
      title: t('Trustee'),
      dataIndex: 'Trustee',
      key: 'Trustee',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicsDetails/${record.address}`}
                       content={record.address}/>);
      }
    },
    {
      title: t('Hot Public Key'),
      dataIndex: 'hotKey',
      key: 'hotKey',
      render: (text: any, record: any) => {
        return (
         <div>{record.hotPubkey}</div>);
      }
    },
    {
      title: t('Cold Public Key'),
      dataIndex: 'coldKey',
      key: 'coldKey',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.coldPubkey}/>);
      }
    }
  ];

  return (
  <ChainxTable Columns={chainColumns} urlControl={'/crossblocks/bitcoin/trustees?'} result={'items'} keyNum={9}/>

);
}
