import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Search from '../../components/Search';
import { ContainerEvent, Wrapper } from '../../components/CardBox/style';
import pulldown from '../../assets/icon-pulldown.svg';
import Block from '../Chain/block';

export default function SearchEvent() {
  const {t} = useTranslation();
  const [nowSearch, setNowSearch] = useState('Event');


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
      <div className="my-4">
        <Search className="Home_pageSearch "/>
      </div>
      <div className="px-24 pt-8 pb-16 bg-gray-bgWhite screen:px-4 medium:px-4">
        <Wrapper>
          <Block/>
        </Wrapper>
      </div>
    </div>
  );
}
