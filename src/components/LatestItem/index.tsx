import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LinkXHome, ShorterLink,ShorterLinkHome } from '../../components/LinkX';
import Operation from '../Operation';
import TimeStatus from '../TimeStatus';
import SkeletonItem from './skeletonItem';

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
  @media screen and (max-width: 900px) {
    font-size: 14px;
    > div {
      > span {
        font-size: 16px;
        display: inline-block;
        margin: auto 0;
      }
    }
  }
`;

const LatestItemBox = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  @media screen and (max-width: 900px) {
    font-size: 12px !important;
    //width: 21.5rem;
    > div {
      > span {
        font-size: 16px;
      }
    }
    .latestDiv{
      display: none;
    }
  }
`;
export default function LatestItem({title, icon, ListData}: LatestItemPop) {
  const {t} = useTranslation();

  function linkToChain() {
    title === t('Latest block') ? sessionStorage.setItem('chain','block'):sessionStorage.setItem('chain','extrinsic')
    window.location.href = window.location.origin + '/chain'
  }


  return (
    <ItemContainer>
      <div className="flex flex-row justify-between text-homeText-gray"
           style={{borderBottom: '1px solid #E9E9E9', padding: '1rem'}}>
        <span className="text-gray-backgroundGray font-medium desktop:text-xl screen:text-base">{title}</span>
        <div id="homePageBtn" onClick={() => linkToChain()}>
          <span>{t('See All')}</span>
        </div>
      </div>
      <LatestItemBox className='overflow-scroll' style={{whiteSpace:'nowrap'}}>
        {title === t('Latest block') ?
          <>
            {ListData.length>0?ListData?.map((item, index) => {
              return (
                <div className="px-4" key={index}>
                  <div className="flex flex-row justify-start py-3 overflow-scroll"
                       style={{borderBottom: '1px solid #E9E9E9'}}>
                    <div className="latestDiv">
                      <span>BX</span>
                    </div>
                    <div className="flex flex-col justify-start desktop:ml-4 w-overSpread">
                      <div className=" flex flex-row justify-between text-homeText-gray text-homeText-gray">
                        <LinkXHome linkUrl={`/blockDetails/${item.number}`} content={item.number}/>
                        <div className="flex flex-row">
                          <div className="inline-block mr-1">{t('Validator')}</div>
                          <LinkXHome linkUrl={`/nodeDetails/${item.address}`} content={item.nikename}/>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between text-homeText-gray">
                        <div>
                          <div className="inline-block mr-1">{t('include')}</div>
                          <div
                            className="inline-block mr-1">{item.extrinsicsCnt ? item.extrinsicsCnt : 0}{t('extrinsic')}</div>
                          <span>{item?.event ? item?.event : 0}{t('event')}</span>
                        </div>
                        <div>
                          <TimeStatus content={item.timestamp} isHome={true}/>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>);
            }):<SkeletonItem/>}
          </>
          : <>
            {ListData.length > 0 ? ListData?.map((item, index) => {
                return (
                  <div className="px-4" key={index}>
                    <div className="flex flex-row justify-start py-3 overflow-scroll"
                         style={{borderBottom: '1px solid #E9E9E9'}}>
                      <div className="latestDiv">
                        <span>TX</span>
                      </div>
                      <div className="flex flex-col justify-start desktop:ml-4  w-overSpread">
                        <div className="flex flex-row justify-between text-homeText-gray text-homeText-gray">
                          {/*<LinkXHome linkUrl={`/extrinsicDetails/${item.hash}`}*/}
                          {/*           content={(item?.indexer?.blockHeight) ? (item?.indexer?.blockHeight) : '' + '-' + (item?.indexer?.index) ? (item?.indexer?.index) : ''}*/}
                          {/*/>*/}
                          <ShorterLinkHome linkUrl={`/extrinsicDetails/${item.hash}`} content={item.hash}/>
                          <div className="flex flex-row">
                            {/*<ShorterLinkHome linkUrl={`/extrinsicDetails/${item.hash}`} content={item.hash}/>*/}
                            {/*<img src={iconImg} alt="" style={{width: '12px', height: '12px'}}/>*/}
                            <ShorterLinkHome linkUrl={`/addressDetails/${item.signer}`} content={item.signer}/>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between text-homeText-gray">
                          <div>
                            <Operation mini={true}
                                       content={(item.section) + '-' + (item.name)}
                                       more={true}/>
                          </div>
                          <div>
                            {/*<TimeStatus content={item?.indexer?.blockTime} isHome={true}/>*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>);
              }) :
              <SkeletonItem/>}
          </>}
      </LatestItemBox>
    </ItemContainer>
  );

}
