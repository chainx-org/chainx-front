import React, { useEffect, useRef, useState } from 'react';
import LatestItem from '../../components/LatestItem';
import HomeSearch from './HomeSearch';
import { BgColor, ContainerBox, TableWrapper } from './HomeStyle';
import MetaData from '../../components/MetaData';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/useApi';
import highSure from '../../assets/icon_high_sure.svg';
import Latest from '../../assets/icon_new high.svg';
import Extrinsics from '../../assets/icon_sign.svg';
import Accounts from '../../assets/icon_holders.svg';
import Count from '../../assets/icon_transfer.svg';
import Validators from '../../assets/icon_node.svg';
import Staked from '../../assets/icon_zhiya.svg';
import Issuance from '../../assets/icon-issuance.svg';
import {accuracyInt } from '../../helper/hooks';
import i18n from '../../i18n';

export default function Container() {
    const {t} = useTranslation();
    const saveCallBack: any = useRef();
    const [timers, setTimers] = useState<Array<NodeJS.Timeout>>([]);
    const [latestBlock, setListData] = useState<any>('');
    const [latestExtrinsic, setLatestExtrinsic] = useState([])
    const [metaData, setMetaData] = useState([{
        icon: highSure,
        name: t('Finalized Block'),
        data: '-'
    }, {
        icon: Latest,
        name: t('Latest Block'),
        data: '-'
    }, {
        icon: Extrinsics,
        name: t('Total Extrinsics'),
        data: '-'
    }, {
        icon: Accounts,
        name: t('Total Accounts'),
        data: '-'
    }, {
        icon: Count,
        name: t('Transfer Count'),
        data: '-'
    }, {
        icon: Validators,
        name: t('Total Validators'),
        data: '-'
    }, {
        icon: Issuance,
        name: t('Total Issuance(PCX)'),
        data: '-'
    }, {
        icon: Staked,
        name: t('Staked Value'),
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
            icon: Latest,
            name: t('Latest Block'),
            data: latestChainStatus.best
        }, {
            icon: Extrinsics,
            name: t('Total Extrinsics'),
            data: latestChainStatus.extrinsic_count
        }, {
            icon:Accounts,
            name: t('Total Accounts'),
            data: latestChainStatus.account_count
        }, {
            icon: Count,
            name: t('Transfer Count'),
            data: latestChainStatus.transfer_count
        }, {
            icon: Validators,
            name: t('Total Validators'),
            data: latestChainStatus.validator_count
        }, {
            icon: Issuance,
            name: t('Total Issuance(PCX)'),
            data: accuracyInt(latestChainStatus.pcx_issuance)
        }, {
            icon: Staked,
            name: t('Staked Value'),
            data: ((latestChainStatus.totalValidatorBonded + latestChainStatus.totalNominationSum) /
              latestChainStatus.pcx_issuance*100).toFixed(2)+'%'
        }]]);
    };
    const getLatestBlockData = async () => {
        const {latestBlocks}: any = await get('/latestBlock', '');
        let result = latestBlocks.slice(0,5)
        setListData([...result]);
    };
    const getLatestExtrinsic = async () => {
        const res: any = await get(`/extrinsics?page=${1}&page_size=${5}`, ``);
        setLatestExtrinsic(res.items);
    };
    const callBack = () => {
        getHomeMetaData().then();
        getLatestBlockData().then();
        getLatestExtrinsic().then();
        InitCallBack(false);
    };

    useEffect(() => {
        const tick = () => {
            saveCallBack.current();
        };
        const timer: NodeJS.Timeout = setInterval(tick, 5000);
        console.log('creact timer')
        timers.push(timer);
        setTimers(timers);
        return () => {
            clearInterval(timer);
            console.log('clear timer')
        };
    }, []);

    useEffect(() => {
        saveCallBack.current = callBack;
        callBack();
        return () => { };
    }, [i18n.language]);


    return (
      <>
          <ContainerBox>
              <HomeSearch/>
              <div className='bg-gray-bgWhite'>
                  <MetaData metaData={metaData}/>
                  <div className="bg-gray-bgWhite">
                      <TableWrapper>
                          <LatestItem key={1} title={t('Latest block')} icon="latestblock"
                                      ListData={[...latestBlock]}/>
                          <LatestItem key={2} title={t('Latest transaction')} icon="icon" ListData={latestExtrinsic}/>
                      </TableWrapper>
                  </div>
              </div>
          </ContainerBox>
          <BgColor/>
      </>

    );
}
