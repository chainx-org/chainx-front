import styled from 'styled-components';

export const MobileDataBox = styled.div`
  background: transparent;
  height: 2rem;
  position: absolute;
  right:0px;
  top:0px;
  z-index: 999;
  width: 100%;
  a {
    text-decoration: none;
  }
  body{
    background-color: gray;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    height: 25px;
    justify-content: space-between;
    //margin: 0.1rem 0.1rem;
    z-index: 999;
    margin: 1rem;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  .nav-bar {
    width: 32px;
    height: 3px;
    background-color: white;
    transition: 500ms ease-in-out all;
  }

  .nav-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .dropdown {
    top: -200px;
    position: absolute;
    height: 200px;
    width: 100%;
    background-color: #2d2929;
    transition: 500ms ease-in-out all;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
  }

  .dropdown p {
    font-size: 14px;
    font-family: "Urbanist", sans-serif;
    color: white;
    margin: 0.2rem 0;
    border-bottom: 1px solid transparent;
    padding: 0 0.4em; /* adjust padding to make the underline longer or shorter */
    padding-bottom: 4px; /* this padding can be used to adjust the distance from text to underlink */
    transition: 200ms ease all;
  }

  .dropdown p:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  .dropdown-active {
    top: 0;
  }

  .one-active {
    background-color: yellow;
    transform: translateY(13px) rotate(45deg);
  }

  .two-active {
    display: none;
  }

  .three-active {
    background-color: yellow;
    transform: translateY(-9px) rotate(135deg);
  }

`;
