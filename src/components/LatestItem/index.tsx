import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LinkX, ShorterLink } from '../../components/LinkX';
import Operation from '../Operation';
import TimeStatus from '../TimeStatus';

interface LatestItemPop {
  title: string,
  icon: string,
  ListData: Array<any>,
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #E9E9E9;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  @media screen and (max-width: 1150px) {
    font-size: 14px;
    > div {
      > span {
        font-size: 16px;
      }
    }
  }
`;

const LatestItemBox = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  @media screen and (max-width: 1150px) {
    font-size: 12px !important;
    //width: 21.5rem;
    > div {
      > span {
        font-size: 16px;
      }
    }
  }
`;
export default function LatestItem({title, icon, ListData}: LatestItemPop) {
  const {t} = useTranslation();

  function linkToChain() {
    title === t('Latest block') ? window.location.href = window.location.origin + '/chain' :
      window.location.href = window.location.origin + '/chain/extrinsic';
  }

  return (
    <ItemContainer>
      <div className="flex flex-row justify-between text-homeText-gray"
           style={{borderBottom: '1px solid #E9E9E9', padding: '1rem'}}>
        <span className="text-gray-backgroundGray text-xl font-medium">{title}</span>
        <div id="homePageBtn" onClick={() => linkToChain()}>
          <span>{t('See All')}</span>
        </div>
      </div>
      <LatestItemBox>
        {title === t('Latest block') ?
          ListData?.map((item, index) => {
            return (
              <div className="px-4" key={index}>
                <div className="flex flex-row justify-start py-3 overflow-scroll"
                     style={{borderBottom: '1px solid #E9E9E9'}}>
                  <div className="latestDiv">
                    <span>BX</span>
                  </div>
                  <div className="flex flex-col justify-start ml-4 w-overSpread">
                    <div className=" flex flex-row justify-between text-homeText-gray text-homeText-gray">
                      <LinkX linkUrl={`/blockDetails/${item.number}`} content={item.number} style={{fontSize: '16px'}}/>
                      <div className="flex flex-row">
                        <div className="inline-block mr-1">{t('Validator')}</div>
                        <LinkX linkUrl={`/nodeDetails/${item.address}`} content={item.nikename}
                               style={{fontSize: '16px'}}/>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between text-homeText-gray">
                      <div>
                        <div className="inline-block mr-1">{t('include')}</div>
                        <div
                          className="inline-block mr-1">{item.extrinsicsCnt ? item.extrinsicsCnt : 0}{t('extrinsic')}</div>
                        <span>{item?.event ? item?.event : 0}{t('event')}{item?.event ? item?.event : 0}</span>
                      </div>
                      <div>
                        <TimeStatus content={item.timestamp}/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>);
          })
          : ListData?.map((item, index) => {
            return (
              <div className="px-4" key={index}>
                <div className="flex flex-row justify-start py-3 overflow-scroll"
                     style={{borderBottom: '1px solid #E9E9E9'}}>
                  <div className="latestDiv">
                    <span>TX</span>
                  </div>
                  <div className="flex flex-col justify-start ml-4 w-overSpread">
                    <div className="flex flex-row justify-between text-homeText-gray text-homeText-gray">
                      <LinkX linkUrl={`/extrinsicDetails/${item.hash}`}
                                   content={(item?.indexer?.blockHeight)?(item?.indexer?.blockHeight):'' + '-' + (item?.indexer?.index)?(item?.indexer?.index):''}
                                   style={{fontSize: '16px'}}/>
                      <div className="flex flex-row">
                        <ShorterLink linkUrl={`/extrinsicDetails/${item.hash}`} content={item.hash}/>
                        {/*<img src={iconImg} alt="" style={{width: '12px', height: '12px'}}/>*/}
                      </div>
                    </div>
                    <div className="flex flex-row justify-between text-homeText-gray">
                      <div>
                        <Operation mini={true} content={(item.section)?(item.section):'' + '-' + (item.name)?(item.name):''} more={true}/>
                      </div>
                      <div>
                        <TimeStatus content={item?.indexer?.blockTime}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>);
          })}
      </LatestItemBox>
    </ItemContainer>
  );

}
