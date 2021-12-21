/** @format */
import React from 'react'
import Home from '../pages/HomePage/Container'
import Chain from '../pages/Chain'
import Validator from '../pages/Validator'
import CrossBlock from '../pages/CrossBlock'
import AccountTransfer from '../pages/AccountTransfer'
import SS58 from '../pages/SS58'
import searchPage from '../pages/SearchPage'
import blockDetails from '../pages/BlockDetails'
import extrinsicDetails from '../pages/ExtrinsicsDetails'
import addressDetails from '../pages/AddressDetails'
import NodeDetails from '../pages/NodeDetails'
import NoDataPage from '../pages/NoData'
import SearchEvent from '../pages/SearchEvent'

export interface RouteItem {
  path: string
  component: React.FC
  exact: boolean
}

export const routeList: RouteItem[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/tools/SearchEvent',
    component: SearchEvent,
    exact: true,
  },
  {
    path: '/tools/SS58',
    component: SS58,
    exact: true,
  },
  {
    path: '/Search',
    component: searchPage,
    exact: false,
  },
  {
    path: '/AccountTransfer',
    component: AccountTransfer,
    exact: false,
  },
  {
    path: '/blockDetails',
    component: blockDetails,
    exact: false,
  },
  {
    path: '/extrinsicDetails',
    component: extrinsicDetails,
    exact: false,
  },
  {
    path: '/nodeDetails',
    component: NodeDetails,
    exact: false,
  },
  {
    path: '/addressDetails',
    component: addressDetails,
    exact: false,
  },
  {
    path: '/crossBlock',
    component: CrossBlock,
    exact: false,
  },
  {
    path: '/validators',
    component: Validator,
    exact: false,
  },
  {
    path: '/chain',
    component: Chain,
    exact: false,
  },
  {
    path: '/Nodata',
    component: NoDataPage,
    exact: false,
  },
]
