import React from 'react'
import { Pagination } from 'antd';

interface PaginationXProps
{
    size: string;
}
export default function PaginationX(size: PaginationXProps)
{

    return (
        <div className="mt-4">
            <Pagination defaultCurrent={6} total={500} hideOnSinglePage={false} size='small' />
        </div>
    )
}



