import React from 'react';
import styled from 'styled-components';
import arrow from '../../assets/icon_forward_hover.svg';
import Icon from '../../assets/icon_copy_head_hover.svg';
import copy from 'copy-to-clipboard';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

const DetailSpan = styled.div`
  word-break:normal;
  width:auto;
  display:block;
  white-space:pre-wrap;
  word-wrap : break-word ;
  overflow: hidden ;
`;
interface DetailTitleProps {
  routeTitle: string,
  routePath: Function,
  content: number | string,
  isBlock?: boolean,
  setNowBlock?: any,
  showHeightIcon?:boolean
}

export default function DetailTitle({routeTitle, routePath, content, isBlock, setNowBlock,showHeightIcon}: DetailTitleProps) {
  const {t} = useTranslation()
  const increaseBlock = () => {
    setNowBlock(Number(content) + 1);
    window.location.pathname = `blockDetails/${Number(content) + 1}`;
  };
  const reduceBlock = () => {
    setNowBlock(Number(content) - 1);
    window.location.pathname = `blockDetails/${Number(content) - 1}`;
  };
  const onCopy = () => {
    if (content && copy(`${content}`)) {
      message.success({content:t('copy success')})
    }
  };

  return (
    <div
      className="flex desktop:flex-row desktop:justify-between screen:px-4 desktop:py-2 screen:flex-col screen:justify-start">
      <div className="w-overSpread flex flex-row">
        <span className="text-gray-white text-xl font-medium my-auto">{routeTitle}</span>
        {isBlock ?
          <DetailSpan className="inline-block text-topBar-blueLight font-medium cursor-pointer text-xl h-fitContent pl-1"
                style={{margin: 'auto 0'}}> <span style={{verticalAlign: 'middle'}}>{(content==="undefined-undefined"?'-':'#'+content)}</span></DetailSpan>
          : <DetailSpan className="inline-block text-topBar-blueLight font-medium text-base cursor-pointer h-fitContent pl-1"
                  style={{margin: 'auto 0'}}><span style={{verticalAlign: 'middle'}}>{content==="undefined-undefined"?'-':content}</span> <img src={Icon} onClick={onCopy} alt="" className='inline-block cursor-pointer'/></DetailSpan>
        }
        {showHeightIcon ?
          <>
            <img src={arrow} alt="" style={{display: 'inline-block', transform: 'rotateY(180deg)',width:'48px'}}
                 onClick={reduceBlock} className="cursor-pointer"/>
            <img src={arrow} alt="" style={{display: 'inline-block' ,width:'48px'}} onClick={increaseBlock}
                 className="cursor-pointer"/>
          </> : ''}

      </div>
      <span className="text-gray-white text-xl font-medium mx-0 my-4">{routePath()}</span>
    </div>);

}