/** @format */

import React, {useRef, useState} from 'react'
import icon from '../../assets/Group8Copy1.svg'
import Search from '../Search'
import {HeardLine, HomeSearch, MobileSearch, NavLink, Wrapper} from './style'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {useOnClickOutside} from '../../helper/hooks'
import MobileMenu from '../MobileMenu'

function Header(props: any) {
  const {t} = useTranslation()
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setShowMenu(false))
  return (
    <>
      <HomeSearch>
        <div className="w-overSpread flex flex-row justify-between bg-gray-arrow desktop:px-12 screen:px-4 screen:py-4">
          <Wrapper className="relative z-10">
            <div>
              <Link to="/">
                <img src={icon} alt="" style={{maxWidth: 'none', width: '93px', height: '20px'}} />
              </Link>
            </div>
            <HeardLine />
            <span
              className="pl-3 text-gray-white mr-9.5"
              style={{
                letterSpacing: '1px',
                fontWeight: 'bold',
                lineHeight: '19px',
                fontSize: '19px',
              }}>
              EXPLORER
            </span>
            <NavLink>
              <Link to="/">
                <span key="1" className="toplinkName">
                  {t('Home')}
                </span>
              </Link>
              <Link to="/chain">
                <span key="2" className="toplinkName">
                  {t('Chain')}
                </span>
              </Link>
              <Link to="/validators">
                <span key="3" className="toplinkName">
                  {t('Cross Block')}
                </span>
              </Link>
              <Link to="/crossBlock">
                <span key="4" className="toplinkName">
                  {t('Cross Bridge')}
                </span>
              </Link>
              <div className="topLink" style={{cursor: 'pointer'}}>
                <span key="6" className="topLinkTool">
                  {t('Tools')}
                </span>
                <ul className="toolList">
                  <li key={1}>
                    <Link to={'/tools/ss58'}>{t('Transform Address/Public Key')}</Link>
                  </li>
                  <li key={2}>
                    <Link to={'/tools/SearchEvent'}>{t('Search Events/Extrinsics')}</Link>
                  </li>
                </ul>
              </div>
            </NavLink>
          </Wrapper>
          {props.showSearch && <Search className="NavSearch" />}
        </div>
      </HomeSearch>
      <MobileSearch>
        <div className="w-overSpread flex flex-col justify-atart bg-gray-arrow px-4 pt-2 pb-4">
          <div className="flex flex-row justify-between">
            <Wrapper className="relative z-10">
              <div className="flex flex-row justify-start">
                <div>
                  <Link to="/">
                    <img src={icon} alt="" style={{maxWidth: 'none', width: '93px', height: '20px'}} />
                  </Link>
                </div>
                <HeardLine />
                <span
                  className="pl-3 text-gray-white mr-9.5"
                  style={{
                    letterSpacing: '1px',
                    fontWeight: 'bold',
                    lineHeight: '19px',
                    fontSize: '19px',
                  }}>
                  EXPLORER
                </span>
              </div>
            </Wrapper>
          </div>
          <MobileMenu />
          {props.showSearch && <Search className="NavSearch" />}
        </div>
      </MobileSearch>
    </>
  )
}

export default React.memo(Header)
