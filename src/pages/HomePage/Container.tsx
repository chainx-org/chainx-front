import React from 'react'
import styled from 'styled-components';
import LatestItem from '../../components/LatestItem';
import HomeSearch from './HomeSearch'
import MetaData from './MetaData'

export default function Container()
{
    const ContainerBox = styled.div`
        width:100%;
        background:black;
    `;
    const ContainerBox1 = styled.div`
        width:1248px;
        margin: 0 auto;
    `;
    const ContainerBox2 = styled.div`
        width:1248px;
        margin: 0 auto;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    `;
    const ListData = [{
        block: 1,
        identifier: 'xl',
        number: 1,
        event: 2,
        exe: 3,
        time: 20
    }, {
        block: 2,
        identifier: 'xl',
        number: 1,
        event: 2,
        exe: 3,
        time: 20
    }, {
        block: 2,
        identifier: 'xl',
        number: 1,
        event: 2,
        exe: 3,
        time: 20
    }, {
        block: 2,
        identifier: 'xl',
        number: 1,
        event: 2,
        exe: 3,
        time: 20
    }, {
        block: 2,
        identifier: 'xl',
        number: 1,
        event: 2,
        exe: 3,
        time: 20
    }]
    const ListData1 = [{
        exe: 1,
        type: 1,
        pcxnum: 909090,
        time: 1212
    }, {
        exe: 2,
        type: 1,
        pcxnum: 909090,
        time: 1212
    }, {
        exe: 3,
        type: 1,
        pcxnum: 909090,
        time: 1212
    }, {
        exe: 4,
        type: 1,
        pcxnum: 909090,
        time: 1212
    }, {
        exe: 5,
        type: 1,
        pcxnum: 909090,
        time: 1212
    }]
    return (
        <ContainerBox>
            <ContainerBox1>
                <HomeSearch />
                <MetaData />
            </ContainerBox1>

            <div className="bg-gray-bgWhite">
                <ContainerBox2>
                    <LatestItem title="最新区块" icon="latestblock" ListData={ListData} />
                    <LatestItem title="最新交易" icon="icon" ListData={ListData1} />
                </ContainerBox2>
            </div>
        </ContainerBox>
    )
}
