import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .topLinkTool {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255, 255, 255, var(--text-opacity));
    margin-right: 2.374rem;
    cursor: pointer;
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
`;

export const NavLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3rem;
  line-height: 3rem;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

