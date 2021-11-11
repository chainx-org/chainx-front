import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'antd';
import { ContainerEvent, Wrapper,SearchBox } from '../../components/CardBox/style';
import pulldown from '../../assets/icon-pulldown.svg';
import  Event from './searchEvent'
import  Exc from './searchExc'
import api from '../../helper/api';


export default function SearchEvent() {
  const {t} = useTranslation();
  const {Search} = Input;
  const [nowSearch, setNowSearch] = useState('Event');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const onSearch = async (value: any) => {
    if(value??'' !== ''){
      setLoading(true);
      setInputValue(value)
    }
  };
  return (
    <div className="Container">
      <ContainerEvent>
        <div className="flex flex-row">
          <span className="selectiveText">{t('selective type')}</span>
          <div className="toolSearch">
            <div className="showSelect"><span>{nowSearch}</span></div>
            <div className="selectBtn">
              <img src={pulldown} alt=""
                   style={{width: '24px', height: '24px', display: 'inline-block', margin: 'auto 0'}}/>
            </div>
            <ul className="toolList">
              <li>
                <div onClick={() => {setNowSearch('Event');}}>{t('Search Event')}</div>
              </li>
              <li>
                <div onClick={() => {setNowSearch('Extrinsic');}}>{t('Search Extrinsic')}</div>
              </li>
            </ul>
          </div>
          <div className="helpMessage">
            <span className="selectiveText">{'?'}</span>
            <span className="selectiveText">{t('Help')}</span>
            <div className="popverMessage">
              {t('popMessage')}
            </div>
          </div>
        </div>
      </ContainerEvent>
      <SearchBox className="my-4">
        <Search className={'Home_pageSearch'} placeholder={t('Please select the type before searching')} onSearch={onSearch}
        enterButton disabled={loading} loading={loading}/>
      </SearchBox>
      <div className="pt-8 pb-16 bg-gray-bgWhite screen:px-4 medium:px-4">
        <Wrapper>
          {nowSearch === 'Event'?<Event value={inputValue}/>:<Exc value={inputValue}/>}
        </Wrapper>
      </div>
    </div>
  );
}
