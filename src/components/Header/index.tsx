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
import { ListBgColor } from '../../css/Wrapper';
import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react';

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
export default function Header() {
    const [showSearch,setShowSearch] = useState(window.location.pathname)
    const {t} = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const goHome = () => {
        setShowSearch(window.location.pathname)
    };
    const handleClick = (e: any) => {
        setShowSearch(window.location.pathname)
        e.persist();
        if (e._targetInst.key === '1') {

        } else if (e._targetInst.key === '2') {
        }
    };
    const toolLink = (value: string) => {
        window.location.href = window.location.origin + `${value}`;
    };
    const ref = useRef();
    useOnClickOutside(ref, () => setShowMenu(false));

    // @ts-ignore
    return (
      <div >
          <div className="flex flex-row justify-between bg-gray-arrow px-12 screen:px-4 screen:py-4">
              <Wrapper className='relative z-10'>
                  <div onClick={goHome}><Link to="/" ><img src={icon} alt="" style={{maxWidth:'none'}}/></Link></div>
                  <HeardLine></HeardLine>
                  <span className="pl-3 text-gray-white mr-9.5" style={{
                      letterSpacing: '1px', fontWeight: 'bold',
                      lineHeight: '19px',fontSize:'19px'
                  }}>EXPLORER</span>
                  <NavLink onClick={handleClick}>
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
                      <div className="topLink" style={{cursor: 'pointer'}}>
                          <span key="6" className="topLinkTool">{t('Tools')}</span>
                          <ul className="toolList">
                              <li>
                                  <div onClick={() => toolLink('/tools/ss58')}>{t('Transform Address/Public Key')}</div>
                              </li>
                              {/*<li>*/}
                              {/*    <div onClick={() => toolLink('/tools/SearchTool')}>{t('Search Events/Extrinsics')}</div>*/}
                              {/*</li>*/}
                          </ul>
                      </div>
                  </NavLink>
              </Wrapper>
              {showSearch.length > 2 && <Search className="NavSearch"/>}
              {<SelectList className="selectList" style={{margin: 'auto 0'}}>
                  <div  onClick={() => setShowMenu(!showMenu)}><img src={menuIcon} alt="" style={{
                      height: '1.5rem',
                      width: '1.5rem'
                  }}/></div>
                  {showMenu &&
                  <Faviconnav  isCollapsed={showMenu} onClose={()=>setShowMenu(!showMenu)} />
                  }
              </SelectList>}
          </div>
          {/*<ListBgColor/>*/}
      </div>

    );
}
