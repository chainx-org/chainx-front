import styled from 'styled-components';

export const MetaDataBox = styled.div`
  width: 100%;
  height:12rem;
  padding:0rem 6rem;
  background: linear-gradient(to bottom, black 0%, black 30%, #f5f5f5 30%, #f5f5f5 100%);
  border: 0px solid #ccc;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1150px) {
    height: 22rem;
    padding:0rem 1rem;

  }
`;

export const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid #E9E9E9;
  border-radius: 10px;
  width: 100%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  > div:nth-child(-n+4) {
    .line-div {
      top: 20px;
      color: #000;
    }
  }

  > div:nth-child(4n+0) {
    .line-div {
      display: none;
    }
  }

  > div:nth-child(n+5) {
    .container-div {
      border-bottom: 0px !important;
    }
  }

  @media screen and (max-width: 1150px) {
    grid-template-columns: 50% 50%;
    > div:nth-child(n+7) {
      .container-div {
        border-bottom: 0px !important;
      }
    }

    > div:nth-child(2n+2) {
      > div:nth-child(2n+2) {
        border: none !important;
      }
    }

    > div:nth-child(-n+6) {
      .container-div {
        border-bottom: 1px solid #E9E9E9 !important;
      }
    }
  }


`;
export const RightLine = styled.div`
  position: relative;
  height: calc(100% - 20px);
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

  > div {
    > span {
      :nth-child(1) {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
      }

      :nth-child(2) {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 900px) {
    > img {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin: auto 3px auto 0px;
    }

    > div {
      > span {
        :nth-child(1) {
          font-size: 12px;
        }

        :nth-child(2) {
          font-size: 12px;
          font-weight: 500;
        }
      }

    }
  }

  //>div{
  //  .name {
  //    font-size: 14px;
  //    font-weight: 400;
  //    //color: rgba(0, 0, 0, 0.45);
  //    color: red;
  //    line-height: 22
  //  }
  //
  //  .date {
  //    font-size: 18px;
  //    font-weight: bold;
  //    color: #333333;
  //    line-height: 22px;
  //  }
  //
  //}
  

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