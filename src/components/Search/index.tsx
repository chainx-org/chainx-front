import React, {useEffect, useState} from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import api from '../../helper/api';
import {useLocation} from 'react-router-dom'

interface SearchProps {
  className: string;
  selectList?: Boolean;
}

export default function Search({className}: SearchProps) {
  const {t} = useTranslation();
  const {Search} = Input;
  const {pathname} = useLocation()
  const onSearch = async (value: any) => {
    if (value ?? '' !== '') {
      setLoading(true);
      await api(value, window , setLoading).then(()=>{
        setLoading(false);
      })
    }
  };
  const keyPressSearch = (e: any)=>{
    const value = e.target.value;
    onSearch(value)
  }

  useEffect(()=>{},[pathname])
  const [loading, setLoading] = useState(false);
  return (
    <>
      {className === 'NavSearch' ?
        <div className={className}>
          <Search placeholder={t('Search Address/Extrinsics/Blocks')} onPressEnter={keyPressSearch} onSearch={onSearch}
                  disabled={loading}
                  loading={loading} enterButton/>
        </div> :
        <Search className={'Home_pageSearch'} placeholder={t('Search Address/Extrinsics/Blocks')}
                onPressEnter={keyPressSearch} onSearch={onSearch}
                enterButton disabled={loading} loading={loading}/>
      }
    </>

  );
}
