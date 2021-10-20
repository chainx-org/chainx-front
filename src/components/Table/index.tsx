import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next';

interface TableXProps {
  columns: Array<any>,
  dataList?: Array<any>,
  pagination?: Object,
  Children?: any,
  loading?: any,
  rowKey?:any,
  page?:number,
  pageSize?:number,
  tableTotal?:number,
  setPage?:any,
  setPageSize?:any,
  setLoading?:any
}

export default function TableX({Children, columns, dataList, pagination,loading,rowKey,page,pageSize,tableTotal,setPage,setPageSize,setLoading}: TableXProps) {
  const {t} = useTranslation()
  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }
  // const pagination = {
  //   pageSize: pageSize,
  //   current: page,
  //   defaultCurrent: page,
  //   total: tableTotal,
  //   showSizeChanger: true,
  //   showQuickJumper: true,
  //   onChange: (page: number, pageSize: number) => onChange(page, pageSize),
  //   showTotal: (blockTotal: number) => `${t('total')} ${tableTotal} ${t('items')}`
  // };

  // @ts-ignore
  return (
    <div className="flex flex-col">
      <Table columns={columns} dataSource={dataList} pagination={pagination} loading={loading} bordered rowKey={rowKey}/>
      <div className="flex justify-end py-4">
        {Children}
      </div>
    </div>
  );
}


