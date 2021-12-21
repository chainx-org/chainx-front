/** @format */

import React, {useRef, useState} from 'react'
import {BgColor, ContainerBox, TableWrapper} from '../../pages/HomePage/HomeStyle'
import HomeSearch from '../../pages/HomePage/HomeSearch'
import MetaData from '../MetaData'
import LatestItem from '../LatestItem'
interface HomePageFrameProps {
  metaData: Array<any>
  latestBlock: Object
  latestExtrinsic: Object
}
function HomePageFrame({metaData, latestBlock, latestExtrinsic}: HomePageFrameProps) {
  return (
    <>
      {/*<ContainerBox>*/}
      {/*  <HomeSearch />*/}
      {/*  <div className="bg-gray-bgWhite">*/}
      {/*    <MetaData metaData={metaData} />*/}
      {/*    <div className="bg-gray-bgWhite">*/}
      {/*      <TableWrapper>*/}
      {/*        <LatestItem key={1} title={t('Latest block')} icon="latestblock" ListData={[...latestBlock]} />*/}
      {/*        <LatestItem key={2} title={t('Latest transaction')} icon="icon" ListData={latestExtrinsic} />*/}
      {/*      </TableWrapper>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</ContainerBox>*/}
      {/*<BgColor />*/}
    </>
  )
}

export default React.memo(HomePageFrame)
