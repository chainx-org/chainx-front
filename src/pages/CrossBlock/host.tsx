import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';


export default function Host() {
  const {t} = useTranslation();
  const [blockData, setBlockData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [blockTotal, setBlockTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getBlockData = async () => {
    const res: any = await get(`/crossblocks/bitcoin/trustees?page=${page - 1}&page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Multi Signer Threshold'),
      dataIndex: 'Threshold',
      key: 'Threshold',
      render: (text: any, record: any) => {
        return (
          <div>
            {record.threshold}
          </div>
        );
      }
    },
    {
      title: t('Trustee'),
      dataIndex: 'Trustee',
      key: 'Trustee',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicsDetails/${record.address}`}
                       content={record.address}/>);
      }
    },
    {
      title: t('Hot Public Key'),
      dataIndex: 'hotKey',
      key: 'hotKey',
      render: (text: any, record: any) => {
        return (
         <div>{record.hotPubkey}</div>);
      }
    },
    {
      title: t('Cold Public Key'),
      dataIndex: 'coldKey',
      key: 'coldKey',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.coldPubkey}/>);
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
