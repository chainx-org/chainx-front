import React, { useEffect, useState } from 'react';
import { MobileDataBox } from './style';
import { useTranslation } from 'react-i18next';

export default function MobileMenu() {
  const {t} = useTranslation();

  function onDropClick(e: any) {
    const dropdown = e.currentTarget.nextElementSibling;
    const burgerBars: any = [].slice.call(e.currentTarget.children);
    if (!dropdown.classList.contains('dropdown-active')) {
      //If dropdown isn't active give it and the bars their active classes
      dropdown.classList.add('dropdown-active');
      burgerBars[0].classList.add('one-active');
      burgerBars[1].classList.add('two-active');
      burgerBars[2].classList.add('three-active');
    } else if (dropdown.classList.contains('dropdown-active')) {
      //else remove them
      dropdown.classList.remove('dropdown-active');
      burgerBars[0].classList.remove('one-active');
      burgerBars[1].classList.remove('two-active');
      burgerBars[2].classList.remove('three-active');
    }
  }


  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    hamburger?.addEventListener('click', onDropClick);
  }, []);
  const nodeList = ([
    {nodeName: t('Home'), link: '/'},
    {nodeName: t('Chain'), link: '/Chain'},
    {nodeName: t('Cross Block'), link: '/validators'},
    {nodeName: t('Cross Bridge'), link: '/crossBlock'},
    // {nodeName: t('Search Events/Extrinsics'), link: '/tools/SS58'},
    {nodeName: t('Transform Address/Public Key'), link: '/tools/SS58'},

  ]);
  const [recordType, setRecordType] = useState(0);

  function statusnode(node: any, index: number) {
    setRecordType(index);
  }

  return (
    <MobileDataBox>
      <nav className="nav-container">
        <div className="hamburger">
          <div className="nav-bar one"></div>
          <div className="nav-bar two"></div>
          <div className="nav-bar three"></div>
        </div>
        <div className="dropdown">
          {nodeList.map((item: any, index: number)=>
            <a href={item.link} key={index}>
              <p className="drop-item">{item.nodeName}</p>
            </a>
          )
          }
        </div>
      </nav>
    </MobileDataBox>
  );
}
