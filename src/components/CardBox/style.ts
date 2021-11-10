import styled from 'styled-components';

export const Wrapper = styled.div`
  //min-height: 688px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: 1px solid #E9E9E9;
  position: relative;
  @media screen and (min-width: 1600px) {
    width: 1500px;
    margin: 0 auto;
  }
`;
export const CardTitle = styled.div`

  border-bottom: 1px solid #E9E9E9;
  display: flex;
  flex-direction: row;
  padding: 12px 32px;
  & > img {
    width: 24px;
    height: 24px;
  }

  & > span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 16px;
    font-weight: 500;
    color: #080810;
  }
`;
export const SpliteLine = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  height: 1px;
  background: #E9E9E9;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 34rem;
  //top: 4rem;
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns:40% 5% 55%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media screen and (max-width: 900px) {
    grid-template-columns:100%;
    grid-template-rows: 1fr 0.1fr 1fr;
    .arrowChange{
      transform: rotate(90deg);
    }
    //&.div:nth-child(2){
    //  margin:auto !important;
    //}
  }

  & > div {
    & > div {
      & > div {
        & > span {
          .MessagePop {
            display: none;
          }

          :hover {
            .MessagePop {
              display: block;
            }
          }
        }
      }
    }
  }
  .toolsBtn{
    color:white !important;
    border: none;
    :hover{
      color: red;
    }
  }

  .toolSearch {
    display: flex;
    flex-direction: row;
    .showSelect {
      width: 80%;
      height: 3rem;
      background: #F9F9F9;
      border-radius: 4px 0px 0px 4px;
      border: 1px solid #DBDBDB;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      padding-left: 0.5rem;
    }

    .selectBtn {
      width: 20%;
      height: 3rem;
      //padding:1rem 0rem;
      background: #2C83EA;
      border-radius: 0px 4px 4px 0px;
      border: 1px solid #DBDBDB;
      display: flex;
      position: relative;
      //flex-direction: column;
      justify-content: center;
      //background-image: url("../../");
      >img{
        display: inline-block;
        position: absolute;
        top:11px;
      }
      .toolList {
        display: none;
      }

      :hover {
        .toolList {
          display: block;
          position: relative;
          z-index: 999;
          margin-top: 3rem;
        }
      }

      & > ul {
        background: #FFFFFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        width: 8rem;
        height: 5rem;
        margin-top: 48px;

        & > li {
          height: 2.5rem;
          width: 8rem;
          display: flex;
          justify-content: center;

          & > div {
            line-height: 2.5rem;
            text-align: start;
            color: #666666;
          }

          :hover {
            background: rgba(22, 119, 255, 0.1);
          }
        }
      }
    }
  }

  & > ul {
    background: #FFFFFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    width: 100%;
    height: 5rem;

    & > li {
      height: 2.5rem;
      width: 8rem;
      display: flex;
      justify-content: center;

      & > div {
        line-height: 2.5rem;
        text-align: start;
        color: #666666;
      }

      :hover {
        background: rgba(22, 119, 255, 0.1);
      }
    }
  }
`;


export const ContainerEvent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
  .selectiveText{
    display: flex;
    align-items: center;
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
  }

  .toolSearch {
    display: flex;
    flex-direction: row;
    width: 24rem;
    padding:1rem 0.5rem 1rem 1rem;
    position: relative;
    .showSelect {
      width: 90%;
      height: 2.5rem;
      background: #F9F9F9;
      border-radius: 4px 0px 0px 4px;
      border: 1px solid #DBDBDB;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      padding-left: 0.5rem;
    }

    .selectBtn {
      width: 10%;
      height: 2.5rem;
      border-radius: 0px 4px 4px 0px;
      border: 1px solid #DBDBDB;
      display: flex;
      position: relative;
      justify-content: center;
      //>img{
      //  display: inline-block;
      //  position: absolute;
      //  top:11px;
      //
      
      & > ul {
        background: #FFFFFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        width: 8rem;
        height: 5rem;
        margin-top: 48px;

        & > li {
          height: 2.5rem;
          width: 8rem;
          display: flex;
          justify-content: center;

          & > div {
            line-height: 2.5rem;
            text-align: start;
            color: #666666;
          }

          :hover {
            background: rgba(22, 119, 255, 0.1);
          }
        }
      }
    }
    .toolList {
      display: none;
    }
    :hover {
      .toolList {
        display: block;
        position: absolute;
        width: 100%;
        z-index: 999;
        margin-top: 2.5rem;
      }
    }
    & > ul {
      background: #FFFFFF;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      width: 100%;
      height: 5rem;

      & > li {
        height: 2.5rem;
        display: flex;
        justify-content: center;

        & > div {
          line-height: 2.5rem;
          text-align: start;
          color: #666666;
        }

        :hover {
          background: rgba(22, 119, 255, 0.1);
        }
      }
    }
  }
  
  .helpMessage{
    display: flex;
    flex-direction: row;
    position:relative;
    .popverMessage{
      display: none;
    }
    :hover{
      .popverMessage{
        display: block;
        position: absolute;
        top: 80%;
        left: -600%;
        z-index: 999;
        width: 300px;
        background: #FAFAFA;
        border: 1px solid #080810;
        border-radius: 10px;
      }
    }
  }
`;