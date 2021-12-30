import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/useApi';
import { LinkX, ShorterLink } from '../../components/LinkX';
import TimeStatus from '../../components/TimeStatus';
import Operation from '../../components/Operation';
import JsonApi from '../../components/Jsonformat';
import ExpandIcon from '../../components/ExpandIcon';

interface ExtrinsicProps {
  account?: number | string,
}

export default function Transfers({account}: ExtrinsicProps) {
  const {t} = useTranslation();
  const [extrinsicData, setExtrinsicData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [extrinsicTotal, setExtrinsicTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const getExtrinsicData = async () => {
    let res: any = await get(`/accounts/${account}/transfers?page=${page - 1}&page_size=${pageSize}`, ``);
    setExtrinsicTotal(res.total);
    res.items.map((item: any, index: number) => {
      item['index'] = index + 1;
    });
    setExtrinsicData(res.items);
    setLoading(false);
  };

  const chainColumns = [
    {
      title: t('Extrinsic ID'),
      dataIndex: 'extrinsicId',
      key: 'extrinsicId',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/extrinsicDetails/${record.hash}`} state={record}
                 content={(record.indexer.blockHeight) + '-' + (record.sort)}/>
        );
      }
    },
    {
      title: t('Extrinsic Hash'),
      dataIndex: 'extrinsicHash',
      key: 'extrinsicHash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicDetails/${record.extrinsicHash}`} state={record}
                       content={record.extrinsicHash}/>
        );
      }
    },
    {
      title: t('Time'),
      dataIndex: 'time',
      key: 'time',
      render: (text: any, record: any) => {
        return (
          <>
            {record.indexer.blockTime?<TimeStatus content={record.indexer.blockTime}/>:'-'}
          </>
          );
      }
    },
    {
      title: t('Sender'),
      dataIndex: 'extrinsicHash',
      key: 'extrinsicHash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicDetails/${record.data[0]}`} state={record} content={record.data[0]}/>
        );
      }
    },
    {
      title: t('Receiver'),
      dataIndex: 'extrinsicHash',
      key: 'extrinsicHash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/extrinsicDetails/${record.data[1]}`} state={record} content={record.data[1]}/>
        );
      }
    },
    // {
    //   title: t('Result'),
    //   dataIndex: 'result',
    //   key: 'result',
    //   render: (text: any, record: any) => {
    //     return (
    //       <div>{record.isSuccess === true ? <img src={successIcon} alt=""/> : <img src={failIcon} alt=""/>}</div>
    //     );
    //   }
    // },
    {
      title: t('Balance'),
      dataIndex: 'Balance',
      key: 'Balance',
      render: (text: any, record: any) => {
        return (
          <div>{record.data[2] / Math.pow(10,8)}</div>
        );
      }
    },
    {
      title: t('Operation'),
      dataIndex: 'Operation',
      key: 'Operation',
      align: 'right',
      width: '15rem',
      render: (text: any, record: any) => {
        return (
          <Operation content={record.section}/>
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
    getExtrinsicData().then(() => {

    });
  }, [page, pageSize]);

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
    total: extrinsicTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage: true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (extrinsicTotal: number) => `${t('total')} ${extrinsicTotal} ${t('items')}`,

  };
  return (
    <div className="px-8 overflow-scroll">
      <TableX
        rowKey={(row: any) => {return row.index;}}
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
