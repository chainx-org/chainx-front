// Copyright 2017-2020 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useState } from 'react';
import closeIcon  from '../../assets/icon_close.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// import store from 'store';

interface Props {
  className?: string;
  onClose: any;
  isCollapsed?: boolean;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow-y: auto;
  box-shadow: 6px 0px 20px 0px rgba(0, 0, 0, 0.3);
  width: 0;
  background: #fff;
  color: rgba(0, 0, 0, 0.4);
  transition: .1s;

  &.collapsed {
    width: 12em;
  }

  // &.expanded {

  // }
  &::-webkit-scrollbar {
    display: none;
  }

  .wrappers {
    width: 12em;

    .switchNode {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 0.5em 1.3em 0.5em 1.3em;
      background: rgba(249, 249, 249);
      border: 1px solid #EFEFEF;
      border-radius: 18px;
      margin: 3.5rem 1rem 0.5rem;

      .netInfo {
        text-transform: capitalize;
        min-width: 5.5rem;
      }

      > div {
        margin-right: 0.5em;

        &.circle {
          height: 0.5em;
          width: 0.5em;
          border-radius: 50%;
          background: rgba(52, 198, 154);
        }
      }

      &:hover {
        color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
      }
    }

    ul {
      li {
        padding: 1em 0.8rem 1em 1.5rem;

        &.statusrisk {
          a {
            color: rgba(0, 0, 0, 0.8);
          }
        }

        a {
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.4);

          svg {
            margin-right: 6px;
          }

          &:hover {
            color: rgba(0, 0, 0, 0.8);
            cursor: pointer;
          }
        }
      }
    }

    .linkOutBrowser, .helpicon {
      padding: 1em 1.5em;

      a {
        color: rgba(0, 0, 0, 0.4);

        svg {
          margin-right: 6px;
        }

        &:hover {
          color: rgba(0, 0, 0, 0.8);
          cursor: pointer;
        }
      }
    }

    .linkOutBrowser {
      padding-left: 2em;

      a {
        display: flex;
        align-items: end;

        img {
          margin-left: 6px;
        }
      }
    }
  }

`;

function Sidebars({className = '', onClose, isCollapsed}: Props): React.ReactElement<Props> {
  const {t} = useTranslation();
  const [url, setUrl] = useState<string>('');
  const [recordType, setRecordType] = useState(0);

  const nodeList = ([
    {nodeName: t('Home'), link: '/'},
    {nodeName: t('Chain'), link: '/Chain'},
    {nodeName: t('Cross Block'), link: '/validators'},
    {nodeName: t('Cross Bridge'), link: '/crossBlock'},
    // {nodeName: t('Search Events/Extrinsics'), link: '/tools/SS58'},
    {nodeName: t('Transform Address/Public Key'), link: '/tools/SS58'},

  ]);


  function statusnode(node: any, index: number) {
    setRecordType(index);
  }

  return (
    <Wrapper
      className={`wrapernav ${isCollapsed ? 'collapsed' : 'expanded'}`}
      style={{width:'9rem'}}
    >
      <div className="wrappers">
        <img src={closeIcon} alt="" style={{width:'2rem',height:'2rem',padding:'0.3rem 0.3rem'}} onClick={onClose}/>
        <ul>
          {
            nodeList.map((node: any, index: number) =>
              <li key={index} className={` ${recordType === index ? 'statusrisk' : ''}`}
                  onClick={() => statusnode(node, index)}>
                <Link to={node.link} onClick={onClose}>
                  {node.nodeName}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </Wrapper>
  );
}

export default Sidebars;
