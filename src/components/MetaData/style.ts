import styled from 'styled-components';

export const MetaDataBox = styled.div`
  width: 100%;
  height: 12rem;
  background: linear-gradient(to bottom, black 0%, black 30%, #f5f5f5 30%, #f5f5f5 100%);
  border: 0px solid #ccc;
  @media screen and (max-width: 900px) {
    height: 22rem;
  }
`;

export const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid #E9E9E9;
  border-radius: 6px;
  width: 94%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  > div:nth-child(-n+4) {
    .line-div {
      top: 4px;
    }
  }

  > div:nth-child(4n+0) {
    .line-div {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 50% 50%;
    > div:nth-child(n+7) {
      .container-div {
        border-bottom: 0px !important;
      }
    }
  }

  > div:nth-child(-n+4) {
    .container-div {
      border-bottom: 1px solid #E9E9E9 !important;
    }
  }
`;
export const RightLine = styled.div`
  position: relative;
  height: calc(100% - 4px);
  border-right: 1px solid #E9E9E9;
`;

export const Container = styled.div`
  width: 80%;
  border-bottom: 1px solid #E9E9E9;;
  display: flex;
  flex-direction: row;

  > img {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: auto 3px auto 0px;
  }

`;
export const CardDiv = styled.div`
  height: 87.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 36px;
  

  .card-item {
    width: 248px;
    padding-bottom: 21px;

    &.border-bottom {
      border-bottom: 1px solid #E9E9E9FF;
    }

    .name {
      font-size: 14px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22
    }

    .date {
      font-size: 18px;
      font-weight: bold;
      color: #333333;
      line-height: 22px;
    }

  }

  .line {
    //height: 67px;
    width: 1px;
    background-color: #000;
    margin-left: 32px;

    &.line-top {
      position: relative;
      top: -21px;
    }
  }`;