/** @format */

import React, {useContext} from 'react'
import styled from 'styled-components'
import {useState} from 'react'
const ChangeNetDiv = styled.div`
  position: relative;
  height: 100px;
  cursor: pointer;
  & > div {
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 1px;
    padding: 1rem 1rem;
  }
  &:hover {
    ul {
      display: block;
    }
    img.img2 {
      transform: rotate(-180deg);
      transition: transform 0.5s;
    }
  }
  & > ul {
    position: absolute;
    display: none;
    top: 40px;
    left: 0px;
    width: 144px;
    height: 109px;
    background: #ffffff;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    z-index: 1;
    &.no-show {
      display: none !important;
    }
    & > li {
      width: 100%;
      height: 40px;
      margin-top: 11px;
      padding-left: 15px;
      font-size: 14px;
      font-weight: 400;
      line-height: 40px;
      color: #4a4a4a;
      &:hover {
        background: #f2f5f9;
      }
    }
    .bg-topBar-none {
      background: none !important;
    }
  }
`

interface ChangeNetProps {
  name: boolean
  setNetName: Function
}
function ChangeNet({name, setNetName}: ChangeNetProps): React.ReactElement {
  // const { showUl } = useContext(ChangeNetContext);
  const [test, setTest] = useState(false)
  function changeFun(value: boolean) {
    setTest(true)
    setNetName(value)
  }
  const onMouseEnterUl = () => {
    setTest(false)
  }
  return (
    <ChangeNetDiv className={`${name ? 'border-white' : 'border-blue'}`}>
      <div
        className={`${name ? 'flex flex-row border border-gray-white' : 'flex flex-row border-gray-arrow border'}`}
        onMouseEnter={onMouseEnterUl}>
        {/*<img src={name ? netB : netW} alt="browser" />*/}
        <span className={name ? 'text-white-light px-2 min-w-12 text-center' : 'text-topBar-blue px-2 min-w-12'}>
          {name ? 'TESTNET' : 'MAINNET'}
        </span>
        {/*<img src={name ? pullB : pullW} alt="select" className="img2" />*/}
      </div>
      {
        <ul className={['flex flex-col', test ? 'no-show' : ''].join(' ')}>
          <li className={name ? '' : 'bg-topBar-light'} onClick={() => changeFun(false)}>
            <span>MAINNET</span>
          </li>
          <li className={name ? 'bg-topBar-light' : ''} onClick={() => changeFun(true)}>
            <span>TESTNET</span>
          </li>
        </ul>
      }
    </ChangeNetDiv>
  )
}

export default ChangeNet
