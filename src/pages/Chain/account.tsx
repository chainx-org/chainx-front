import { useTranslation } from 'react-i18next';
import React from 'react';
import addressIcon from '../../assets/address_icon.svg';
import { LinkX } from '../../components/LinkX';
import ChainxTable from '../../components/Table/table';

export default function Account() {
  const {t} = useTranslation();
  const AccountColumns = [
    {
      title: t('Account'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <div className="flex flex-row items-center">
            <img src={addressIcon} alt="" style={{marginRight: '0.25rem'}}/>
            <LinkX linkUrl={`/addressDetails/${record.address}`} content={record.address}/>
          </div>
        );
      }
    },
    {
      title: t('Frozen amount'),
      dataIndex: 'FrozenAmount',
      key: 'FrozenAmount',
      render: (text: any, record: any) => {
        return (
          <div>{record.data.feeFrozen}</div>
        );
      },
      sorter: (a: any, b: any) => a.data.feeFrozen - b.data.feeFrozen
    },
    {
      title: t('Total balance'),
      dataIndex: 'TotalBalance',
      key: 'TotalBalance',
      render: (text: any, record: any) => {
        return (
          <div>{record.data.free}</div>
        );
      },
      sorter: (a: any, b: any) => {
        return a.data.free - b.data.free
      }
    }
  ];

  return (
  <ChainxTable Columns={AccountColumns} urlControl={'/accounts?'} result={'items'} keyNum={4}/>
);
}
