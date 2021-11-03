import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import TableX from '../../components/Table';
import { get } from '../../hooks/useApi';
import { LinkX, Normal, ShorterLink } from '../../components/LinkX';
import TrustTag from '../../components/TrustTag';
import { accuracy } from '../../helper/hooks';


export default function Validator() {
  const {t} = useTranslation();
  const [validatorData, setValidatorData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [validatorTotal, setValidatorTotal] = useState(0);
  const [frontList,setFrontList] = useState([])
  const [loading, setLoading] = useState(true);
  const getValidatorData = async () => {
    const res: any = await get(`/validators?page=${0}&page_size=${20}`, ``);
    setValidatorTotal(res.total);
    res.newitems.map((item:any,index:number)=>{
      item.id = index+1
    })
    setValidatorData(res.newitems)
    setFrontList((res.newitems).slice(0,pageSize));
    setLoading(false);
  };
  const chainColumns = [
    {
      title: t('Range'),
      dataIndex: 'id',
      key: 'id',
      render:(text:number)=> {
        return (
          <>
            {text<=10? <div style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '50%',
              background: '#2C83EA',
              position: 'relative'
            }}>
            <span
              style={{display: 'inline-block', position: 'relative', color: 'white', margin: 'auto 0'}}>{text}</span>
            </div>: <div style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '50%',
              background: '#FAFAFA',
              border: '1px solid #080810',
              position: 'relative'
            }}>
            <span
              style={{display: 'inline-block', position: 'relative', color: '#080810', margin: 'auto 0'}}>{text}</span>
            </div>}
          </>

        );
      }
    },
    {
      title: t('NikeName'),
      dataIndex: 'NikeName',
      key: 'NikeName',
      render: (text: any, record: any) => {
        return (
          <div className="flex flex-row">
            <Normal state={(record.referralId) ? (record.referralId) : '-'}/>
            <Normal state={record.isTrust === true ? <TrustTag/> : ''}/>
          </div>);
      }
    },
    {
      title: t('Address'),
      dataIndex: 'Address',
      key: 'Address',
      render: (text: any, record: any) => {
        return (
          <ShorterLink linkUrl={`/addressDetails/${record.account}`} content={record.account}/>);
      }
    },
    {
      title: t('Self Bonded'),
      dataIndex: 'Self Bonded',
      key: 'Self Bonded',
      render: (text: any, record: any) => {
        return (
          <Normal state={(record.selfBonded) ? accuracy(record.selfBonded) : '-'}/>
        );
      },
      sorter: (a: any, b: any) => {
        return a.selfBonded - b.selfBonded
      }
    },
    {
      title: t('Total Nominations(PCX)'),
      dataIndex: 'Nominations',
      key: 'Nominations',
      render: (text: any, record: any) => {
        return (
          <Normal state={(record.totalNomination) ? accuracy(record.totalNomination) : '-'}/>)
      },
      sorter: (a: any, b: any) => {
        return a.totalNomination - b.totalNomination
      }
    },
    {
      title: t('Reward Pot Balance(PCX)'),
      dataIndex: 'Balance',
      key: 'Balance',
      render: (text: any, record: any) => {
        return (
          <Normal state={(record.rewardPotBalance) ? accuracy(record.rewardPotBalance) : '-'}/>)
      },
      sorter: (a: any, b: any) => {
        return a.rewardPotBalance - b.rewardPotBalance
      }
    },
    {
      title: t('Latest Mining'),
      dataIndex: 'Mining',
      key: 'Mining',
      render: (text: any, record: any) => {
        return (
          <LinkX linkUrl={`/blockDetails/${record.lastTotalVoteWeightUpdate}`}
                 content={record.lastTotalVoteWeightUpdate}/>
        );
      }
    }
  ];

  function onChange(page: number, pageSize: any) {
    setPage(page);
    setPageSize(pageSize);
    setLoading(true);
  }

  useEffect(() => {
    if(page === 1){
      getValidatorData().then()
    }else{
      //后端没有提供分页接口，前端进行分页操作。
      setFrontList((validatorData).slice((page-1)*pageSize,pageSize+((page-1)*pageSize)));
      setLoading(false);
    }
  }, [page, pageSize]);

  const pagination = {
    pageSize: pageSize,
    current: page,
    defaultCurrent: page,
    total: validatorTotal,
    showSizeChanger: true,
    showQuickJumper: true,
    hideOnSinglePage:true,
    onChange: (page: number, pageSize: number) => onChange(page, pageSize),
    showTotal: (validatorTotal: number) => `${t('total')} ${validatorTotal} ${t('items')}`
  };

  return (
    <div className="px-8 overflow-scroll">
      <TableX columns={chainColumns} dataList={frontList} pagination={pagination} loading={loading}/>
    </div>
  );
}
