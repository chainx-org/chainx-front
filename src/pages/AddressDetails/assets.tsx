/** @format */

import {useTranslation} from 'react-i18next'
import React, {useEffect, useState} from 'react'
import TableX from '../../components/Table'
import {get} from '../../hooks/useApi'
import Icon from '../../assets/icon_PCX .svg'
import {accuracy} from '../../helper/hooks'

interface ExtrinsicProps {
  account?: number | string
}

export default function Assets({account}: ExtrinsicProps) {
  const {t} = useTranslation()
  const [extrinsicData, setExtrinsicData] = useState([{}])
  const [loading, setLoading] = useState(true)

  const getExtrinsicData = async () => {
    let result = []
    let res: any = await get(`/accounts/${account}/assets`, ``)
    result.push(res)
    setExtrinsicData(result)
    setLoading(false)
  }

  const chainColumns = [
    {
      title: t('Asset'),
      dataIndex: 'Asset',
      key: 'Asset',
      render: () => {
        return (
          <div className="flex flex-row">
            <img src={Icon} alt="" />
            <span>{'PCX'}</span>
          </div>
        )
      },
    },
    {
      title: t('Usable'),
      dataIndex: 'Usable',
      key: 'Usable',
      render: (text: any, record: any) => {
        return <div>{record?.data?.free ? accuracy(record?.data?.free) : ''}</div>
      },
    },
    {
      title: t('Vote Frozen'),
      dataIndex: 'Vote',
      key: 'Vote',
      render: (text: any, record: any) => {
        return <div>{accuracy(record?.data?.reserved)}</div>
      },
    },
    {
      title: t('miscFrozen'),
      dataIndex: 'miscFrozen',
      key: 'miscFrozen',
      render: (text: any, record: any) => {
        return <div>{accuracy(record?.data?.miscFrozen)}</div>
      },
    },
    {
      title: t('Reserved'),
      dataIndex: 'Reserved',
      key: 'Reserved',
      render: (text: any, record: any) => {
        return <div>{accuracy(record?.data?.feeFrozen)}</div>
      },
    },
    {
      title: t('Total Balance'),
      dataIndex: 'Total',
      key: 'Total',
      render: (text: any, record: any) => {
        return <div>{accuracy(record?.data?.free)}</div>
      },
    },
  ]

  useEffect(() => {
    getExtrinsicData().then(() => {})
  }, [])

  return (
    <div className="px-8 overflow-scroll">
      <div className="px-1 py-1 font-medium text-base">{t('ChainX Assets')}</div>
      <TableX columns={chainColumns} pagination={false} dataList={extrinsicData} loading={loading} />
    </div>
  )
}
