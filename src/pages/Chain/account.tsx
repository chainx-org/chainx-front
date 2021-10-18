import { useTranslation } from 'react-i18next';
import React, { useState,useEffect } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import addressIcon from '../../assets/address_icon.svg';
import { LinkX } from '../../components/LinkX';

export default function Account() {
  const {t} = useTranslation();
  const [AccountData, setAccountData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [AccountTotal, setAccountTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getAccountData = async () => {
    const res: any = await get(`/accounts?page=${page - 1}&page_size=${pageSize}`, ``);
    setAccountTotal(res.total);
    setAccountData(res.items);
    setLoading(false)
  };

  const AccountColumns = [
    {
      title: t('Account'),
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
      title: t('Frozen amount'),
      dataIndex: 'FrozenAmount',
      key: 'FrozenAmount',
      render: (text: any, record: any) => {
        return (
          <div>{record.data.feeFrozen}</div>
        );
      },
      // defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.data.feeFrozen - b.data.feeFrozen
    },
    {
      title: t('Total balance'),
      dataIndex: 'TotalBalance',
      key: 'TotalBalance',
      render: (text: any, record: any) => {
        return (
          <div>{record.data.free}</div>
        );
      },
      // defaultSortOrder: 'descend',
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
    getAccountData().then();
  }, [page, pageSize]);
  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: AccountTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (AccountTotal: number) => `${t('total')} ${AccountTotal} ${t('items')}`
  };
  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={AccountColumns} dataList={AccountData} pagination={pagination}  loading={loading}/>
    </div>
  );
}
