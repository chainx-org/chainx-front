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


    const TableWrapper = styled.div`
        display: grid;
        column-gap: 24px;
        row-gap: 32px;
        padding:9rem 3rem 0rem 3rem;
        grid-template-columns: repeat(auto-fill, minmax(588px, 1fr));
        @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;
            padding:5rem 2rem 0rem 2rem;

        }
    `;
    const FloatBox = styled.div`
        width:100%;
        z-index:999;
        position:absolute;
        margin-top:-50px;
        @media screen and (max-width: 900px) {
            margin-top:-30px;
        }
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
            <HomeSearch />
            {/* <FloatBox> */}
            <MetaData />
            {/* </FloatBox> */}

            <div className="bg-gray-bgWhite">
                <TableWrapper>
                    <LatestItem title="最新区块" icon="latestblock" ListData={ListData} />
                    <LatestItem title="最新交易" icon="icon" ListData={ListData1} />
                </TableWrapper>
            </div>
        </ContainerBox>
    )
}
