import React from 'react';
import styled from 'styled-components';
import iconImg from '../../assets/icon.png';
import { useTranslation } from 'react-i18next';
import { LinkX, Shorter, ShorterLink } from '../../components/LinkX';
import Operation from '../Operation';

interface LatestItemPop {
  title: string,
  icon: string,
  ListData: Array<any>,
}

export default function LatestItem({title, icon, ListData}: LatestItemPop) {
  const {t} = useTranslation();
  const LatestItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #E9E9E9;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    padding: 16px;
    @media screen and (max-width: 900px) {
      > div {
        > span {
          font-size: 16px;
        }
      }
    }
  `;

  function linkToChain() {
    title === t('Latest block') ? window.location.href = window.location.origin + '/chain' :
      window.location.href = window.location.origin + '/chain/extrinsic';
  }

  return (
    <LatestItem>
      <div className="flex flex-row justify-between">
        <span className="text-gray-backgroundGray text-xl font-medium">{title}</span>
        <div id="homePageBtn" onClick={() => linkToChain()}>
          <span>{t('See All')}</span>
        </div>
      </div>
      {title === t('Latest block') ?
        ListData?.map((item, index) => {
          return (<div className="flex flex-row justify-start px-4 py-4" key={index}>
            <div className="latestDiv">
              <span>BX</span>
            </div>
            <div className="flex flex-col justify-start ml-4 w-overSpread">
              <div className=" flex flex-row justify-between">
                <LinkX linkUrl={`/blockDetails/${item.number}`} content={item.number}/>
                <div className="flex flex-row">
                  <div className="inline-block mr-1">{t('Validator')}</div>
                  <LinkX linkUrl={`/nodeDetails/${item.address}`} content={item.nikename}/>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <div className="inline-block mr-1">{t('include')}{item.number}</div>
                  <div className="inline-block mr-1">{t('extrinsic')}{item.event}</div>
                  <span>{t('event')}{item.exe}</span>
                </div>
                <div>
                  <span>{item.timestamp} {t('Seconds')} {t('ago')}</span>
                </div>
              </div>
            </div>
          </div>);
        })
        : ListData?.map((item, index) => {
          return (<div className="flex flex-row justify-start px-4 py-4" key={index}>
            <div className="latestDiv">
              <span>TX</span>
            </div>
            <div className="flex flex-col justify-start ml-4 w-overSpread">
              <div className="flex flex-row justify-between">
                <ShorterLink linkUrl={`/extrinsicDetails/${item.hash}`} content={item.hash}/>
                <div className="flex flex-row">
                  <Operation content={item.name+'-'+item.section} more={true}/>
                  {/*<img src={iconImg} alt="" style={{width: '12px', height: '12px'}}/>*/}
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <span>{item.section}</span>
                  <span>{t('type')}{item.type}</span>
                </div>
                <div>
                  <Shorter linkUrl={`/nodeDetails/${item.signer}`} content={item.signer}/>
                </div>
              </div>
            </div>
          </div>);
        })}
    </LatestItem>
  );
}
