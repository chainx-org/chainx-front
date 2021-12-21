/** @format */

import {Skeleton} from 'antd'
import React from 'react'

interface ListItemProps {
  className?: string
  children?: React.ReactNode
  title: string
  content: React.ReactNode
  loading: boolean
}
function ListItem({className = '', children, title, content, loading}: ListItemProps): React.ReactElement {
  return (
    <div
      className={`${className} grid desktop:grid-cols-listItem desktop:py-4 screen:pt-4 screen:pb-2 w-full px-8 last:border-0 border-listItem text-sm`}
    >
      <div className='text-black-textColor text-sm min-w-8 font-normal'>{title}</div>
      <div className={`font-normal`}>{loading ? <Skeleton active paragraph={{rows: 0}} /> : content}</div>
    </div>
  )
}

export default ListItem
