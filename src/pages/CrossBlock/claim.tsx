import {useTranslation} from 'react-i18next';
import React from 'react';
import swapEndian from '../../helper/swapEndian';
import ChainXTable from '../../components/Table/table';

export default function Claim() {
    const {t} = useTranslation();

    const chainColumns = [
        {
            title: t('Bitcoin Transaction Hash'),
            dataIndex: 'Bitcoin Transaction Hash',
            key: 'Bitcoin Transaction Hash',
            render: (text: any, record: any) => {
                return (
                    <a className='inline-block text-blue-aText font-medium'
                       href={`https://live.blockcypher.com/btc/tx/${swapEndian(record.data[0])}/`} target="_Blank">
                        {((swapEndian(record.data[0]))?.substring(0, 7).concat('...').concat(((swapEndian(record.data[0]))?.substring(((swapEndian(record.data[0])).length - 5)))))}
                    </a>
                );
            }
        },
        {
            title: t('Bitcoin Source Address'),
            dataIndex: 'Bitcoin Source Address',
            key: 'Bitcoin Source Address',
            render: (text: any, record: any) => {
                return (
                    <a className='inline-block text-blue-aText font-medium'
                       href={`https://live.blockcypher.com/btc/address/${record.data[1]}/`}
                       target="_Blank">{'0x'.concat(record.data[1])}</a>
                );
            }
        }
    ];

    return (
        <ChainXTable Columns={chainColumns} urlControl={'/crossblocks/bitcoin/unclaim?'} result={'items'} keyNum={7}/>
    );
}
