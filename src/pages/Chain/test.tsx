/** @format */

import {Table} from 'antd'
import React, {useState} from 'react'
import {useTableData} from '../../hooks/useTable'
import {LinkX, Normal, ShorterLink} from '../../components/LinkX'
import TimeStatus from '../../components/TimeStatus'
import _encodeAddress from '../../helper/encodeAddress'
import {useTranslation} from 'react-i18next'
import {get} from '../../hooks/useApi'
import successIcon from '../../assets/icon_success.svg'
import failIcon from '../../assets/icon_failure.svg'
import Operation from '../../components/Operation'

export default function Test() {
  const {t} = useTranslation()
  const [loading, setLoading] = useState(true)
  const {
    total,
    setTotal,
    // 表格数据源
    datasource,
    setDatasource,
    // 表格接口依赖
    tableParams,
    setTableParams,
    // 搜索依赖state
    searchData,
    setSearchData,
    // 搜索操作
    handleSearch,
    // 重置操作
    handleReset,
    // 页面变化
    handlePageChange,
  } = useTableData<any, any, any>({
    tableParamsInit: {pageSize: 10, current: 1},
    searchDataInit: {discount_type: 0},
    getTotal() {
      return 100
    },

    async pullData({pageSize: limit, current: page, ...rest}, setData) {
      const result = await getEventData()
      setData(result)
      setLoading(false)
      //调用 获取表格数据的接口
      // dispatch({
      //   type: `${namespace}/${ActionTypes.publicCodeGet}`,
      //   payload: {
      //     params: {
      //       limit,
      //       page,
      //       ...rest,
      //     },
      //     onSuccess(res) {
      //       setData(res?.data)
      //     },
      //   },
      // })
      // setData(MOCK.publicCodeTableData)
    },
  })

  const getEventData = async () => {
    const res: any = await get(`/extrinsics?block=${110011}&page=${1}&page_size=${10}`, ``)
    return res
  }

  return (
    <>
      <Table
        loading={loading}
        dataSource={datasource}
        rowKey="id"
        pagination={{
          total,
          pageSize: tableParams.pageSize,
          current: tableParams.current,
          showTotal: total => `共有${total}条数据`,
          showSizeChanger: false,
          onChange: handlePageChange,
        }}
        columns={[
          {
            title: t('Extrinsic ID'),
            dataIndex: 'extrinsicId',
            key: 'extrinsicId',
            className: 'w-28',
            width: 100,
            render: (text: any, record: any) => {
              return (
                <LinkX
                  linkUrl={`/extrinsicDetails/${record.hash}`}
                  state={record}
                  content={record.indexer.blockHeight + '-' + record.indexer.index}
                />
              )
            },
          },
          {
            title: t('Block'),
            dataIndex: 'block',
            key: 'block',
            width: 100,
            render: (text: any, record: any) => {
              return (
                <LinkX
                  linkUrl={`/blockDetails/${record.indexer.blockHeight}`}
                  state={record}
                  content={record.indexer.blockHeight}
                />
              )
            },
          },
          {
            title: t('Extrinsic Hash'),
            dataIndex: 'extrinsicHash',
            key: 'extrinsicHash',
            width: 150,
            render: (text: any, record: any) => {
              return <ShorterLink linkUrl={`/extrinsicDetails/${record.hash}`} state={record} content={record.hash} />
            },
          },
          {
            title: t('Time'),
            dataIndex: 'time',
            key: 'time',
            width: 100,
            render: (text: any, record: any) => {
              return <TimeStatus content={record.indexer.blockTime} />
            },
          },
          {
            title: t('Result'),
            dataIndex: 'result',
            key: 'result',
            width: 90,
            render: (text: any, record: any) => {
              return (
                <div>
                  {record.isSuccess === true ? <img src={successIcon} alt="" /> : <img src={failIcon} alt="" />}
                </div>
              )
            },
          },
          {
            title: t('Operation'),
            dataIndex: 'Operation',
            key: 'Operation',
            align: 'right',
            width: 200,
            render: (text: any, record: any) => {
              return <Operation content={record.section + '-' + record.name} />
            },
          },
        ]}
      />
    </>
  )
}
