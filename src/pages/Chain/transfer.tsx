import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import addressIcon from '../../assets/address_icon.svg';
import { LinkX } from '../../components/LinkX';

export default function Transfer() {
  const {t} = useTranslation();
  const [extrinsicData, setExtrinsicData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [extrinsicTotal, setExtrinsicTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getExtrinsicData = async () => {
    const res: any = await get(`/extrinsics?page=${page - 1}&page_size=${pageSize}`, ``);
    setExtrinsicTotal(res.total);
    setExtrinsicData(res.items);
    setLoading(false)
  };

  const extrinsicColumns = [
    {
      title: t('extrinsic'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <div className="flex flex-row items-center">
            <img src={addressIcon} alt="" style={{marginRight: '0.25rem'}}/>
            <LinkX linkUrl={'/block'} content={record.address}/>
          </div>
        );
      }
    },
    {
      title: t('Frozen amount')+'(PCX)',
      dataIndex: 'FrozenAmount',
      key: 'FrozenAmount',
      render: (text: any, record: any) => {
        return (
          <div>{record.data.feeFrozen}</div>
        );
      },
      sorter: (a: any, b: any) => a.data.feeFrozen - b.data.feeFrozen
    },
    {
      title: t('Total balance')+'(PCX)',
      dataIndex: 'TotalBalance',
      key: 'TotalBalance',
      render: (text: any, record: any) => {
        return (
          <div>{record.data.free}</div>
        );
      },
      sorter: (a: any, b: any) => {
        return a.data.free - b.data.free
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true)
  }

  useEffect(() => {
    getExtrinsicData().then();
  }, [page, pageSize]);
  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: extrinsicTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (extrinsicTotal: number) => `${t('total')} ${extrinsicTotal} ${t('items')}`
  };
  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={extrinsicColumns} dataList={extrinsicData} pagination={pagination} loading={loading}/>
    </div>
  );
}
