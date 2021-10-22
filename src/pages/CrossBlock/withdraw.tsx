import { useTranslation } from 'react-i18next';
import React from 'react';
import { ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import ChainxTable from '../../hooks/table';


export default function Withdraw() {
  const {t} = useTranslation();

  const chainColumns = [
    {
      title: t('Withdrawal ID '),
      dataIndex: 'Withdrawal ID ',
      key: 'Withdrawal ID ',
      render: (text: any, record: any) => {
        return (
          <div>{record.data[0]}</div>
        );
      }
    },
    {
      title: t('ChainX Transaction Hash'),
      dataIndex: 'ChainX Transaction Hash',
      key: 'ChainX Transaction Hash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicsDetails/${record.extrinsicHash}`}
                       content={record.extrinsicHash}/>
        );
      }
    },
    {
      title: t('ChainX Withdraw '),
      dataIndex: 'ChainX Withdraw ',
      key: 'ChainX Withdraw ',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.data[1].applicant}`}
                       content={record.data[1].applicant}/>
        );
      }
    },
    {
      title: t('AddressWithdraw'),
      dataIndex: 'AddressWithdraw',
      key: 'AddressWithdraw',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.data[1].addr}`}
                       content={record.data[1].addr}/>
        );
      }
    },
    {
      title: t('AddressWithdraw Created Time'),
      dataIndex: 'Time',
      key: 'Time',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>
        );
      }
    },
    {
      title: t('Asset'),
      dataIndex: 'Asset',
      key: 'Asset',
      render: (text: any, record: any) => {
        return (
          <div>{'BTC'}</div>
        );
      }
    },
    {
      title: t('Balance'),
      dataIndex: 'Balance',
      key: 'Balance',
      render: (text: any, record: any) => {
        return (
          <div>{record.data[1].balance / 100000000}</div>);
      }
    },
    {
      title: t('State'),
      dataIndex: 'State',
      key: 'State',
      render: (text: any, record: any) => {
        return (
          <div>{record.withdrawalState}</div>);
      }
    }
];

return (
  <ChainxTable Columns={chainColumns} urlControl={'/crossblocks/bitcoin/withdrawals?'} result={'items'} keyNum={10}/>

);
}