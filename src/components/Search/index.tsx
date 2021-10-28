import React, { useState } from 'react';
import { Input } from 'antd';
import { useTranslation } from 'react-i18next';
import api from '../../helper/api';

interface SearchProps
{
    className: string;
    selectList?: Boolean;
}
export default function Search({ className }: SearchProps) {
  const {t}  = useTranslation();
  const {Search} = Input;
  const onSearch = async (value: any) => {
    if(value){
      setLoading(true);
      await api(value, window);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <>
      {className === 'NavSearch' ?

        <div className={className}>
          <Search placeholder={t('Search Address/Extrinsics/Blocks')} onSearch={onSearch} disabled={loading}
                  loading={loading} enterButton/>
        </div> :
        <Search className={'Home_pageSearch'} placeholder={t('Search Address/Extrinsics/Blocks')} onSearch={onSearch}
                enterButton disabled={loading} loading={loading}/>
      }
    </>

    )
}
