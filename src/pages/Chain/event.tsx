import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import waitIcon from '../../assets/icon_waiting.svg';
import Operation from '../../components/Operation';


export default function Event() {
  const {t} = useTranslation();
  const [eventData, setEventData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [eventTotal, setEventTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getEventData = async () => {
    const res: any = await get(`/events?page=${page - 1}&page_size=${pageSize}`, ``);
    setEventTotal(res.total);
    setEventData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Extrinsic ID'),
      dataIndex: 'Extrinsic ID',
      key: 'Extrinsic ID',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/event'} content={record.indexer.blockHeight+'-'+record.sort}/>
        );
      }
    },
    {
      title: t('Block'),
      dataIndex: 'Block',
      key: 'Block',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/event'} content={record.indexer.blockHeight}/>
        );
      }
    },
    {
      title: t('Extrinsic Hash'),
      dataIndex: 'Extrinsic Hash',
      key: 'Extrinsic Hash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={'/event'} content={record.indexer.blockHash}/>);
      }
    },
    {
      title: t('Time'),
      dataIndex: 'Time',
      key: 'Time',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>);
      }
    },
    {
      title: t('Operation'),
      dataIndex: 'Operation',
      key: 'Operation',
      render: (text: any, record: any) => {
        return (
          <Operation content={record.section+'-'+record.method}/>
        );
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    getEventData();
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: eventTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (eventTotal: number) => `${t('total')} ${eventTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={eventData} pagination={pagination} loading={loading}/>
    </div>
  );
}
