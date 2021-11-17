//自定义封装table表格
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import noDataIcon from '../assets/noData.svg';

interface chainxTableProps {
  Columns?: Array<any>,
  getData: any,
  result?: string,
  keyNum?: number,
  rowKey?:any,
  expandedRowRender?:any,
  rowExpandable?:any,
  expandIcon?:any,
  expandedRowKeys?:any,
  onExpandedRowsChange?:any
}

const useTable = ({Columns, getData, result, keyNum,rowKey,expandedRowRender,rowExpandable,expandIcon,expandedRowKeys,onExpandedRowsChange}: chainxTableProps) => {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataTotal, setDataTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const emptyDiv = () => {
    return (
      <div style={{height: '10rem'}}>
        <div className="flex flex-col ">
          <img src={noDataIcon} alt="" className="inline-block w-12 mx-auto "/>
          <span className="inline-block w-28 mx-auto text-center mx-auto mt-4">{t('No Data')}</span>
        </div>
      </div>
    );
  };

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  //索引key
  useEffect(() => {
    setPage(1);
    setPageSize(10);
    setLoading(true);
  }, [keyNum]);

  //分页
  const pagination= {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: dataTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage: true,
    bordered: true,
    onChange: (page: number, pageSize?: number) => onChange(page, pageSize),
    showTotal: (dataTotal: number) => `${t('total')} ${dataTotal} ${t('items')}`
  };

  useEffect(() => {
    setData(getData());
  }, []);
  return (
    <div className="flex flex-col">
      <Table
        locale={{emptyText: loading ? <div style={{height: '10rem'}}>' '</div> : emptyDiv()}}
        columns={Columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        bordered
        rowKey={rowKey}
        expandable={{
          expandIcon: expandIcon,
          expandedRowRender: expandedRowRender,
          rowExpandable: rowExpandable,
          expandedRowKeys: expandedRowKeys,
          onExpandedRowsChange: onExpandedRowsChange
        }}
      />
      <div className="flex justify-end py-4">
        {/*{Children}*/}
      </div>
    </div>);

};

export default useTable;
