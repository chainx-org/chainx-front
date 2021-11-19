/** @format */

import {useTranslation} from 'react-i18next'
import React from 'react'
import {ShorterLink} from '../../components/LinkX'
import TimeStatus from '../../components/TimeStatus'
import swapEndian from '../../helper/swapEndian'
import ChainXTable from '../../components/Table/table'

export default function BitcoinBlock() {
  const {t} = useTranslation()

  const chainColumns = [
    {
      title: t('Bitcoin Height'),
      dataIndex: 'bitcoinHeight',
      key: 'bitcoinHeight',
      render: (text: any, record: any) => {
        return (
          <a
            className='inline-block text-blue-aText font-medium'
            href={`https://live.blockcypher.com/btc/block/${record.btcHeight}/`}
            target='_Blank'
          >
            {record.btcHeight}
          </a>
        )
      },
    },
    {
      title: t('Bitcoin Block Hash'),
      dataIndex: 'bitcoinBlockHash',
      key: 'bitcoinBlockHash',
      render: (text: any, record: any) => {
        return (
          <a
            className='inline-block text-blue-aText font-medium'
            href={`https://live.blockcypher.com/btc/block/${swapEndian(record.btcHash.slice(2))}/`}
            target='_Blank'
          >
            {swapEndian(record.btcHash)
              ?.substring(0, 7)
              .concat('...')
              .concat(swapEndian(record.btcHash)?.substring(swapEndian(record.btcHash).length - 5))}
          </a>
        )
      },
    },
    {
      title: t('ChainX Relay TX Hash'),
      dataIndex: 'chainXRelayTXHash',
      key: 'chainXRelayTXHash',
      render: (text: any, record: any) => {
        return (
          <ShorterLink
            linkUrl={`/extrinsicDetails/${record.chainxExtrinsicHash}`}
            content={record.chainxExtrinsicHash}
          />
        )
      },
    },
    {
      title: t('ChainX Relayer'),
      dataIndex: 'chainXRelayer',
      key: 'chainXRelayer',
      render: (text: any, record: any) => {
        return <ShorterLink linkUrl={`/addressDetails/${record.signer}`} content={record.signer} />
      },
    },
    {
      title: t('ChainX Relay Time'),
      dataIndex: 'chainXRelayTime',
      key: 'chainXRelayTime',
      render: (text: any, record: any) => {
        return <TimeStatus content={record.chainxTime} />
      },
    },
  ]

  return <ChainXTable Columns={chainColumns} urlControl={'/crossblocks/bitcoin/blocks?'} result={'items'} keyNum={6} />
}
