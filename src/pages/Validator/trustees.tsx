import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/useApi';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TrustTag from '../../components/TrustTag';


export default function Trustees() {
  const {t} = useTranslation();
  const [trusteesData, setTrusteesData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [trusteesTotal, setTrusteesTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getTrusteesData = async () => {
    const res: any = await get(`/trustees?page=${page - 1}&page_size=${pageSize}`, ``);
    setTrusteesTotal(res.total);
    setTrusteesData(res.items);
    setLoading(false);
  };
  const chainColumns = [
    {
      title: t('NikeName'),
      dataIndex: 'NikeName',
      key: 'NikeName',
      render: (text: any, record: any) => {
        return (
          <div className='flex flex-row'>
            <LinkX linkUrl={`/addressDetails/${record.account}`} content={record.referralId}/>
            {record.isValidating === true ? <TrustTag/> : ''}
          </div>);
      }
    },
    {
      title: t('Address'),
      dataIndex: 'Address',
      key: 'Address',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.account}`} content={record.account}/>);
      }
    },
    {
      title: t('Self Bonded'),
      dataIndex: 'Self Bonded',
      key: 'Self Bonded',
      render: (text: any, record: any) => {
        return (
          <div>{record.selfBonded}</div>
        );
      },
      sorter: (a: any, b: any) => {
        return a.selfBonded - b.selfBonded
      }
    },
    {
      title: t('Total Nominations(PCX)'),
      dataIndex: 'Nominations',
      key: 'Nominations',
      render: (text: any, record: any) => {
        return (
          <div>{record.totalNomination}</div>);
      },
      sorter: (a: any, b: any) => {
        return a.totalNomination - b.totalNomination
      }
    },
    {
      title: t('Reward Pot Balance(PCX)'),
      dataIndex: 'Balance',
      key: 'Balance',
      render: (text: any, record: any) => {
        return (
          <div>{record.rewardPotBalance}</div>);
      },
      sorter: (a: any, b: any) => {
        return a.rewardPotBalance - b.rewardPotBalance
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    getTrusteesData().then()
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: trusteesTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (trusteesTotal: number) => `${t('total')} ${trusteesTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={trusteesData} pagination={pagination} loading={loading}/>
    </div>
  );
}
