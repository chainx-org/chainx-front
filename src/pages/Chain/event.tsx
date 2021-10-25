import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/useApi';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import Operation from '../../components/Operation';

interface EventProps {
  block?: number | string,
  extrinsic?: string
}

export default function Event({block, extrinsic}: EventProps) {
  const {t} = useTranslation();
  const [eventData, setEventData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [eventTotal, setEventTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getEventData = async () => {
    let res: any;
    if (block) {
      res = await get(`/blockEvents?block=${block}&page=${page - 1}&page_size=${pageSize}`, ``);
    } else {
      if (extrinsic) {
        res = await get(`/extrinsicEvents?extrinsic_hash=${extrinsic}&page=${page - 1}&page_size=${pageSize}`, ``);
      } else {
        res = await get(`/events?page=${page - 1}&page_size=${pageSize}`, ``);
      }
    }
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
          <LinkX linkUrl={`/extrinsicDetails/${record.extrinsicHash}`} state={record}
                 content={record.indexer.blockHeight + '-' + record.sort}/>
        );
      }
    },
    {
      title: t('Block'),
      dataIndex: 'Block',
      key: 'Block',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.indexer.blockHeight}`}  state={record} content={record.indexer.blockHeight}/>
        );
      }
    },
    {
      title: t('Extrinsic Hash'),
      dataIndex: 'Extrinsic Hash',
      key: 'Extrinsic Hash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicDetails/${record.extrinsicHash}`} state={record} content={record.extrinsicHash}/>
        );
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
      align:'right',
      width:'15rem',
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
