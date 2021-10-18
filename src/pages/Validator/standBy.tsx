import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX, ShorterLink } from '../../components/LinkX';


export default function StandBy() {
  const {t} = useTranslation();
  const [unsettledData, setUnsettledData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [unsettledTotal, setUnsettledTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getUnsettledData = async () => {
    const res: any = await get(`/unsettled?page=${page - 1}&page_size=${pageSize}`, ``);
    setUnsettledTotal(res.total);
    setUnsettledData(res.items);
    setLoading(false);
  };
  const chainColumns = [
    {
      title: t('NikeName'),
      dataIndex: 'NikeName',
      key: 'NikeName',
      render: (text: any, record: any) => {
        return (
          <>
            <LinkX linkUrl={'/unsettled'} content={record.referralId}/>
            {record.isValidating === true ? '信托' : ''}
          </>);
      }
    },
    {
      title: t('Address'),
      dataIndex: 'Address',
      key: 'Address',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/unsettled'} content={record.account}/>);
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
    },
    {
      title: t('Latest Mining'),
      dataIndex: 'Mining',
      key: 'Mining',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/unsettled'} content={record.lastTotalVoteWeightUpdate}/>
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
    getUnsettledData().then()
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: unsettledTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (unsettledTotal: number) => `${t('total')} ${unsettledTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={unsettledData} pagination={pagination} loading={loading}/>
    </div>
  );
}
