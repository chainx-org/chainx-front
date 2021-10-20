import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import swapEndian from '../../helper/swapEndian';


export default function BitcoinBlock() {
  const {t} = useTranslation();
  const [blockData, setBlockData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [blockTotal, setBlockTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getBlockData = async () => {
    const res: any = await get(`/crossblocks/bitcoin/blocks?page=${page - 1}&page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Bitcoin Height'),
      dataIndex: 'bitcoinHeight',
      key: 'bitcoinHeight',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`https://live.blockcypher.com/btc/block/${record.btcHeight}/`}
                 content={record.btcHeight}/>
        );
      }
    },
    {
      title: t('Bitcoin Block Hash'),
      dataIndex: 'bitcoinBlockHash',
      key: 'bitcoinBlockHash',
      render: (text: any, record: any) => {
        return (
        <a style={{display: 'inline-block', color: '#3C88C6'}}
           href={`https://live.blockcypher.com/btc/block/${swapEndian(record.btcHash.slice(2))}/`}
           target="_Blank">{swapEndian(record.btcHash)}</a>
        );
      }
    },
    {
      title: t('ChainX Relay TX Hash'),
      dataIndex: 'chainXRelayTXHash',
      key: 'chainXRelayTXHash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicsDetails/${record.chainxExtrinsicHash}`}
                       content={record.chainxExtrinsicHash}/>);
      }
    },
    {
      title: t('ChainX Relayer'),
      dataIndex: 'chainXRelayer',
      key: 'chainXRelayer',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.signer}`} content={record.signer}/>);
      }
    },
    {
      title: t('ChainX Relay Time'),
      dataIndex: 'chainXRelayTime',
      key: 'chainXRelayTime',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.chainxTime}/>);
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
