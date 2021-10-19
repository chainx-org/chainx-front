import styled from 'styled-components';

export const ContainerBox = styled.div`
  width: 100%;
  background: black;
`;


export const TableWrapper = styled.div`
  display: grid;
  column-gap: 24px;
  row-gap: 32px;
  padding: 1rem 6rem 1rem 6rem;
  grid-template-columns: repeat(auto-fill, minmax(588px, 1fr));
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem 2rem 1rem;

  }
`;

export const FloatBox = styled.div`
  width: 100%;
  z-index: 999;
  position: absolute;
  margin-top: -50px;
  @media screen and (max-width: 900px) {
    margin-top: -30px;
  }
`;