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
  min-height: 688px;
  @media screen and (min-width: 1600px) {
    width: 1500px;
    margin: 0 auto;
  }
`;

export const WrapperWith= styled.div`
  min-height: 400px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: 1px solid #E9E9E9;
`;

export const WrapperList = styled.div`
  min-height: 688px;
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
  min-height: 688px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: 1px solid #E9E9E9;
`;

export const ListBgColor = styled.div`
  height: 8rem;
  position: fixed;
  background-color: black;
  width: 100%;
  z-index: 0;
  top: 48px
;
`;