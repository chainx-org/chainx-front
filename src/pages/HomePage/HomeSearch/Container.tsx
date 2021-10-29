import React, { useEffect, useRef, useState } from 'react';
import LatestItem from '../../../components/LatestItem';
import HomeSearch from './HomeSearch';
import { BgColor, ContainerBox, TableWrapper } from '../style';
import MetaData from '../../../components/MetaData';
import { useTranslation } from 'react-i18next';
import { get } from '../../../hooks/useApi';
import highSure from '../../../assets/icon_high_sure.svg';
import holders from '../../../assets/icon_holders.svg';
import transfer from '../../../assets/icon_transfer.svg';
import node from '../../../assets/icon_node.svg';
import issuance from '../../../assets/icon-issuance.svg';

export default function Container() {
    const {t} = useTranslation();
    const [timers, setTimers] = useState<Array<NodeJS.Timeout>>([]);
    const saveCallBack: any = useRef();
    const [latestBlock, setListData] = useState([{
        number: '-',
        nikeName: '-',
        extrinsic: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikeName: '-',
        extrinsic: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikeName: '-',
        extrinsic: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikeName: '-',
        extrinsic: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikeName: '-',
        extrinsic: '-',
        event: '-',
        exe: '-',
        time: '-'
    }]);
    const [latestExtrinsic, setLatestExtrinsic] = useState([])
    const [metaData, setMetaData] = useState([{
        icon: highSure,
        name: t('Finalized Block'),
        data: '-'
    }, {
        icon: highSure,
        name: t('Latest Block'),
        data: '-'
    }, {
        icon: holders,
        name: t('Total Extrinsics'),
        data: '-'
    }, {
        icon: holders,
        name: t('Total Accounts'),
        data: '-'
    }, {
        icon: transfer,
        name: t('Transfer Count'),
        data: '-'
    }, {
        icon: node,
        name: t('Total Validators'),
        data: '-'
    }, {
        icon: issuance,
        name: t('Total Issuance(PCX)'),
        data: '-'
    }, {
        icon: issuance,
        name: t('Turnout'),
        data: '-'
    }]);
    const [firstInit, InitCallBack] = useState(true);

    //获取metaData数据
    const getHomeMetaData = async () => {
        const {latestChainStatus}: any = await get('/latestChainStatus', '');
        setMetaData([...[{
            icon: highSure,
            name: t('Finalized Block'),
            data: latestChainStatus.finalized
        }, {
            icon: highSure,
            name: t('Latest Block'),
            data: latestChainStatus.best
        }, {
            icon: holders,
            name: t('Total Extrinsics'),
            data: latestChainStatus.extrinsic_count
        }, {
            icon: holders,
            name: t('Total Accounts'),
            data: latestChainStatus.account_count
        }, {
            icon: transfer,
            name: t('Transfer Count'),
            data: latestChainStatus.transfer_count
        }, {
            icon: node,
            name: t('Total Validators'),
            data: latestChainStatus.validator_count
        }, {
            icon: issuance,
            name: t('Total Issuance(PCX)'),
            data: latestChainStatus.pcx_issuance/100000000
        }, {
            icon: issuance,
            name: t('Turnout'),
            data: ((latestChainStatus.totalValidatorBonded + latestChainStatus.totalNominationSum) /
              latestChainStatus.pcx_issuance*100).toFixed(2)+'%'
        }]]);
    };
    const getLatestBlockData = async () => {
        const {latestBlocks}: any = await get('/latestBlock', '');
        setListData([...latestBlocks]);
    };
    const getLatestExtrinsic = async () => {
        const res: any = await get(`/extrinsics?page=${1}&page_size=${5}`, ``);
        console.log(res.items[0]);
        setLatestExtrinsic(res.items);
    };
    const callBack = () => {
        getHomeMetaData().then();
        getLatestBlockData().then();
        getLatestExtrinsic().then();
        InitCallBack(false);
    };

    useEffect(() => {
        saveCallBack.current = callBack;
        callBack();
        return () => { };
    }, []);

    useEffect(() => {
        const tick = () => {
            saveCallBack.current();
        };
        const timer: NodeJS.Timeout = setInterval(tick, 5000);
        timers.push(timer);
        setTimers(timers);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
      <>
          <ContainerBox>
              <HomeSearch/>
              <div>
                  <MetaData metaData={metaData}/>
                  <div className="bg-gray-bgWhite">
                      <TableWrapper>
                          <LatestItem key={1} title={t('Latest block')} icon="latestblock"
                                      ListData={latestBlock.slice(5)}/>
                          <LatestItem key={2} title={t('Latest transaction')} icon="icon" ListData={latestExtrinsic}/>
                      </TableWrapper>
                  </div>
              </div>
          </ContainerBox>
          <BgColor/>
      </>

    );
}
