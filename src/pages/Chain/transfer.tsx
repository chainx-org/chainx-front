import { useTranslation } from 'react-i18next';
import React from 'react';
import addressIcon from '../../assets/address_icon.svg';
import { LinkX, Normal } from '../../components/LinkX';
import ChainxTable from '../../components/Table/table';

export default function Transfer() {
  const {t} = useTranslation();

  const extrinsicColumns = [
    {
      title: t('extrinsic'),
      dataIndex: 'address',
      key: 'address',
      width: 800,
      render: (text: any, record: any) => {
        return (
          <div className="flex flex-row items-center">
            <img src={addressIcon} alt="" style={{marginRight: '0.25rem'}}/>
            <LinkX linkUrl={'/block'} content={record.address}/>
          </div>
        );
      }
    },
    {
      title: t('Frozen amount')+'(PCX)',
      dataIndex: 'FrozenAmount',
      key: 'FrozenAmount',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <Normal state={(record.data.feeFrozen)?(record.data.feeFrozen):'-'}/>
        );
      },
      sorter: (a: any, b: any) => a.data.feeFrozen - b.data.feeFrozen
    },
    {
      title: t('Total balance')+'(PCX)',
      dataIndex: 'TotalBalance',
      key: 'TotalBalance',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <Normal state={(record.data.free)?(record.data.free):'-'}/>
        );
      },
      sorter: (a: any, b: any) => {
        return a.data.free - b.data.free
      }
    }
  ];

  return (
    <ChainxTable Columns={extrinsicColumns} urlControl={'/ChainTable?'} result={'items'} keyNum={4}/>
  );
}
