import React, { useState } from 'react';
import global from '../../../assets/language.svg';
import selectDown from '../../../assets/icon-pulldown.svg';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';


function LangSelect(): React.ReactElement {
  const {t} = useTranslation();

  //从mobx中拿到当前的lang值，如果有修改，则同步修改mobx中的值
  function selectLang() {

  }

  const {i18n} = useTranslation();
  const [name, setName] = useState(false);
  const [test, setTest] = useState(false);
  const onMouseEnterUl = () => {
    setTest(false);
  };
  const ChangeNetDiv = styled.div`
    position: relative;
    margin: auto 0;
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      height: 30px;
      border-radius: 1px;
      padding: 1rem 1rem;
    }

    &:hover {
      ul {
        display: block;
      }
    }

    & > ul {
      position: absolute;
      display: none;
      top: -7rem;
      left: 0px;
      width: 144px;
      height: 109px;
      background: #FFFFFF;
      box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      z-index: 1;

      &.no-show {
        display: none !important;
      }

      & > li {
        width: 100%;
        height: 40px;
        margin-top: 11px;
        padding-left: 15px;
        font-size: 14px;
        font-weight: 400;
        line-height: 40px;
        color: #4a4a4a;

        &:hover {
          background: #F2F5F9;
        }
      }

      .bg-topBar-none {
        background: none !important;
      }
    }`;
  const [isShow,setIsShow] = useState(false)
  const handleClick = ()=>{
    setIsShow((true))
  }
  return (

      <ChangeNetDiv className='border-white'>
        <div style={{border: '1px solid rgba(233, 233, 233, 0.18)'}}
             className={'flex flex-row mx-0 my-auto border-1 rounded-sm bg-topBar-gray opacity-80 ring-select text-topBar-white px-2 py-1'}
             onClick={selectLang}>
        <div className={`${name ? 'flex flex-row border border-gray-white' : 'flex flex-row border-gray-arrow border'}`}
             onMouseEnter={onMouseEnterUl} style={{'position':'relative'}}>
          <img src={global} alt=""/>
          <span className={'mx-2'} onClick={handleClick}>Language</span>
          <img src={selectDown} alt="" style={{maxWidth:'none'}}/>
          {
            isShow&&
            <ul style={{position:'absolute',bottom:'30px'}}>
              <li>
                <div onClick={() => i18n.changeLanguage(i18n.language = 'zh')}
                     className={i18n.language === 'zh' ? 'bg-black-darker' : ''}>English
                </div>
              </li>
              <li>
                <div onClick={() => i18n.changeLanguage(i18n.language = 'en')}
                     className={i18n.language === 'en' ? 'bg-black-darker' : ''}>中文
                </div>
              </li>
            </ul>
          }
        </div>
        </div>
      </ChangeNetDiv>
   );
}

export default LangSelect;