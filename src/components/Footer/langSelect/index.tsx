import React, { useRef, useState } from 'react';
import global from '../../../assets/language.svg';
import selectDown from '../../../assets/icon-pulldown.svg';
import { ChangeNetDiv } from './style';
import { useTranslation } from 'react-i18next';
import { useOnClickOutside } from '../../../helper/hooks';


function LangSelect(): React.ReactElement {
  function selectLang(lang: string) {
    i18n.changeLanguage(i18n.language = lang);
    setIsShow(false);
  }
  const {i18n} = useTranslation();

  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow((true));
  };
  const ref = useRef();
  useOnClickOutside(ref, () => setIsShow(false));

  return (
    // @ts-ignore
    <ChangeNetDiv ref={ref} className="border-white pointer">
      <div style={{border: '1px solid rgba(233, 233, 233, 0.18)'}}
           className={'flex flex-row mx-0 my-auto border-1 rounded-sm bg-topBar-gray opacity-80 ring-select text-topBar-white px-2 py-1'}
      >
        <div className='flex flex-row relative'>
          <img src={global} alt=""/>
          <span className={'mx-2'} onClick={handleClick}>Language</span>
          <img src={selectDown} alt="" style={{maxWidth: 'none'}}/>
        </div>

      </div>
      {
        isShow &&
        <ul className='absolute pointer' style={{bottom: '30px'}}>
          <li>

            <div onClick={() => selectLang('zh')}>English</div>
          </li>
          <li>
            <div onClick={() => selectLang('en')}>中文</div>
          </li>
        </ul>
      }
    </ChangeNetDiv>
   );
}

export default LangSelect;