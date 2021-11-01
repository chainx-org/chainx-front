import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import addressIcon from '../../assets/address_icon.svg';
import { LinkX, Normal } from '../../components/LinkX';
import ChainxTable from '../../components/Table/table';
import { accuracy } from '../../helper/hooks';
import TableX from '../../components/Table';
import ExpandIcon from '../../components/ExpandIcon';
import JsonApi from '../../components/Jsonformat';
import { get } from '../../hooks/useApi';

export default function Account() {
  const {t} = useTranslation();
  const AccountColumns = [
    {
      title: t('Account'),
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => {
        return (
          <div className="flex flex-row items-center">
            <div style={{marginRight: '0.25rem', width: '2rem', height: '2rem', display: 'inline-block'}}><img
              src={addressIcon} alt=""/>
            </div>
            <LinkX linkUrl={`/addressDetails/${record.address}`} content={record.address}/>
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
        <Normal state={accuracy(record.data.feeFrozen)}/>

      );
      },
      sorter: (a: any, b: any) => a.data.feeFrozen - b.data.feeFrozen
    },
    {
      title: t('Total balance'),
      dataIndex: 'TotalBalance',
      key: 'TotalBalance',
      render: (text: any, record: any) => {
        return (
        <Normal state={(record?.data?.free)?(accuracy(record.data.free)):'-'}/>
        );
      },
      sorter: (a: any, b: any) => {
        return a.data.free - b.data.free
      }
    }
  ];
  const [eventData, setEventData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [eventTotal, setEventTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getEventData = async () => {
    let res: any = await get(`/accounts?page=${page - 1}&page_size=${pageSize}`, ``);
    setEventTotal(res.total);
    setEventData(res.items);
    setLoading(false);
  };
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
    hideOnSinglePage:true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (eventTotal: number) => `${t('total')} ${eventTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={AccountColumns} dataList={eventData} pagination={pagination} loading={loading}/>
    </div>
  );
}
