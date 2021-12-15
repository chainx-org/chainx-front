/** @format */

import React, {createContext, FC, useContext} from 'react'
import {RootInstance, rootStore} from '../models/index'

export const RootStoreContext = createContext<null | RootInstance>(null)

export function useMst() {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}

export const RootStoreProvider: React.FC = ({children}) => {
  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
}
