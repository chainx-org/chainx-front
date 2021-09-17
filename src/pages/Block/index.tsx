import React from 'react'
import Header from '../../components/Header'
import Menu, { TabInfo } from '../../components/Menu'
import Table from '../../components/Table';

export default function Blocks()
{
    const tabList: TabInfo[] = [
        {
            title: "Assets",
            content: <Table />,
        },
        {
            title: 'Transfer',
            content: <Table />,
        }
    ];
    return (
        <>
            <Header />
            <div className="px-24 py-4">
                <Menu size="lg" tabList={tabList} />
            </div>

        </>
    )
}
