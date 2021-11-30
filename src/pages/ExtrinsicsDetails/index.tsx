/** @format */

import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'
import {get} from '../../hooks/useApi'
import Event from '../Chain/event'
import List from '../../components/List'
import JsonApi from '../../components/Jsonformat'
import TableMenuBox from '../../components/TableMenuBox'
import {TabInfo} from '../../components/SwitchTab'
import DetailTitle from '../../components/DetailTitle'
import {LinkX, Normal} from '../../components/LinkX'
import Operation from '../../components/Operation'
import CopyText from '../../components/copyText'
import successIcon from '../../assets/icon_success.svg'
import NoData from '../../components/NoData'
import {ListBgColor, WrapperDetails, WrapperList} from '../../css/Wrapper'

export default function ExtrinsicDetails() {
  const {t} = useTranslation()
  const [loading, setLoading] = useState(true)
  const [noData, setNoData] = useState(false)
  const [extrinsicDetails, setExtrinsicDetails] = useState<any>()
  const extrinsic = window.location.hash.slice(19, window.location.hash.length)
  const tag = 'extrinsicsDetails'
  const [currentTab, setCurrentTab] = useState('event')
  const [nowExtrinsic, setNowExtrinsics] = useState(extrinsic)
  const getData = async () => {
    const res: any = await get(`/extrinsics/${nowExtrinsic}`, ``)
    if (res) {
      setExtrinsicDetails(res)
      setLoading(false)
    } else {
      setNoData(true)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    const activeTab = sessionStorage.getItem(tag)
    if (activeTab) {
      setCurrentTab(activeTab)
    } else {
      setCurrentTab('event')
    }
  }, [])
  const list = [
    {
      title: t('Block'),
      content: (
        <LinkX
          linkUrl={`/blockDetails/${extrinsicDetails?.indexer?.blockHeight}`}
          content={
            <div className="flex flex-row items-center">
              <img src={successIcon} alt="" className="inline-block mr-4" />
              <span className="inline-block">{extrinsicDetails?.indexer?.blockHeight}</span>
            </div>
          }
        />
        // <></>
      ),
    },
    {
      title: t('Block Time'),
      content: <Normal state={dayjs(Number(extrinsicDetails?.indexer?.blockTime)).format('YYYY-MM-DD HH:mm:ss')} />,
    },
    {
      title: t('Extrinsic Hash'),
      content: (
        <div className="flex flex-row">
          <Normal state={extrinsicDetails?.hash ? extrinsicDetails?.hash : '-'} />
          {extrinsicDetails?.hash ? <CopyText text={extrinsicDetails?.hash} showText={true} /> : ''}
        </div>
      ),
    },
    {
      title: t('Operation'),
      align: 'right',
      width: '15rem',
      content: (
        <Operation content={extrinsicDetails?.section + '-' + extrinsicDetails?.name} more={false} left={true} />
      ),
    },
    {
      title: t('Sender'),
      content: <Normal state={extrinsicDetails?.singer ? extrinsicDetails?.singer : '-'} />,
    },
    // {
    //   title: t('Fee'),
    //   content:
    //     <div className="font-medium text-gray-arrow ">
    //       {extrinsicDetails?.blockTime}
    //     </div>,
    // }, {
    //   title: t('Node'),
    //   content: <div className="font-medium text-gray-arrow ">
    //   </div>,
    // }, {
    //   title: t('Result'),
    //   content: <div className="font-medium text-gray-arrow ">
    //     {extrinsicDetails?.isSuccess}
    //   </div>,
    // },
    {
      title: t('Arguments'),
      content: <JsonApi json={extrinsicDetails?.args} />,
    },
    // , {
    //   title: t('Signature'),
    //   content: <div className="font-medium text-gray-arrow ">
    //     {extrinsicDetails?.data}
    //   </div>,
    // }
  ]
  const tabList: TabInfo[] = [
    {
      title: t('Event'),
      content: <Event extrinsic={extrinsic} />,
      name: 'event',
    },
  ]
  const routerPath = () => {
    return (
      <div
        className="flex flex-row cursor-pointer text-gray-white text-base mx-0 my-auto"
        style={{whiteSpace: 'nowrap'}}>
        <Link to={'/'} style={{color: 'rgba(255, 255, 255, 0.65)'}}>
          <div className="flex flex-row">
            {t('Home')}
            <span className="inline-block mx-2">/</span>
          </div>
        </Link>
        <Link to={'/chain/extrinsic'} style={{color: 'rgba(255, 255, 255, 0.65)'}}>
          <div className="flex flex-row">
            {t('Extrinsic')}
            <span className="inline-block mx-2">/</span>
          </div>
        </Link>
        <Link to={`./${extrinsic}`}>{t('ExtrinsicDetails')}</Link>
      </div>
    )
  }
  return (
    <>
      {noData ? (
        <NoData />
      ) : (
        <>
          <ListBgColor />
          <>
            <WrapperList>
              <div className="px-24 bg-gray-arrow desktop:pt-8 screen:px-4  medium:px-4">
                <DetailTitle
                  routeTitle={t('Extrinsics')}
                  content={extrinsicDetails?.indexer?.blockHeight + '-' + extrinsicDetails?.indexer?.index}
                  isBlock={true}
                  setNowBlock={extrinsic}
                  routePath={routerPath}
                />
              </div>
              <List list={list} loading={loading} />
              <div className="px-24 pb-4 bg-gray-bgWhite screen:px-4 medium:px-4">
                <WrapperDetails>
                  <TableMenuBox tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} tag={tag} />
                </WrapperDetails>
              </div>
            </WrapperList>
          </>
        </>
      )}
    </>
  )
}
