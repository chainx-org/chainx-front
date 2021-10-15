import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { Pagination } from 'antd';


export default function Account() {
  const {t} = useTranslation();
  const [AccountData, setAccountData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [AccountTotal, setAccountTotal] = useState(0);
  const getAccountData = async () => {
    const res: any = await get(`/accounts?page=${page - 1}&page_size=${pageSize}`, ``);
    setAccountTotal(res.total);
    setAccountData(res.items);
    // debugger
  };

  const AccountColumns = [
    {
      title: t('Account'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <div>{record.address}</div>
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
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.FrozenAmount - b.FrozenAmount
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
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => a.TotalBalance - b.TotalBalance
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
  }

  useEffect(() => {
    getAccountData().then(() => {
      console.log('getAccountData success!');

    });
  }, [page, pageSize]);
  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={AccountColumns} dataList={AccountData}
              Children={
                <Pagination
                  onChange={(page, pageSize) => onChange(page, pageSize)}
                  pageSize={pageSize}
                  defaultCurrent={page}
                  total={AccountTotal}
                  showSizeChanger={true}
                  showQuickJumper={true}
                  showTotal={blockTotal => `${t('total')} ${blockTotal} ${t('items')}`}
                />}/>
    </div>
  );
}
