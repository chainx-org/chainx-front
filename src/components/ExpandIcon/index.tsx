/** @format */

import pulldownIcon from '../../assets/icon_pulldown_list.svg'
import moreIcon from '../../assets/icon_more.svg'
import React, {useEffect} from 'react'

export default function ExpandIcon(expanded: any, onExpand: any, record: any) {
  useEffect(() => {}, [])
  return (
    <>
      {expanded ? (
        <img
          src={pulldownIcon}
          alt=""
          style={{cursor: 'pointer', width: '2.5rem', maxWidth: 'none'}}
          onClick={e => onExpand(record, e)}
        />
      ) : (
        <img
          src={moreIcon}
          alt=""
          style={{cursor: 'pointer', width: '2.5rem', maxWidth: 'none'}}
          onClick={e => onExpand(record, e)}
        />
      )}
    </>
  )
}
