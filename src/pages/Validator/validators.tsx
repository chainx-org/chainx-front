import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { LinkX, ShorterLink } from '../../components/LinkX';


export default function Validator() {
  const {t} = useTranslation();
  const [validatorData, setValidatorData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [validatorTotal, setValidatorTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getValidatorData = async () => {
    const res: any = await get(`/validators?page=${page - 1}&page_size=${pageSize}`, ``);
    setValidatorTotal(res.total);
    setValidatorData(res.newitems);
    setLoading(false);
  };
  const chainColumns = [
    {
      title: t('Range'),
      dataIndex: 'Range',
      key: 'Range',
    },
    {
      title: t('NikeName'),
      dataIndex: 'NikeName',
      key: 'NikeName',
      render: (text: any, record: any) => {
        return (
          <>
            {record.referralId}
            {record.isTrust === true ? '信托' : ''}
          </>);
      }
    },
    {
      title: t('Address'),
      dataIndex: 'Address',
      key: 'Address',
      render: (text: any, record: any) => {
        return (
        <LinkX linkUrl={`/addressDetails/${record.account}`} content={record.account}/>);
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
          <LinkX linkUrl={'/validator'} content={record.lastTotalVoteWeightUpdate}/>
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
    getValidatorData().then()
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: validatorTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (validatorTotal: number) => `${t('total')} ${validatorTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={validatorData} pagination={pagination} loading={loading}/>
    </div>
  );
}
