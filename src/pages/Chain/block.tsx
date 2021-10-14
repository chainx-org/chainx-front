import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { get } from '../../hooks/api';



export default function Block() {
  const {t} = useTranslation();
  const [blockData,setBlockData] = useState([])
  const [page,setPage] = useState(0)
  const [pageSize,setPageSize] = useState(10)
  const [blockTotal,setBlockTotal] = useState(0)
  const getBlockData = async () => {
    const res: any = await get(`/blocks?page=${page}page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
    debugger
  };
  useEffect(()=>{
    getBlockData().then(()=>{
      console.log('getBlockData success!')

    })
  },[page,pageSize])
  const chainColumns = [
    {
      title: t('Block Height'),
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: t('Status'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('Block Time'),
      dataIndex: 'blockTime',
      key: 'blockTime',
    },
    {
      title: t('Block Hash'),
      dataIndex: 'hash',
      key: 'hash',
      // render: <div>222</div>,
    },
    {
      title: t('Extrinsics'),
      dataIndex: 'extrinsics',
      key: 'extrinsics',
      // render: <div>333</div>,
    },
    {
      title: t('Event'),
      dataIndex: 'eventCount',
      key: 'eventCount',
      // render: <div>333</div>,
    }, {
      title: t('Validator'),
      dataIndex: 'address1',
      key: 'address1',
      // render: <div>333</div>,
    }
  ];

  const data = [
    {
      // key: '1',
      number: '111',
      address: 32,
      blockTime: 'New York No. 1 Lake Park',
      hash: '111111111111111',
      extrinsics: '22222222',
      eventCount: '12',
      address1: '45454'
    },
    {
      // key: '2',
      number: '111',
      address: 32,
      blockTime: 'New York No. 1 Lake Park',
      hash: '111111111111111',
      extrinsics: '22222222',
      eventCount: '12',
      address1: '45454'

    },
    {
      // key: '3',
      number: '111',
      address: 32,
      blockTime: 'New York No. 1 Lake Park',
      hash: '111111111111111',
      extrinsics: '22222222',
      eventCount: '12',
      address1: '45454'

    },
  ];

  const pagination = {
    page: page,
    pageSize: pageSize,
    total: blockTotal,
    showSizeChanger: true,
    showQuickJumper: true,
  };
  return (
    <div className="px-8 overflow-scroll">
      <Table columns={chainColumns} dataList={blockData} pagination={pagination}/>
    </div>
  );
}
