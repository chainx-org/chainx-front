import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import waitIcon from '../../assets/icon_waiting.svg';


export default function Block() {
  const {t} = useTranslation();
  const [blockData, setBlockData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [blockTotal, setBlockTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getBlockData = async () => {
    const res: any = await get(`/blocks?page=${page - 1}&page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Block'),
      dataIndex: 'number',
      key: 'number',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.header.number}`} content={record.header.number}/>
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
          <ShorterLink linkUrl={'/block'} content={record.hash}/>);
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
      dataIndex: 'address1',
      key: 'address1',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/block'} content={record.referralId}/>);
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    getBlockData();
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: blockTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (blockTotal: number) => `${t('total')} ${blockTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={blockData} pagination={pagination} loading={loading}/>
    </div>
  );
}
