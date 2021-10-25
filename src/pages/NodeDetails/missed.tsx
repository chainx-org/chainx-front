import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { get } from '../../hooks/useApi';
import TableX from '../../components/Table';


export default function Missed() {
  const {t} = useTranslation();
  const [eventData, setEventData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [eventTotal, setEventTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const address = window.location.pathname.slice(13, window.location.pathname.length);
  const getEventData = async () => {
    let res: any = await get(`/unitmissed/${address}?page=${page - 1}&page_size=${pageSize}`, ``);
    setEventTotal(res.total);
    setEventData(res.items);
  };

  const chainColumns = [
    {
      title: t('Session'),
      dataIndex: 'number',
      key: 'number',
      // render: (text: any, record: any) => {
      //   return (
      //     <LinkX linkUrl={`/blockDetails/${record.header.number}`} state={record} content={record.header.number}/>
      //   );
      // }
    },
    {
      title: t('Height'),
      dataIndex: 'address',
      key: 'address',
      // render: (text: any, record: any) => {
      //   return (
      //     <img src={waitIcon} alt=""/>
      //   );
      // }
    },
    {
      title: t('Block Time'),
      dataIndex: 'blockTime',
      key: 'blockTime',
      // render: (text: any, record: any) => {
      //   return (
      //     <TimeStatus content={record.blockTime}/>);
      // }
    },
    {
      title: t('Slash Amount'),
      dataIndex: 'hash',
      key: 'hash',
      // render: (text: any, record: any) => {
      //   return (
      //     <ShorterLink linkUrl={`/blockDetails/${record.hash}`} state={record} content={record.hash}/>);
      // }
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
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (eventTotal: number) => `${t('total')} ${eventTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={eventData} pagination={pagination} loading={loading}/>
    </div>
  );
}
