/** @format */

import styled from 'styled-components'

export const ContainerBox = styled.div`
  width: 100%;
  background: black;
  @media screen and (min-width: 1700px) {
    width: 1500px;
    margin: 0 auto;
  }
`

export const TableWrapper = styled.div`
  display: grid;
  column-gap: 24px;
  row-gap: 32px;
  padding: 1rem 6rem 5rem 6rem;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem 2rem 1rem;
  }
`

export const BgColor = styled.div`
  height: 20.6rem;
  position: absolute;
  background-color: black;
  width: 100%;
  z-index: 0;
  top: 48px;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`

export const TableWrapperSearch = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  place-content: space-around space-evenly;
  padding: 3rem 6rem 2rem 6rem;
  position: relative;
  @media screen and (max-width: 1150px) {
    grid-template-columns: 100%;
    padding: 1rem;
    > div {
      > div {
        fnt-size: 1.5rem !important;
      }
    }
  }

  .bgImage {
    position: relative;
    max-width: none;
    object-fit: cover;
    z-index: 1;
    top: 22px;
    margin: auto;
    @media screen and (max-width: 1150px) {
      top: 10px;
      z-index: 1;
    }
    @media screen and (max-width: 1150px) {
      width: 100%;
      height: 100%;
    }
  }

  .Home_pageSearch {
    width: 70%;
    @media screen and (max-width: 1150px) {
      width: 100%;
    }
  }
`

export const EchartBoxSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  border: 1px solid rgba(105, 168, 237, 0.21);
  background: #111519 !important;
  opacity: 1;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 10rem;
  }
`
