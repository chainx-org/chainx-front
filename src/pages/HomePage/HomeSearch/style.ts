import styled from 'styled-components';

export const TableWrapper = styled.div`
      display: grid;
      grid-template-columns: 60% 40%;
      place-content: space-around space-evenly;
      padding: 3rem 6rem 2rem 6rem;
      position: relative;
      @media screen and (max-width: 1150px) {
        grid-template-columns: 100%;
        padding: 1rem;
        > div {
          > div {
            font-size: 1.5rem !important;
          }
        }

        //.bgImage {
        //  display: none;
        //}
      }
  .bgImage{
    height: 128%;
    width: 73%;
    position: relative;
    max-width: none;
    object-fit: cover;
    z-index:1;
    top:22px;
    margin:auto;
    @media screen and (max-width: 1150px) {
      top:10px;
      z-index:1
    }
  }
  .Home_pageSearch {
    width: 70%;
    @media screen and (max-width: 1150px) {
      width: 100%;
    }
  }
`;

export const EchartBox = styled.div`
      //grid grid-cols-2 border-gray-borderGray bg-gray-backgroundGray rounded-lg
      display: grid;
      grid-template-columns:1fr 1fr;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      border: 1px solid rgba(105, 168, 237, 0.21);
      background: #111519!important;
      opacity: 1;
      position:relative;
      z-index:1;
      @media screen and (max-width: 1150px) {
        grid-template-columns:1fr;
        grid-template-rows: 10rem 10rem;
      }
    `;