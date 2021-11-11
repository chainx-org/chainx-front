import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { LinkX, Normal, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import ChainTable from '../../components/Table/table';
import _encodeAddress from '../../helper/encodeAddress';
import { get } from '../../hooks/useApi';

export default function SearchExc(props:any) {
  const {t} = useTranslation();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [listValue, setListValue] = useState<any>('');
  const [loading, setLoading] = useState(false);
  const [isCorrectValue, setIsCorrectValue] = useState('');

  useEffect(()=>{
    if(props.value){
      getData()
    }
  },[props.value])
  const getData = async () => {
    try {
      let res: any = await get(`/searchExtrinsic/${props?.value}?page=${page}&page_size=${pageSize}`, ``);
      setListValue(res);
      setLoading(false);
    } catch (e) {
      setIsCorrectValue('No Data');
      setLoading(false);
    }
  };

  const chainColumns = [
    {
      title: t('Height'),
      dataIndex: 'number',
      key: 'number',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.header.number}`} state={record} content={record.header.number}/>
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
          <TimeStatus content={record.blockTime}/>);
      }
    },
    {
      title: t('Hash'),
      dataIndex: 'hash',
      key: 'hash',
      width: 150,
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/blockDetails/${record.hash}`} state={record} content={record.hash}/>);
      }
    },
    {
      title: t('Module'),
      dataIndex: 'extrinsic',
      key: 'extrinsic',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <Normal state={record?.extrinsics.length}/>
        );
      }
    }
  ];


  return (
    <ChainTable Columns={chainColumns} urlControl={'/blocks?'} result={'items'} keyNum={1}/>
  );
}
