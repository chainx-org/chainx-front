/** @format */

import {flow, types} from 'mobx-state-tree'
import axios from 'axios'

export const ChainMeta = types
  .model({
    isLoading: types.boolean,
    mtLatestBlock: types.number,
    mtFinalizedBlock: types.number,
    mtTotalExtrinsics: types.number,
    mtTotalAccounts: types.number,
    mtTransferCount: types.number,
    mtTotalValidators: types.number,
    mtStakedValue: types.number,
    mtTotalIssuance: types.number,
  })
  .actions(self => ({
    getNFTDetails: flow(function* getData() {
      try {
        const {data} = yield axios.get(`https://api-v2.chainx.cc/latestChainStatus`)
        self.isLoading = false
        self.mtLatestBlock = data.best
        self.mtFinalizedBlock = data.finalized
        self.mtTotalExtrinsics = data.extrinsic_count
        self.mtTotalAccounts = data.account_count
        self.mtTransferCount = data.transfer_count
        self.mtTotalValidators = data.validator_count
        self.mtStakedValue = data.totalNominationSum
        self.mtTotalIssuance = data.pcx_issuance
        return self
      } catch (e) {
        self.isLoading = false
        return self
      }
    }),
    setIsLoading(newValue: boolean) {
      self.isLoading = newValue
    },
  }))
