import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/useApi';
import successIcon from '../../assets/icon_success.svg';
import failIcon from '../../assets/icon_failure.svg';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import Operation from '../../components/Operation';
import JsonApi from '../../components/Jsonformat';
import ExpandIcon from '../../components/ExpandIcon';

interface ExtrinsicProps {
  block?: number | string,
}

export default function Extrinsic({block}: ExtrinsicProps) {
  const {t} = useTranslation();
  const [extrinsicData, setExtrinsicData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [extrinsicTotal, setExtrinsicTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const getExtrinsicData = async () => {
    let res: any;
    if (block) {
      res = await get(`/extrinsics?block=${block}&page=${page - 1}&page_size=${pageSize}`, ``);
    } else {
      res = await get(`/extrinsics?page=${page - 1}&page_size=${pageSize}`, ``);
    }
    setExtrinsicTotal(res.total);
    res.items.map((item:any,index:number)=>{
      item['index'] = index+1
    })
    setExtrinsicData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Extrinsic ID'),
      dataIndex: 'extrinsicId',
      key: 'extrinsicId',
      className:'w-28',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/extrinsicDetails/${record.hash}`} state={record} content={(record.indexer.blockHeight)+'-'+(record.indexer.index)}/>
        );
      }
    },
    {
      title: t('Block'),
      dataIndex: 'block',
      key: 'block',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.indexer.blockHeight}`} state={record}
                 content={(record.indexer.blockHeight)}/>
        );
      }
    },
    {
      title: t('Extrinsic Hash'),
      dataIndex: 'extrinsicHash',
      key: 'extrinsicHash',
      width: 150,
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicDetails/${record.hash}`} state={record} content={record.hash}/>
        );
      }
    },
    {
      title: t('Time'),
      dataIndex: 'time',
      key: 'time',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>);
      }
    },
    {
      title: t('Result'),
      dataIndex: 'result',
      key: 'result',
      width: 90,
      render: (text: any, record: any) => {
        return (
          <div>{record.isSuccess === true ? <img src={successIcon} alt=""/> : <img src={failIcon} alt=""/>}</div>
        );
      }
    },
    {
      title: t('Operation'),
      dataIndex: 'Operation',
      key: 'Operation',
      align:'right',
      width: 200,
      render: (text: any, record: any) => {
        return (
          <Operation content={record.section+'-'+record.name}/>
        );
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setExpandedRowKeys([])
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    setLoading(true)
    getExtrinsicData().then(() => {

    });

  }, [page, pageSize,block]);

const expandedRowRender =(record:any)=>{
    return (
        <JsonApi json={record?.args}/>
    );
  };
  const rowExpandable = (record: any) => {
    return true;
  };
  const [expandedRowKeys,setExpandedRowKeys] = useState<string[]>([])
  const onExpandedRowsChange = (expandedRows:string[])=>{
    setExpandedRowKeys(expandedRows)
  }
  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: extrinsicTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage:true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (extrinsicTotal: number) => `${t('total')} ${extrinsicTotal} ${t('items')}`,

  };
  return (
    <div className="px-8 overflow-scroll">
      <TableX
        rowKey={(row:any)=>{return row.index}}
        columns={chainColumns}
        dataList={extrinsicData}
        pagination={pagination}
        loading={loading}
        expandIcon={({expanded, onExpand, record}: any) => ExpandIcon(expanded, onExpand, record)}
        expandedRowRender={expandedRowRender}
        rowExpandable={rowExpandable}
        expandedRowKeys={expandedRowKeys}
        onExpandedRowsChange={onExpandedRowsChange}
      />
    </div>
  );
}
