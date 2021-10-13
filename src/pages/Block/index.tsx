import React from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Footer from '../../components/Footer';
import TableMenuBox from '../../components/TableMenuBox';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { TabInfo } from '../../components/SwitchTab';


export default function Blocks() {
  const {t} = useTranslation();

  const Wapper = styled.div`
    min-height: 688px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
  `;

  const tabList: TabInfo[] = [
    {
      title: t('Blocks'),
      content: <></>,
    },
    {
      title: t('Extrinsic'),
      content: <></>,
    },
    {
      title: t('Transfer'),
      content: <></>,
    },
    {
      title: t('Events'),
      content: <></>,
    },
    {
      title: t('Accounts'),
      content: <></>,
    }
  ];

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
    page: 1,
    pageSize: 10,
    total: 200,
    showSizeChanger: true,
    showQuickJumper: true,
  };

  return (
    <>
      <Header/>
      <div className="px-24 py-4 bg-gray-bgWhite ">
        <Wapper>
          <TableMenuBox tabList={tabList}/>
          <div className="px-8">
            <Table columns={columns} dataList={data} pagination={pagination}/>
          </div>
        </Wapper>
      </div>
      <Footer/>

    </>
  );
}
