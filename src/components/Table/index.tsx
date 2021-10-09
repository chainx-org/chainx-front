import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

interface TableXProps {
    columns:Array<any>;
    dataList: Array<any>;
    pagination:Object
}

export default function TableX({columns,dataList,pagination}: TableXProps) {


    return (
      <div>
          <Table columns={columns} dataSource={dataList} pagination={pagination}/>
      </div>
    );
}


