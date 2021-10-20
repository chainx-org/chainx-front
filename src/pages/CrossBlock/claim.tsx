import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { ShorterLink } from '../../components/LinkX';
import swapEndian from '../../helper/swapEndian';


export default function Claim() {
  const {t} = useTranslation();
  const [blockData, setBlockData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [blockTotal, setBlockTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getBlockData = async () => {
    const res: any = await get(`/crossblocks/bitcoin/unclaim?page=${page - 1}&page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Bitcoin Transaction Hash'),
      dataIndex: 'Bitcoin Transaction Hash',
      key: 'Bitcoin Transaction Hash',
      render: (text: any, record: any) => {
        return (
          <a style={{display:'inline-block',color:'#3C88C6'}} href={`https://live.blockcypher.com/btc/tx/${swapEndian(record.data[0])}/`} target="_Blank">{(swapEndian(record.data[0]))}</a>
        );
      }
    },
    {
      title: t('Bitcoin Source Address'),
      dataIndex: 'Bitcoin Source Address',
      key: 'Bitcoin Source Address',
      render: (text: any, record: any) => {
        return (
          <a style={{display: 'inline-block', color: '#3C88C6'}}
             href={`https://live.blockcypher.com/btc/address/${record.data[1]}/`}
             target="_Blank">{'0x'.concat(record.data[1])}</a>
        );
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
