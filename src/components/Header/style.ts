import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1150px) {
    justify-content: space-between;
    margin:1rem 0rem;
  }
  .topLink {
    .topLinkTool {
      --text-opacity: 1;
      color: #fff;
      width: 5rem;
      //color: rgba(255, 255, 255, var(--text-opacity));
      //margin-right: 2.374rem;
      cursor: pointer;
    }

    .toolList {
      display: none;
    }

    :hover {
      .toolList {
        display: block;
        position: absolute;
        width: 14rem;
        z-index: 999;
      }
    }   
    & > ul {
      background: #FFFFFF;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      width: 100%;
      height: 2.5rem;

      & > li {
        height: 2.5rem;
        width: 14rem;
        display: flex;
        justify-content: start;
        padding-left:1rem;
        & > div {
          line-height: 2.5rem;
          //text-align: start;
          color:#666666;
        }

        :hover {
          background: rgba(22, 119, 255, 0.1);
        }
      }
    }
  }
`;

export const NavLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3rem;
  line-height: 3rem;
  >a{
    min-width: 80px;
  }
  >a:nth-child(n+3){
    min-width: 116px;
  }
  >a:nth-child(5){
    min-width: 230px;
  }
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

