import styled from 'styled-components';

export const Wrapper = styled.div`
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: flex-end;
    `;

export const NavLink = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        height:3rem;
        line-height:3rem;
        @media screen and (max-width: 1200px) {
            display:none;
        }
    `;