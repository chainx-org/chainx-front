import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import NoData from '../NoData';
import noDataIcon from '../../assets/noData.svg';
import { useTranslation } from 'react-i18next';

interface TableXProps {
  columns: Array<any>,
  dataList: Array<any>,
  pagination?: Object,
  Children?: any,
  loading?: any,
  rowKey?:any,
  page?:number,
  pageSize?:number,
  tableTotal?:number,
  setPage?:any,
  setPageSize?:any,
  setLoading?:any,
  expandedRowRender?:any,
  rowExpandable?:any,
  expandIcon?:any,
}

export default function TableX({Children, columns, dataList, pagination,loading,rowKey,expandedRowRender,rowExpandable,expandIcon}: TableXProps) {
  const {t} = useTranslation();
  const emptyDiv = ()=>{
    return (
      <div style={{height:'10rem'}}>
         <div className="flex flex-col ">
          <img src={noDataIcon} alt="" className='inline-block w-12 mx-auto '/>
          <span className='inline-block w-28 mx-auto text-center mx-auto mt-4'>{t('No Data')}</span>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col">
      <Table
        locale={{emptyText: loading?<div style={{height:'10rem'}}>' '</div>: emptyDiv()}}
        columns={columns}
        dataSource={dataList}
        pagination={pagination}
        loading={loading}
        bordered
        rowKey={rowKey}
        expandable={{
          expandIcon:expandIcon,
          expandedRowRender: expandedRowRender,
          rowExpandable:rowExpandable,
        }}
      />
      <div className="flex justify-end py-4">
        {Children}
      </div>
    </div>
  );
}


