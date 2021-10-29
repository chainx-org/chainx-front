import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { LinkX, Normal } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import { get } from '../../hooks/useApi';
import TableX from '../../components/Table';


function VotedList() {
  const {t} = useTranslation();
  const [eventData, setEventData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [eventTotal, setEventTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const address = window.location.pathname.slice(13, window.location.pathname.length);
  const getEventData = async () => {
    let res: any = await get(`/validatorvotes/${address}?page=${page - 1}&page_size=${pageSize}`, ``);
    setEventTotal(res.total);
    setEventData(res.items);
    setLoading(false);
  };
  const chainColumns = [
    {
      title: t('Nominator'),
      dataIndex: 'number',
      key: 'number',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record[0]}`} state={record[0]} content={record[0]}/>
        );
      }
    },
    {
      title: t('Vote Count'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <Normal state={(record[1].data[1]) ? (record[1].data[1]) : '-'}/>)
      }
    },
    {
      title: t('Vote Count'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <Normal state={(record[1].phase.value) ? (record[1].phase.value) : '-'}/>
        );
      }
    },
    {
      title: t('Vote Time'),
      dataIndex: 'blockTime',
      key: 'blockTime',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record[1].indexer.blockTime}/>);
      }
    },
    {
      title: t('Last Vote Weight Update'),
      dataIndex: 'hash',
      key: 'hash',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record[1].indexer.blockHeight}`} state={record[1]} content={record[1].indexer.blockHeight}/>);
      }
    },
    {
      title: t('Bonded(PCX)'),
      dataIndex: 'extrinsic',
      key: 'extrinsic',
      render: (text: any, record: any) => {
        return (
          <Normal state={(record[1].data[3]/10000000) ? (record[1].data[3]/10000000) : '-'}/>
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
  }, []);

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
export default React.memo(VotedList);

