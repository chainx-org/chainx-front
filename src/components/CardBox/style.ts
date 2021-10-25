import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 688px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
    border-radius: 10px;
    border: 1px solid #E9E9E9;
    position: relative;
  `;
export const CardTitle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0rem 1rem 2rem;

    & > img {
      width: 24px;
      height: 24px;
    }

    & > span {
      display: inline-block;
      margin-left: 1rem;
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
    position: absolute;
    width:100%;
    height:80%;
    top: 4rem;
    padding: 2rem 2rem;
  display: grid;
  grid-template-columns:40% 10% 50%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media screen and (max-width: 900px) {
    grid-template-columns:100%;
    //&.div:nth-child(2){
    //  margin:auto !important;
    //}
  }

  .toolList {
    display: none;
  }

  :hover {
    .toolList {
      display: block;
      position: relative;
      z-index: 999;
    }
  }

  & > ul {
    background: #FFFFFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    width: 100%;
    height: 5.5rem;

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