import React from 'react';
import global from '../../../assets/language.svg';
import selectDown from '../../../assets/icon-pulldown.svg';


function LangSelect(): React.ReactElement {
  //从mobx中拿到当前的lang值，如果有修改，则同步修改mobx中的值
  function selectLang(){

  }
  return (
    <div style={{border: '1px solid rgba(233, 233, 233, 0.18)'}}
         className={'flex flex-row mx-0 my-auto border-1 rounded-sm bg-topBar-gray opacity-80 ring-select text-topBar-white px-2 py-1'}
        onClick={selectLang}>
      <img src={global} alt=""/>
      <span className={'mx-2'}>Language</span>
      <img src={selectDown} alt=""/>
      {/*<img src={selectUp} alt=""/>*/}

    </div>);
}

export default LangSelect;