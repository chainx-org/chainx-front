import React, { useEffect, useRef, useState } from 'react';
import LatestItem from '../../components/LatestItem';
import HomeSearch from './HomeSearch';
import { ContainerBox, TableWrapper } from './style';
import MetaData from '../../components/MetaData';
import { useTranslation } from 'react-i18next';
import { get } from '../../hooks/api';
import highsure from '../../assets/icon_high_sure.svg';
import holders from '../../assets/icon_holders.svg';
import transfer from '../../assets/icon_transfer.svg';
import node from '../../assets/icon_node.svg';
import issuance from '../../assets/icon-issuance.svg';

export default function Container() {
    const {t} = useTranslation();
    const [timers, setTimers] = useState<Array<NodeJS.Timeout>>([]);
    const saveCallBack: any = useRef();
    const [latestBlock, setListData] = useState([{
        number: '-',
        nikename: '-',
        extrinsicsCnt: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikename: '-',
        extrinsicsCnt: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikename: '-',
        extrinsicsCnt: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikename: '-',
        extrinsicsCnt: '-',
        event: '-',
        exe: '-',
        time: '-'
    }, {
        number: '-',
        nikename: '-',
        extrinsicsCnt: '-',
        event: '-',
        exe: '-',
        time: '-'
    }]);
    const [latestExtrinsic, setLatestExtrinsic] = useState([{
        exe: '-',
        type: '-',
        pcxnum: '-',
        time: '-',
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
    }])
    const [metaData, setMetaData] = useState([{
        icon: highsure,
        name: '已确认块高',
        data: '-'
    }, {
        icon: highsure,
        name: '最新块高',
        data: '-'
    }, {
        icon: holders,
        name: '交易签名',
        data: '-'
    }, {
        icon: holders,
        name: '账户信息',
        data: '-'
    }, {
        icon: transfer,
        name: '转账总数',
        data: '-'
    }, {
        icon: node,
        name: '验证节点',
        data: '-'
    }, {
        icon: issuance,
        name: '总供应量',
        data: '-'
    }, {
        icon: issuance,
        name: '质押率',
        data: '-'
    }]);
    const [firstInit, InitCallBack] = useState(true);
    //获取metaData数据
    const getHomeMetaData = async () => {
        const {latestChainStatus}: any = await get('/latestChainStatus', '');
        setMetaData([{
            icon: highsure,
            name: '已确认块高',
            data: latestChainStatus.finalized
        }, {
            icon: highsure,
            name: '最新块高',
            data: latestChainStatus.best
        }, {
            icon: holders,
            name: '交易签名',
            data: latestChainStatus.extrinsic_count
        }, {
            icon: holders,
            name: '账户信息',
            data: latestChainStatus.account_count
        }, {
            icon: transfer,
            name: '转账总数',
            data: latestChainStatus.transfer_count
        }, {
            icon: node,
            name: '验证节点',
            data: latestChainStatus.validator_count
        }, {
            icon: issuance,
            name: '总供应量',
            data: '-'
        }, {
            icon: issuance,
            name: '质押率',
            data: '-'
        }]);
    };
    const getLatestBlockData = async () => {
        const {latestBlocks}: any = await get('/latestBlock', '');
        setListData(latestBlocks.splice(5));
    };

    const getLatestExtrinsic = async () => {
        const {latestExtrinsics}: any = await get('/latestExtrinsic', '');
        setLatestExtrinsic(latestExtrinsics.splice(5));
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
      <ContainerBox>
          <HomeSearch/>
          <div>
              <MetaData metaData={metaData}/>
              <div className="bg-gray-bgWhite">
                  <TableWrapper>
                      <LatestItem key={1} title={t('Latest block')} icon="latestblock" ListData={latestBlock}/>
                      <LatestItem key={2} title={t('Latest transaction')} icon="icon" ListData={latestExtrinsic}/>
                  </TableWrapper>
              </div>
          </div>
      </ContainerBox>
    );
}
