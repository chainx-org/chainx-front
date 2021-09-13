import React from 'react'
import { Input, Space } from 'antd';

interface SearchProps
{
    size: string;
    selectList?: Boolean;

}
export default function Search()
{
    const { Search } = Input;
    const onSearch = () =>
    {

    }
    return (
        <div className="mt-4">
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
    )
}
