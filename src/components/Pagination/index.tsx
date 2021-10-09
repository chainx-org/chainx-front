import React from 'react'
import { Pagination } from 'antd';

interface PaginationXProps
{
    // size: string;
}
export default function PaginationX(size: PaginationXProps)
{

    return (
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={total => `Total ${total} items`}
      />
    )
}



