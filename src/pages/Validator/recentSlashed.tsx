import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';


export default function RecentSlashed() {
  const {t} = useTranslation();
  const [recentSlashedData, setRecentSlashedData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [recentSlashedTotal, setRecentSlashedTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getRecentSlashedData = async () => {
    const res: any = await get(`/validators/recent_slashed?page=${page - 1}&page_size=${pageSize}`, ``);
    setRecentSlashedTotal(res.total);
    setRecentSlashedData(res.items);
    setLoading(false);
  };
  const chainColumns = [
    {
      title: t('Block'),
      dataIndex: 'Block',
      key: 'Block',
      render: (text: any, record: any) => {
        return (
          <>
            <LinkX linkUrl={'/recentSlashed'} content={record.indexer.blockHeight}/>
          </>);
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
    }, {
      title: t('NikeName'),
      dataIndex: 'NikeName',
      key: 'NikeName',
      render: (text: any, record: any) => {
        return (
          <>
            <LinkX linkUrl={'/missed'} content={record.referralId}/>
            {record.isValidating === true ? '信托' : ''}
          </>);
      }
    }, {
      title: t('Address'),
      dataIndex: 'Address',
      key: 'Address',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/missed'} content={record.data[0]}/>);
      }
    }, {
      title: t('Slash Amount'),
      dataIndex: 'Slash Amount',
      key: 'Slash Amount',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/missed'} content={record.data[1]}/>);
      },
      sorter: (a: any, b: any) => {
        return a.data[1] - b.data[1]
      }
    }

  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    getRecentSlashedData().then();
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: recentSlashedTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (recentSlashedTotal: number) => `${t('total')} ${recentSlashedTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={recentSlashedData} pagination={pagination} loading={loading}/>
    </div>
  );
}
