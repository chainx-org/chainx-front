import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX, ShorterLink } from '../../components/LinkX';


export default function ValidatorSlashed() {
  const {t} = useTranslation();
  const [missedData, setMissedData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [missedTotal, setMissedTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getMissedData = async () => {
    const res: any = await get(`/missed?page=${page - 1}&page_size=${pageSize}`, ``);
    setMissedTotal(res.total);
    setMissedData(res.items);
    setLoading(false);
  };
  const chainColumns = [
    {
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
    },
    {
      title: t('Address'),
      dataIndex: 'Address',
      key: 'Address',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/missed'} content={record.account}/>);
      }
    },
    {
      title: t('Slash Count'),
      dataIndex: 'Count',
      key: 'Count',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/missed'} content={record.missed}/>);
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    getMissedData().then()
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: missedTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (missedTotal: number) => `${t('total')} ${missedTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={missedData} pagination={pagination} loading={loading}/>
    </div>
  );
}
