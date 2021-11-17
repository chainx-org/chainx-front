import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { get } from '../../hooks/useApi';
import TableX from '../../components/Table';
import TimeStatus from '../../components/TimeStatus';
import { LinkX, Normal } from '../../components/LinkX';
import { accuracy } from '../../helper/hooks';



export default function Missed() {
  const {t} = useTranslation();
  const [eventData, setEventData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [eventTotal, setEventTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const address = window.location.hash.slice(14, window.location.hash.length);
  const getEventData = async () => {
    try {
      let res: any = await get(`/unitmissed/${address}?page=${page - 1}&page_size=${pageSize}`, ``);
      setEventTotal(res.total);
      setEventData(res.items);
      setLoading(false);
    } catch (e) {
      setEventData([]);
      setLoading(false);
    }
  };

  const chainColumns = [
    {
      title: t('Session'),
      dataIndex: 'number',
      key: 'number',
      render: (text: any, record: any) => {
        return (
          <Normal state={record.session}/>);
      }
    },
    {
      title: t('Height'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.indexer.blockHeight}`} state={record}
                 content={(record.indexer.blockHeight)}/>
        );
      }
    },
    {
      title: t('Block Time'),
      dataIndex: 'blockTime',
      key: 'blockTime',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>);
      }
    },
    {
      title: t('Slash Amount'),
      dataIndex: 'hash',
      key: 'hash',
      render: (text: any, record: any) => {
        return (
          <Normal state={accuracy(record.data[1])}/>);
      }
    }
  ];


  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    getEventData().then().catch(
      (res) => {
        setLoading(false);
      }
    );

  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: eventTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage:true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (eventTotal: number) => `${t('total')} ${eventTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={eventData} pagination={pagination} loading={loading}/>
    </div>
  );
}
