import React from 'react';
import arrow from '../../assets/icon_forward_hover.svg';

interface DetailTitleProps {
  routeTitle: string,
  routePath: Function,
  content: number | string,
  isBlock?: boolean,
  setNowBlock?: any
}

export default function DetailTitle({routeTitle, routePath, content, isBlock, setNowBlock}: DetailTitleProps) {

  const increaseBlock = () => {
    setNowBlock(Number(content) + 1);
    window.location.pathname = `blockDetails/${Number(content) + 1}`;
  };
  const reduceBlock = () => {
    setNowBlock(Number(content) - 1);
    window.location.pathname = `blockDetails/${Number(content) - 1}`;
  };

  return (<div className="flex flex-row justify-between px-4 py-4">
    <div>
      <span className="text-gray-white font-medium">{routeTitle}</span>
      {isBlock ? <span className="text-topBar-blueLight font-medium"> #{content}</span>
        : <span className="text-topBar-blueLight font-medium"> {content}</span>
      }
      {isBlock ?
        <>
          <img src={arrow} alt="" style={{display: 'inline-block', transform: 'rotateY(180deg)'}}
               onClick={reduceBlock}/>
          <img src={arrow} alt="" style={{display: 'inline-block'}} onClick={increaseBlock}/>
        </> : ''}

    </div>
    <span className="text-gray-white font-medium">{routePath()}</span>
  </div>);

}