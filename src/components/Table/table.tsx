import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TableX from './index';
import { get } from '../../hooks/useApi';

interface chainxTableProps {
  Columns: any,
  urlControl: string,
  result: string,
  keyNum: number
}

export default function ChainxTable({Columns, urlControl, result, keyNum}: chainxTableProps) {
  const {t} = useTranslation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataTotal, setDataTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const res: any = await get(`${urlControl}page=${page - 1}&page_size=${pageSize}`, ``);
    setDataTotal(res.total);
    setData(res.items);
    debugger
    setLoading(false);
  };

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    getData();
  }, [page, pageSize]);

  useEffect(() => {
    setPage(1);
    setPageSize(10);
    setLoading(true);
  }, [keyNum]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: dataTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage:true,
    bordered:true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (dataTotal: number) => `${t('total')} ${dataTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={Columns} dataList={data} pagination={pagination} loading={loading}/>
    </div>
  );
}
