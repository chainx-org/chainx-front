import styled from 'styled-components';

export const WrapperBridge = styled.div`
  background: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  > div:nth-child(-n+3) {
    .line-div {
      top: 4px;
    }
  }

  > div:nth-child(3n+0) {
    .line-div {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 50% 50%;
    > div:nth-child(n+5) {
      .container-div {
        border-bottom: 0px !important;
      }
    }
  }

  > div:nth-child(-n+3) {
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

`;
export const CardDiv = styled.div`
  height: 87.5px;
  display: flex;
  flex-direction: column;
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