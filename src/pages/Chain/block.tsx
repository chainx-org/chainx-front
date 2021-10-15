import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/api';
import { Pagination } from 'antd';


export default function Block() {
  const {t} = useTranslation();
  const [blockData,setBlockData] = useState([])
  const [page,setPage] = useState(1)
  const [pageSize,setPageSize] = useState(10)
  const [blockTotal,setBlockTotal] = useState(0)
  const getBlockData = async () => {
    const res: any = await get(`/blocks?page=${page-1}&page_size=${pageSize}`, ``);
    setBlockTotal(res.total);
    setBlockData(res.items);
  };

  const chainColumns = [
    {
      title: t('Block'),
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: t('Status'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('Time'),
      dataIndex: 'blockTime',
      key: 'blockTime',
    },
    {
      title: t('Block hash'),
      dataIndex: 'hash',
      key: 'hash',
    },
    {
      title: t('Extrinsics'),
      dataIndex: 'extrinsics',
      key: 'extrinsics',
    },
    {
      title: t('Events'),
      dataIndex: 'eventCount',
      key: 'eventCount',
    }, {
      title: t('Validator'),
      dataIndex: 'address1',
      key: 'address1',
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
  }

  useEffect(() => {
    getBlockData().then(() => {
      // console.log('getBlockData success!');

    });
  }, [page, pageSize]);
  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={blockData}
             Children={
                 <Pagination
                   onChange={(page, pageSize) => onChange(page, pageSize)}
                   pageSize={pageSize}
                   defaultCurrent={page}
                   total={blockTotal}
                   showSizeChanger={true}
                   showQuickJumper={true}
                   showTotal={blockTotal => `${t('total')} ${blockTotal} ${t('items')}`}
                 />}/>
    </div>
  );
}
