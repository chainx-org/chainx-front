import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import swapEndian from '../../helper/swapEndian';


export default function Deposit() {
  const {t} = useTranslation();
  const [blockData, setBlockData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [blockTotal, setBlockTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getBlockData = async () => {
    const res: any = await get(`/crossblocks/bitcoin/deposits?page=${page - 1}&page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Bitcoin Transaction Hash'),
      dataIndex: 'bitcoinTransactionHash',
      key: 'bitcoinTransactionHash',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`https://live.blockcypher.com/btc/tx/${swapEndian(record.data[0])}`}
                 content={record.data[0]}/>
        );
      }
    },
    {
      title: t('ChainX Transaction Hash'),
      dataIndex: 'chainXTransactionHash',
      key: 'chainXTransactionHash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicsDetails/${record.extrinsicHash}`}
                       content={record.extrinsicHash}/>);
      }
    },
    {
      title: t('ChainX Deposit Address'),
      dataIndex: 'chainXDepositAddress',
      key: 'chainXDepositAddress',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.data[1]}`}
                       content={record.data[1]}/>);
      }
    },
    {
      title: t('Deposit Time'),
      dataIndex: 'depositTime',
      key: 'depositTime',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>);
      }
    },
    {
      title: t('Asset'),
      dataIndex: 'Asset',
      key: 'Asset',
      render: (text: any, record: any) => {
        return (
          <div>{'BTC'}</div>);
      }
    },{
      title: t('Balance'),
      dataIndex: 'Balance',
      key: 'Balance',
      render: (text: any, record: any) => {
        return (
          <div>{record.data[2]/100000000}</div>);
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
