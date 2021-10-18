import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

interface TableXProps {
  columns: Array<any>;
  dataList?: Array<any>;
  pagination?: Object;
  Children?: any;
  loading?: any;
  rowKey?:any
}

export default function TableX({Children, columns, dataList, pagination, loading,rowKey}: TableXProps) {


  return (
    <div className="flex flex-col">
      <Table columns={columns} dataSource={dataList} pagination={pagination} loading={loading} bordered rowKey={rowKey}/>
      <div className="flex justify-end py-4">
        {Children}
      </div>
    </div>
  );
}


