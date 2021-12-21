/** @format */

import {useTranslation} from 'react-i18next'
import React from 'react'
import {Normal, ShorterLink} from '../../components/LinkX'
import TimeStatus from '../../components/TimeStatus'
import ChainxTable from '../../components/Table/table'

export default function Host() {
  const {t} = useTranslation()

  const chainColumns = [
    {
      title: t('Multi Signer Threshold'),
      dataIndex: 'Threshold',
      key: 'Threshold',
      render: (text: any, record: any) => {
        return <Normal state={record.threshold} />
      },
    },
    {
      title: t('Trustee'),
      dataIndex: 'Trustee',
      key: 'Trustee',
      render: (text: any, record: any) => {
        return <ShorterLink linkUrl={`/extrinsicDetails/${record.address}`} content={record.address} />
      },
    },
    {
      title: t('Hot Public Key'),
      dataIndex: 'hotKey',
      key: 'hotKey',
      render: (text: any, record: any) => {
        return <Normal state={record?.hotPubkey} />
      },
    },
    {
      title: t('Cold Public Key'),
      dataIndex: 'coldKey',
      key: 'coldKey',
      render: (text: any, record: any) => {
        return <Normal state={record?.coldPubkey} />
      },
    },
  ]

  return (
    <ChainxTable Columns={chainColumns} urlControl={'/crossblocks/bitcoin/trustees?'} result={'items'} keyNum={9} />
  )
}
