/** @format */

import {useTranslation} from 'react-i18next'
import React from 'react'
import {Normal, ShorterLink} from '../../components/LinkX'
import TimeStatus from '../../components/TimeStatus'
import swapEndian from '../../helper/swapEndian'
import ChainxTable from '../../components/Table/table'

export default function Deposit() {
  const {t} = useTranslation()
  const chainColumns = [
    {
      title: t('Bitcoin Transaction Hash'),
      dataIndex: 'bitcoinTransactionHash',
      key: 'bitcoinTransactionHash',
      render: (text: any, record: any) => {
        return (
          <a
            className='inline-block text-blue-aText font-medium'
            href={`https://live.blockcypher.com/btc/tx/${swapEndian(record.data[0])}`}
            target='_Blank'
          >
            {record.data[0]
              ?.substring(0, 7)
              .concat('...')
              .concat(record.data[0]?.substring(record.data[0].length - 5))}
          </a>
        )
      },
    },
    {
      title: t('ChainX Transaction Hash'),
      dataIndex: 'chainXTransactionHash',
      key: 'chainXTransactionHash',
      render: (text: any, record: any) => {
        return <ShorterLink linkUrl={`/extrinsicDetails/${record.extrinsicHash}`} content={record.extrinsicHash} />
      },
    },
    {
      title: t('ChainX Deposit Address'),
      dataIndex: 'chainXDepositAddress',
      key: 'chainXDepositAddress',
      render: (text: any, record: any) => {
        return <ShorterLink linkUrl={`/addressDetails/${record.data[1]}`} content={record.data[1]} />
      },
    },
    {
      title: t('Deposit Time'),
      dataIndex: 'depositTime',
      key: 'depositTime',
      render: (text: any, record: any) => {
        return <TimeStatus content={record.indexer.blockTime} />
      },
    },
    {
      title: t('Asset'),
      dataIndex: 'Asset',
      key: 'Asset',
      render: (text: any, record: any) => {
        return <Normal state={'BTC'} />
      },
    },
    {
      title: t('Balance'),
      dataIndex: 'Balance',
      key: 'Balance',
      render: (text: any, record: any) => {
        return <Normal state={record.data[2] / 100000000} />
      },
    },
  ]

  return (
    <ChainxTable Columns={chainColumns} urlControl={'/crossblocks/bitcoin/deposits?'} result={'items'} keyNum={8} />
  )
}
