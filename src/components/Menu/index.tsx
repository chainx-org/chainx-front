import React from 'react'
import { Pagination } from 'antd';

interface MenuXProps
{
    size: string;
}
export default function MenuX(size: MenuXProps)
{

    return (
        <div className="mt-4">
            <Pagination defaultCurrent={6} total={500} hideOnSinglePage={false} size='small' />
        </div>
    )
}



