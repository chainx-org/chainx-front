import React, { useRef, useState } from 'react';
import icon from '../../assets/Group8Copy1.svg';
import Search from '../Search';
import { NavLink, Wrapper } from './style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Faviconnav from '../../components/SideBars';
import styled from 'styled-components';
import menuIcon from '../../assets/menu.svg';
import { useOnClickOutside } from '../../helper/hooks';
import MobileMenu from '../MobileMenu';

interface HeaderPop {
    showSearch?: boolean
}

const SelectList = styled.div`
    display: none;
    @media screen and (max-width: 1150px) {
        display: block;
    }
`;

const HeardLine = styled.div`
    height: 1.5rem;
    border-right: 1px solid #E9E9E9;
    margin: auto 0;
    margin-left: 12px;;
`;

const HomeSearch = styled.div`
    display: flex;
    .NavSearch {
        margin:auto 0;
        width:20rem;
    }
    @media screen and (max-width: 1150px) {
        display: none;
    }
`;

const MobileSearch = styled.div`
    display: none;
    @media screen and (max-width: 1150px) {
        display: flex;
        .NavSearch {
            width: 100%;
            margin:auto 0;
        }
        .NavSearch .ant-input-group{
            height:2.5rem;
        }
        .NavSearch .ant-input-group .ant-input{
            height:2.5rem;
        }
    }
`;
export default function Header({showSearch}: HeaderPop) {
    // const [showSearch,setShowSearch] = useState(window.location.pathname)
    const {t} = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    // const goHome = () => {
    //     setShowSearch(window.location.pathname)
    // };
    // const handleClick = (e: any) => {
    //     setShowSearch(window.location.pathname)
    //     e.persist();
    //     if (e._targetInst.key === '1') {
    //
    //     } else if (e._targetInst.key === '2') {
    //     }
    // };
    const toolLink = (value: string) => {
        window.location.href = window.location.origin + `${value}`;
    };
    const ref = useRef();
    useOnClickOutside(ref, () => setShowMenu(false));

    // @ts-ignore
    return (
      <>
          <HomeSearch>
              <div
                className="w-overSpread flex flex-row justify-between bg-gray-arrow desktop:px-12 screen:px-4 screen:py-4">
                  <Wrapper className="relative z-10">
                      <div><Link to="/"><img src={icon} alt=""
                                             style={{maxWidth: 'none', width: '93px', height: '20px'}}/></Link></div>
                      <HeardLine></HeardLine>
                      <span className="pl-3 text-gray-white mr-9.5" style={{
                          letterSpacing: '1px', fontWeight: 'bold',
                          lineHeight: '19px', fontSize: '19px'
                      }}>EXPLORER</span>
                      <NavLink>
                          <Link to="/">
                              <span key="1" className="toplinkName">{t('Home')}</span>
                          </Link>
                          <Link to="/chain">
                              <span key="2" className="toplinkName">{t('Chain')}</span>
                          </Link>
                          <Link to="/validators">
                              <span key="3" className="toplinkName">{t('Cross Block')}</span>
                          </Link>
                          <Link to="/crossBlock">
                              <span key="4" className="toplinkName">{t('Cross Bridge')}</span>
                          </Link>
                          <Link to="/tools/ss58">
                              <span key="5" className="toplinkName">{t('Transform Address/Public Key')}</span>
                          </Link>
                          {/*<div className="topLink" style={{cursor: 'pointer'}}>*/}
                          {/*    <span key="6" className="topLinkTool">{t('Tools')}</span>*/}
                          {/*    <ul className="toolList">*/}
                          {/*        <li>*/}
                          {/*            <div*/}
                          {/*              onClick={() => toolLink('/tools/ss58')}>{t('Transform Address/Public Key')}</div>*/}
                          {/*        </li>*/}
                          {/*        /!*<li>*!/*/}
                          {/*        /!*    <div onClick={() => toolLink('/tools/SearchTool')}>{)t('Search Events/Extrinsics'}</div>*!/*/}
                          {/*        /!*</li>*!/*/}
                          {/*    </ul>*/}
                          {/*</div>*/}
                      </NavLink>
                  </Wrapper>
                  {showSearch && <Search className="NavSearch"/>}
                  {/*{<SelectList className="selectList" style={{margin: 'auto 0'}}>*/}
                  {/*    <div onClick={() => setShowMenu(!showMenu)}><img src={menuIcon} alt="" style={{*/}
                  {/*        height: '1.5rem',*/}
                  {/*        width: '1.5rem'*/}
                  {/*    }}/></div>*/}
                  {/*    {showMenu &&*/}
                  {/*    <Faviconnav isCollapsed={showMenu} onClose={() => setShowMenu(!showMenu)}/>*/}
                  {/*    }*/}
                  {/*</SelectList>}*/}
              </div>
              {/*<ListBgColor/>*/}
          </HomeSearch>
          <MobileSearch>
              <div
                className="w-overSpread flex flex-col justify-atart bg-gray-arrow px-4 pt-2 pb-4">
                  <div className='flex flex-row justify-between'>
                      <Wrapper className="relative z-10">
                          <div className='flex flex-row justify-start'>
                              <div><Link to="/"><img src={icon} alt=""
                                                     style={{maxWidth: 'none', width: '93px', height: '20px'}}/></Link>
                              </div>
                              <HeardLine></HeardLine>
                              <span className="pl-3 text-gray-white mr-9.5" style={{
                                  letterSpacing: '1px', fontWeight: 'bold',
                                  lineHeight: '19px', fontSize: '19px'
                              }}>EXPLORER</span>
                          </div>
                      </Wrapper>
                      {/*{<SelectList className="selectList" style={{margin: 'auto 0'}}>*/}
                      {/*    <div onClick={() => setShowMenu(!showMenu)}><img src={menuIcon} alt="" style={{*/}
                      {/*        height: '1.5rem',*/}
                      {/*        width: '1.5rem'*/}
                      {/*    }}/></div>*/}
                      {/*    {showMenu &&*/}
                      {/*    <Faviconnav isCollapsed={showMenu} onClose={() => setShowMenu(!showMenu)}/>*/}
                      {/*    }*/}
                      {/*</SelectList>}*/}
                  </div>
                  <MobileMenu/>
                  {showSearch && <Search className="NavSearch"/>}

              </div>
              {/*<ListBgColor/>*/}
          </MobileSearch>
      </>
    );
}
