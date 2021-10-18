import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import successIcon from '../../assets/icon_success.svg';
import failIcon from '../../assets/icon_failure.svg';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';

export default function Extrinsic() {
  const {t} = useTranslation();
  const [extrinsicData, setExtrinsicData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [extrinsicTotal, setExtrinsicTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getExtrinsicData = async () => {
    const res: any = await get(`/extrinsics?page=${page - 1}&page_size=${pageSize}`, ``);
    setExtrinsicTotal(res.total);
    setExtrinsicData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Extrinsic ID'),
      dataIndex: 'extrinsicId',
      key: 'extrinsicId',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/block'} content={(record.indexer.blockHeight)+'-'+(record.indexer.index)}/>
        );
      }
    },
    {
      title: t('Block'),
      dataIndex: 'block',
      key: 'block',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={'/block'} content={(record.indexer.blockHeight)}/>
        );
      }
    },
    {
      title: t('Extrinsic Hash'),
      dataIndex: 'extrinsicHash',
      key: 'extrinsicHash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={'/block'} content={record.indexer.blockHash}/>
        );
      }
    },
    {
      title: t('Time'),
      dataIndex: 'time',
      key: 'time',
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>);
      }
    },
    {
      title: t('Result'),
      dataIndex: 'result',
      key: 'result',
      render: (text: any, record: any) => {
        return (
          <div>{record.isSuccess === true ? <img src={successIcon} alt=""/> : <img src={failIcon} alt=""/>}</div>
        );
      }
    },
    {
      title: t('Operation'),
      dataIndex: 'Operation',
      key: 'Operation',
      render: (text: any, record: any) => {
        return (
          <div>{record.section+'-'+record.name}</div>
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
    getExtrinsicData().then(() => {

    });
  }, [page, pageSize]);
  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: extrinsicTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (extrinsicTotal: number) => `${t('total')} ${extrinsicTotal} ${t('items')}`
  };
  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={extrinsicData} pagination={pagination} loading={loading}/>
    </div>
  );
}
