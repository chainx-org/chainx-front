import React from 'react'
import { Input, Space } from 'antd';
import styled from 'styled-components';

interface SearchProps
{
    className: string;
    selectList?: Boolean;
}
export default function Search({ className }: SearchProps)
{
    const Home_pageSearch = styled.div`

    `;
    const { Search } = Input;
    const onSearch = () =>
    {

    }
    return (
        <>
            {className === 'NavSearch' ?
                <div className={className} style={{ border: '1px solid rgba(105, 168, 237, 0.21)' }} >
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </div> :
                <Search className={'Home_pageSearch'} placeholder="input search text" onSearch={onSearch} enterButton />
            }
        </>

    )
}
