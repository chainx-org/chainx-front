import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { LinkX, Normal, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import { get } from '../../hooks/useApi';
import TableX from '../../components/Table';


export default function SearchEvent(props: any) {
  const {t} = useTranslation();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [listValue, setListValue] = useState<any>('');
  const [total,setTotal] = useState(0)
  const [loading, setLoading] = useState(false);
  const [isCorrectValue, setIsCorrectValue] = useState('');
  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: total,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (eventTotal: number) => `${t('total')} ${eventTotal} ${t('items')}`
  };
  const Columns = [
    {
      title: t('Height'),
      dataIndex: 'number',
      key: 'number',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.indexer.blockHeight}`} state={record} content={record.indexer.blockHeight}/>
        );
      }
    },
    {
      title: t('Block Time'),
      dataIndex: 'blockTime',
      key: 'blockTime',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>);
      }
    },
    {
      title: t('Extrinsic Hash'),
      dataIndex: 'hash',
      key: 'hash',
      width: 150,
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/blockDetails/${record.indexer.blockHash}`} state={record} content={record.indexer.blockHash}/>);
      }
    },
    {
      title: t('Module'),
      dataIndex: 'extrinsic',
      key: 'extrinsic',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <Normal state={record?.section}/>
        );
      }
    }, {
      title: t('Result'),
      dataIndex: 'extrinsic',
      key: 'extrinsic',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <Normal state={record?.method}/>
        );
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  const getData = async () => {
    try {
      let res: any = await get(`/search/${props?.value}?page=${page}&page_size=${pageSize}`, ``);
      setListValue(res.data);
      setTotal(res.total)
      setLoading(false);
      props.setLoading(false)
    } catch (e) {
      setIsCorrectValue('No Data');
      setLoading(false);
      props.setLoading(false)
    }
  };

  useEffect(() => {
    if (props.value) {
      setLoading(true)
      getData();
    }else{

    }
  }, [props.value]);


  return (
    <div className="overflow-scroll">
      <TableX columns={Columns} dataList={listValue} pagination={pagination} loading={loading}/>
    </div>);
}