import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 100%;
    background: white;
    color: black;
    display:flex;
    flex-direction:row;
    justify-content:start;
    >img{
      margin:20px 7px 20px 32px;
    }
    :hover{
      background: #2C83EA;
      cursor: pointer;
      >div{
        >span{
          color: rgba(255, 255, 255, 0.85);
        }
        >div{
         >div{
           >span{
             color: rgba(255, 255, 255, 0.85);
           }
         }
        }
      }
    }`;
export const ItemContext = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
      >span{
        display: flex;
        font-size: 16px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 22px;
        margin-bottom: 8px;
      }
      >div{
        >div {
          > span {
            display: flex;
            font-size: 14px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            line-height: 22px;
          }
        }
      }`;