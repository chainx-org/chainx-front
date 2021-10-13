import React from 'react'
import styled from 'styled-components';
import LatestItem from '../../components/LatestItem';
import HomeSearch from './HomeSearch'
import MetaData from '../../components/MetaData'
import { useTranslation } from 'react-i18next';

export default function Container()
{
    const {t} = useTranslation()
    const ContainerBox = styled.div`  
        width:100%;
        background:black;
    `;


    const TableWrapper = styled.div`
        display: grid;
        column-gap: 24px;
        row-gap: 32px;
        padding:1rem 3rem 1rem 3rem;
        grid-template-columns: repeat(auto-fill, minmax(588px, 1fr));
        @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;
            padding:3rem 1rem 2rem 1rem;

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
            <div>
                <MetaData />
                <div className="bg-gray-bgWhite">
                    <TableWrapper>
                        <LatestItem title={t('Latest block')} icon="latestblock" ListData={ListData} />
                        <LatestItem title={t('Latest transaction')} icon="icon" ListData={ListData1} />
                    </TableWrapper>
                </div>
            </div>
            {/* </FloatBox> */}
        </ContainerBox>
    )
}
