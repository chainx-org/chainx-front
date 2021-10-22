import { useTranslation } from 'react-i18next';
import React from 'react';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import waitIcon from '../../assets/icon_waiting.svg';
import ChainxTable from '../../hooks/table';


export default function Block() {
  const {t} = useTranslation();
  const chainColumns = [
    {
      title: t('Block'),
      dataIndex: 'number',
      key: 'number',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.header.number}`} state={record} content={record.header.number}/>
        );
      }
    },
    {
      title: t('Status'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <img src={waitIcon} alt=""/>
        );
      }
    },
    {
      title: t('Time'),
      dataIndex: 'blockTime',
      key: 'blockTime',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.blockTime}/>);
      }
    },
    {
      title: t('Block hash'),
      dataIndex: 'hash',
      key: 'hash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/blockDetails/${record.hash}`} content={record.hash}/>);
      }
    },
    {
      title: t('Extrinsics'),
      dataIndex: 'extrinsics',
      key: 'extrinsics',
      render: (text: any, record: any) => {
        return (
          <div>{record.extrinsics.length}</div>
        );
      }
    },
    {
      title: t('Events'),
      dataIndex: 'eventCount',
      key: 'eventCount',
    }, {
      title: t('Validator'),
      dataIndex: 'Validator',
      key: 'Validator',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/addressDetails/${record.author}`} content={record.referralId}/>);
      }
    }
  ];

  return (
    <ChainxTable Columns={chainColumns} urlControl={'/blocks?'} result={'items'} keyNum={1}/>
  );
}