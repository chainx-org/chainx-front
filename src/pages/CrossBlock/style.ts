/** @format */

import styled from 'styled-components'

export const WrapperBridge = styled.div`
  background: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > div:nth-child(5) {
    & > div:nth-child(2) {
      border-right: 0px solid #e9e9e9 !important;
    }
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        border-right: 0px solid #e9e9e9 !important;
      }
    }
  }
  .itemThree {
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .itemTwo {
    display: none;
    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      > div {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        > div {
          > div {
            > span {
              width: 13rem;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
`

export const RightLine = styled.div`
  width: 1px;
  border-right: 1px solid #e9e9e9;
  height: 80%;
  margin: auto auto;
`

export const BottomLine = styled.div`
  height: 1px;
  border-bottom: 1px solid #e9e9e9;
  width: 80%;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 80%;
  //border-bottom: 1px solid #E9E9E9;;
  display: flex;
  flex-direction: row;
`
export const CardDiv = styled.div`
  height: 87.5px;
  display: flex;
  justify-content: space-between;
  padding-left: 36px;

}

.line {
  //height: 67px;
  width: 1px;
  //background-color: #000;
  margin-left: 32px;

  &.line-top {
    position: relative;
    top: -21px;
  }
}`
