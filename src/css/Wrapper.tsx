import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 688px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: 1px solid #E9E9E9;
  @media screen and (min-width: 1600px) {
    width: 1500px;
    margin: 0 auto;
  }
`;

export const WrapperBgWhite = styled.div`
  //min-height: 688px;
  @media screen and (min-width: 1600px) {
    width: 1500px;
    margin: 0 auto;
  }
`;
export const ExtrinWrapper = styled.div`
  //min-height: 688px;
  //background: #FFFFFF;
  //box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  //border-radius: 10px;
  //border: 1px solid #E9E9E9;
  @media screen and (min-width: 1600px) {
    width: 1500px;
    margin: 0 auto;
  }
`;


export const WrapperWith= styled.div`
  min-height: 335px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: 1px solid #E9E9E9;

  .titleName {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
  }

  .titleValue {
    font-size: 18px;
    font-weight: bold;
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1200px) {
    min-height: 400px;
  }`;


export const WrapperList = styled.div`
  .NavSearch{
    width:100%;
    margin: auto 0;
  }
  //min-height: 688px;
  width: 100%;
  position: relative;
  z-index:1;
  @media screen and (max-width: 900px) {
  }
  @media screen and (min-width: 1600px) {
    width: 1500px;
    margin: 0 auto;
  }
`;

export const WrapperDetails = styled.div`
  //min-height: 688px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: 1px solid #E9E9E9;
`;

export const ListBgColor = styled.div`
  height: 205px;
  position: fixed;
  background-color: black;
  width: 100%;
  z-index: 1;
  top: 48px;
  @media screen and (max-width: 1150px) {
    display: none;
    height: 0px;
  }
`;