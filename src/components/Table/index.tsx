import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

interface TableXProps {
    columns:Array<any>;
    dataList?: Array<any>;
    pagination:Object;
    children?:any
}

export default function TableX({children,columns,dataList,pagination}: TableXProps) {


    return (
      <div>
          <Table columns={columns}  dataSource={dataList} pagination={pagination} bordered />
      </div>
    );
}


