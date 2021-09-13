import React from 'react'
import first from '../../assets/icon_high_sure.svg'
export default function MetaData()
{
    const metaDataList = [{
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }, {
        icon: 'first',
        name: '确认高度',
        data: '191,121'
    }]
    return (
        <div className="flex flex-row justify-start text-gray-bgWhite">
            {metaDataList?.map((item, i) =>
            {
                return (
                    <>
                        <img src={item.icon} alt="" />
                        <div className="flex flex-col justify-start text-gray-bgWhite">
                            <span>{item.name}</span>
                            <span>{item.data}</span>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
