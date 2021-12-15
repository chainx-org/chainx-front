/** @format */

import {types} from 'mobx-state-tree'
import {get} from '../hooks/useApi'

export const ChainBlock = types
  .model({
    address: types.string,
    items: types.string,
    page: types.number,
    pageSize: types.number,
    total: types.number,
  })
  .actions(self => ({
    setChainBlock(newChainBlock: any) {
      self.address = newChainBlock.address
      self.items = newChainBlock.items
      self.page = newChainBlock.page
      self.pageSize = newChainBlock.pageSize
      self.total = newChainBlock.total
    },
    async getChainBlock(blockId: string, page: number, pageSize: number) {
      const res: any = await get(`block=${blockId}page=${page - 1}&page_size=${pageSize}`, ``)
      self.setChainBlock(res)
    },
  }))
