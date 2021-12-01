/** @format */

//能否展开
//接口url
import React, {useState, useEffect} from 'react'

interface PageAbout {
  current: number
  pageSize: number
}

// 配合antd的table，生产table所需函数方法及state
export function useTableData<
  TableParams extends SearchData & PageAbout = any,
  SearchData extends object = any,
  Datasource = any,
>({
  tableParamsInit = {pageSize: 10, current: 1} as any,
  searchDataInit = {},
  pullData = () => {
    // console.log('pullData')
  },
  getTotal = () => {
    return 1
  },
}: {
  tableParamsInit?: TableParams
  searchDataInit?: SearchData | {}
  // 调用接口的方法，接受setDatasource作为参数, 在获取数据后，通过其将数据注回useTableData
  pullData: (params: TableParams, setDatasource: React.Dispatch<React.SetStateAction<Datasource[] | []>>) => void
  // 从结果中获取数据总数
  getTotal?: (res: any) => number
}) {
  const [datasource, setDatasource] = useState<Datasource[] | []>([])
  const [tableParams, setTableParams] = useState<TableParams>(tableParamsInit)
  const [searchData, setSearchData] = useState<SearchData | {}>(searchDataInit)
  const [total, setTotal] = useState(1)
  //表格接口依赖变动，调用接口，拉取新的数据
  useEffect(() => {
    const res = pullData(tableParams, setDatasource)
    setTotal(getTotal(res))
  }, [tableParams])
  // 搜索时，将搜索state set至表格接口依赖，表格接口依赖变化，自动触发接口调用
  const handleSearch = () => {
    setTableParams(s => ({...s, current: 1, ...searchData}))
  }
  // 重置，将搜索依赖及表格接口依赖重置为init
  const handleReset = () => {
    setTableParams(tableParamsInit)
    setSearchData(searchDataInit)
  }
  // 页码变更
  const handlePageChange = (v: number) => {
    setTableParams(s => ({...s, current: v}))
  }
  return {
    // 数据总数
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
  }
}
