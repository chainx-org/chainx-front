import { useTranslation } from 'react-i18next';
import React, { useState ,useEffect} from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';


export default function Withdraw() {
  const {t} = useTranslation();
  const [blockData, setBlockData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [blockTotal, setBlockTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getBlockData = async () => {
    const res: any = await get(`/crossblocks/bitcoin/withdrawals?page=${page - 1}&page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Withdrawal ID '),
      dataIndex: 'Withdrawal ID ',
      key: 'Withdrawal ID ',
      render: (text: any, record: any) => {
        return (
          <div>{record.data[0]}</div>
        );
      }
    },
    {
      title: t('ChainX Transaction Hash'),
      dataIndex: 'ChainX Transaction Hash',
      key: 'ChainX Transaction Hash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicsDetails/${record.extrinsicHash}`}
                       content={record.extrinsicHash}/>
        );
      }
    },
    {
      title: t('ChainX Withdraw '),
      dataIndex: 'ChainX Withdraw ',
      key: 'ChainX Withdraw ',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.data[1].applicant}`}
                       content={record.data[1].applicant}/>
        );
      }
    },
    {
      title: t('AddressWithdraw'),
      dataIndex: 'AddressWithdraw',
      key: 'AddressWithdraw',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.data[1].addr}`}
                       content={record.data[1].addr}/>
        );
      }
    },
    {
      title: t('AddressWithdraw Created Time'),
      dataIndex: 'Time',
      key: 'Time',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>
        );
      }
    },
    {
      title: t('Asset'),
      dataIndex: 'Asset',
      key: 'Asset',
      render: (text: any, record: any) => {
        return (
          <div>{'BTC'}</div>
        );
      }
    },
    {
      title: t('Balance'),
      dataIndex: 'Balance',
      key: 'Balance',
      render: (text: any, record: any) => {
        return (
          <div>{record.data[1].balance / 100000000}</div>);
      }
    },
    {
      title: t('State'),
      dataIndex: 'State',
      key: 'State',
      render: (text: any, record: any) => {
        return (
          <div>{record.withdrawalState}</div>);
      }
    }
];

function onChange(page: number, pageSize: any)
  {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

useEffect(() =>
  {
    getBlockData();
  }
, [page, pageSize]);

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
