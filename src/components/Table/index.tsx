import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

interface TableXProps {
    columns: Array<any>;
    dataList?: Array<any>;
    pagination?: Object;
    Children?: any
}

export default function TableX({Children, columns, dataList}: TableXProps) {


    return (
      <div className="flex flex-col">
          <Table columns={columns} dataSource={dataList} pagination={false} bordered/>
          <div className='flex justify-end py-4'>
              {Children}
          </div>
      </div>
    );
}


