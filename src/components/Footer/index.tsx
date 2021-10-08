import React from "react";
import { Select } from 'antd';
import logo from "../../assets/Group8white.svg"
import email from "../../assets/email.svg"
import github from "../../assets/github.svg"
import medium from "../../assets/medium.svg"
import telegram from "../../assets/telegram.svg"
import twitter from "../../assets/twitter.svg"
import wechat from "../../assets/wechat.svg"
import wechatImg from "../../assets/wechatImg.png"
import styled from 'styled-components';
import { copy } from "../../helper/copy";
import LangSelect from "./langSelect";


const { Option } = Select;
function Footer(): React.ReactElement
{

    const ImgContent = styled.div`
        display:flex;
        flex-direction:row;
        .wechatimg{
            cursor: pointer;
        }
        
        #wechatHover img{
        display:none;
        }

        #idd {
            position: absolute;
            left: 17rem; //位置和大小自己定义
            top: 2rem; 
            width: 100px;
            height:9rem;
            cursor: pointer;//cursor即鼠标悬浮时鼠标样式,pointer为小手
           }
        #idd img{
           display:none;
        }
        #idd:hover img{
           display:block;
           }
    `;

    function handleChange(value:string) {
        console.log(`selected ${value}`);
    }

    return (
        <div className="flex flex-row justify-between bg-topBar-black mt-29 px-7">
            <ImgContent>
                <div id='span' onClick={() => copy('hi@chainx.org')} >
                    <img src={email} alt="" />
                </div>
                <a href="https://github.com/chainx-org/sherpax-web" target="_black">
                    <img src={github} alt="" />
                </a>
                <a href="https://chainx-org.medium.com/" target="_black">
                    <img src={medium} alt="" />
                </a>
                <a href="https://t.me/chainx_org" target="_black">
                    <img src={telegram} alt=""  />
                </a>
                <a href="https://twitter.com/chainx_org" target="_black">
                    <img src={twitter} alt="" />
                </a>
                <div className="wechatimg">
                    <img src={wechat} alt="" />
                </div>
                <div id="wechatHover">
                    <img src={wechatImg} alt="" />
                </div>
                <div id="idd">
                    <img src={wechatImg} />
                </div>

            </ImgContent>
            <div className={'text-topBar-white mx-0 my-auto'}>All rights reserved © 2019 ChainX</div>
            <LangSelect/>
            <img src={logo} alt=""/>
        </div>
    );
}

export default Footer


