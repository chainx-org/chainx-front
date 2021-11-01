import styled from 'styled-components';

export const ChangeNetDiv = styled.div`
    position: relative;
    margin: auto 0;
    & > div .rotate {
      transition: all 0.3s linear 0s;
    }
    & > div .rotated {
      transform: rotate(180deg);
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      height: 30px;
      border-radius: 1px;
      padding: 1rem 1rem;
    }

    & > ul {
      background: #FFFFFF;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      width: 100%;
      height: 5rem;

      & > li {
        height: 2.5rem;

        & > div {
          line-height: 2.5rem;
          padding-left:1rem;
          text-align: start;
        }

        :hover {
          background: rgba(22, 119, 255, 0.1);
        }
      }
    }
  `;