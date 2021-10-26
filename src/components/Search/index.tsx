import React from 'react';
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
    let result = await api(value,window);
    console.log(result)
  };
  return (
    <>
      {className === 'NavSearch' ?

        <div className={className} style={{border: '1px solid rgba(105, 168, 237, 0.21'}}>
          <Search placeholder={t('Search Address/Extrinsics/Blocks')} onSearch={onSearch} enterButton/>
        </div> :
        <Search className={'Home_pageSearch'} placeholder={t('Search Address/Extrinsics/Blocks')} onSearch={onSearch}
                enterButton/>
      }
    </>

    )
}
