import React from 'react';
import icon from '../../assets/Group8Copy1.svg';
import Search from '../Search';
import { NavLink, Wrapper } from './style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface HeaderPop {
    showSearch?: boolean
}

export default function Header(showSearch: HeaderPop) {
    const {t} = useTranslation();

    const handleClick = (e: any) => {
        e.persist();
        if (e._targetInst.key === '1') {

        } else if (e._targetInst.key === '2') {
        }
    };
    return (
      <div className="flex flex-row justify-between bg-gray-arrow px-12 screen:px-4">
          <Wrapper>
              <Link to="/"><img src={icon} alt=""/></Link>
              <NavLink onClick={handleClick}>
                  <span className="pl-2 text-gray-white mr-9.5">EXPLORER</span>
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
                  <Link to="/tools">
                      <span key="6" className="topLinkTool">{t('Tools')}</span>
                      <ul className="toolList">
                          <li><Link to='/AccountTransfer'>SS58账号转换</Link></li>
                          <li>查询漏块</li>
                          <li>搜索事件/交易</li>
                      </ul>
                  </Link>
              </NavLink>
          </Wrapper>
          <Search className="NavSearch"/>

      </div>
    );
}
