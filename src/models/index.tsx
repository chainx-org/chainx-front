/** @format */

import {types, Instance, onSnapshot} from 'mobx-state-tree'
import {ChainBlock} from './ChainBlock'

const RootModel = types
  .model({
    chainBlock: ChainBlock,
  })
  .actions(self => ({
    afterCreate() {},
  }))

const initialState = RootModel.create({
  chainBlock: {
    address: '',
    items: '',
    page: 0,
    pageSize: 10,
    total: 0,
  },
})

export const rootStore = initialState

onSnapshot(rootStore, snapshot => {
  // console.log('Snapshot: ', snapshot);
  // localStorage.setItem('rootState', JSON.stringify(snapshot));
})

export type RootInstance = Instance<typeof RootModel>
