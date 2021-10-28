import React from 'react';
import logo from '../../assets/Group8white.svg';
import wechatImg from '../../assets/wechatImg.png';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import LangSelect from './langSelect';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

const ImgContent = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: auto 0;

  > a {
    display: inline-block;
  }

  .weChatImg {
    cursor: pointer;
  }

  .wechatHover img {
    display: none;
      }

      .wechatHoverImg {
        position: absolute;
        left: 15rem; //位置和大小自己定义
        top: -6rem;
        width: 100px;
        height: 9rem;
        cursor: pointer; //cursor即鼠标悬浮时鼠标样式,pointer为小手
      }

      .wechatHoverImg img {
        display: none;
      }

      .wechatHoverImg:hover img {
        display: block;
      }
    `;

function Footer(): React.ReactElement {

  const {t} = useTranslation()
  function copyEmail(text:string){
    copy(text)
    message.success(t('copy success'))
  }

    return (
      <div
        style={{bottom:'0px'}}
        className="w-overSpread bottom-0 flex bg-topBar-black mt-29 desktop:px-7 desktop:fixed desktop:flex-row desktop:justify-between screen:flex-col screen:items-center">
        <div className="flex flex-row screen:flex-col">
          <ImgContent>
            <a onClick={() => copyEmail('hi@chainx.org')}>
              <img src='https://i.postimg.cc/1XwVYXsb/2x.png' alt="" style={{width:'3rem'}}/>
            </a>
            <a href="https://github.com/chainx-org/sherpax-web" target="_black">
              <img src='https://i.postimg.cc/26qZhTJk/wechat-2x-1.png' alt="" style={{width:'3rem'}}/>
            </a>
            <a href="https://chainx-org.medium.com/" target="_black">
              <img src='https://i.postimg.cc/fRKmNVmN/medium-1-2x.png' alt="" style={{width:'3rem'}}/>
            </a>
            <a href="https://t.me/chainx_org" target="_black">
              <img src='https://i.postimg.cc/jjSNdR4J/telegram-2x.png' alt="" style={{width:'3rem'}}/>
            </a>
            <a href="https://twitter.com/chainx_org" target="_black" >
              <img src='https://i.postimg.cc/5tKzXDsK/twitter-2x.png' alt="" style={{width:'3rem'}}/>
            </a>
            <div className="weChatImg" >
              <img src="https://i.postimg.cc/B6d1gH9x/wechat-2x.png" alt="" style={{width: '3rem'}}/>
            </div>
            <div className="wechatHover">
              <img src={wechatImg} alt=""/>
            </div>
            <div className="wechatHoverImg">
              <img src={wechatImg} alt=""/>
            </div>

          </ImgContent>
          <div className={'text-topBar-white mx-0 my-auto'}
               style={{textAlign: 'center', opacity: '38%', fontSize: '14px', marginLeft: '3rem'}}>All rights reserved ©
            2019 ChainX
          </div>
        </div>
        <div className="flex flex-row screen:flex-col">
          <LangSelect/>
          <img src={logo} alt="" className='inline-block h-6 my-auto ml-8 screen:ml-0'/>
        </div>
      </div>
    );
}

export default React.memo(Footer)


