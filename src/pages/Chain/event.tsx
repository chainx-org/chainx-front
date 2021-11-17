import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/useApi';
import { LinkX, Normal, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import Operation from '../../components/Operation';
import JsonApi from '../../components/Jsonformat';
import ExpandIcon from '../../components/ExpandIcon';

interface EventProps {
  block?: number | string,
  extrinsic?: string
}

export default function Event({block, extrinsic}: EventProps) {
  const {t} = useTranslation();
  const [eventData, setEventData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [eventTotal, setEventTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const getEventData = async () => {
    let res: any;
    if (block) {
      res = await get(`/blockEvents?block=${block}&page=${page - 1}&page_size=${pageSize}`, ``);
    } else {
      if (extrinsic) {
        res = await get(`/extrinsicEvents?extrinsic_hash=${extrinsic}&page=${page - 1}&page_size=${pageSize}`, ``);
      } else {
        res = await get(`/events?page=${page - 1}&page_size=${pageSize}`, ``);
      }
    }
    res.items.map((item: any, index: number) => {
      item['index'] = index + 1;
    });
    setEventTotal(res.total);
    setEventData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Extrinsic ID'),
      dataIndex: 'Extrinsic ID',
      key: 'Extrinsic ID',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/extrinsicDetails/${record.extrinsicHash}`} state={record}
                 content={record.indexer.blockHeight + '-' + record.sort}/>
        );
      }
    },
    {
      title: t('Block'),
      dataIndex: 'Block',
      key: 'Block',
      width: 100,
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.indexer.blockHeight}`}  state={record} content={record.indexer.blockHeight}/>
        );
      }
    },
    {
      title: t('Extrinsic Hash'),
      dataIndex: 'Extrinsic Hash',
      key: 'Extrinsic Hash',
      width: 200,
      render: (text: any, record: any) => {
        {
          if (record.extrinsicHash) {
            return (<ShorterLink linkUrl={`/extrinsicDetails/${record.extrinsicHash}`} state={record}
                                 content={record.extrinsicHash}/>
            );
          } else {
            return (<Normal state={'-'}/>);
          }
        }
      }
    },
    {
      title: t('Time'),
      dataIndex: 'Time',
      key: 'Time',
      width: 150,
      render: (text: any, record: any) => {
        return (
          <TimeStatus content={record.indexer.blockTime}/>);
      }
    },
    {
      title: t('Operation'),
      dataIndex: 'Operation',
      key: 'Operation',
      align:'right',
      width:150,
      render: (text: any, record: any) => {
        return (
          <Operation content={record.section+'-'+record.method}/>
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
    getEventData();
  }, [page, pageSize,block]);
  const expandedRowRender = (record: any) => {
    return (
      <JsonApi json={record?.meta}/>
    );
  };
  const rowExpandable = (record: any) => {
    return true;
  };
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
  const onExpandedRowsChange = (expandedRows: string[]) => {
    setExpandedRowKeys(expandedRows);
  };
  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: eventTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage:true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (eventTotal: number) => `${t('total')} ${eventTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX rowKey={(row: any) => {return row.index;}}
              columns={chainColumns} dataList={eventData} pagination={pagination} loading={loading}
              expandIcon={({expanded, onExpand, record}: any) => ExpandIcon(expanded, onExpand, record)}
              expandedRowRender={expandedRowRender}
              rowExpandable={rowExpandable}
              expandedRowKeys={expandedRowKeys}
              onExpandedRowsChange={onExpandedRowsChange}
      />
    </div>
  );
}
