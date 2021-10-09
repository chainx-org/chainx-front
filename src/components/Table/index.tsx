import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

interface TableXProps {
    dataList?: Array<any>;

}

export default function TableX(dataList: TableXProps) {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // render: <div>111</div>
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            // render: <div>222</div>,
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
            // render: <div>333</div>,
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const pagination = {
        page:1,
        pageSize:10,
        total: 200,
        showSizeChanger:true,
        showQuickJumper:true,
    };
    return (
      <div>
          <Table columns={columns} dataSource={data} pagination={pagination}/>
      </div>
    );
}


