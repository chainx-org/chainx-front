/** @format */

import {types, Instance, onSnapshot} from 'mobx-state-tree'
import {ChainMeta} from './ChainMeta'
const RootModel = types
  .model({
    chainMeta: ChainMeta,
  })
  .actions(self => ({
    afterCreate() {},
  }))

const initialState = RootModel.create({
  chainMeta: {
    isLoading: false,
    mtLatestBlock: null,
    mtFinalizedBlock: null,
    mtTotalExtrinsics: null,
    mtTotalAccounts: null,
    mtTransferCount: null,
    mtTotalValidators: null,
    mtStakedValue: null,
    mtTotalIssuance: null,
  },
})

export const rootStore = initialState

onSnapshot(rootStore, snapshot => {
  // console.log('Snapshot: ', snapshot);
  // localStorage.setItem('rootState', JSON.stringify(snapshot));
})

export type RootInstance = Instance<typeof RootModel>
