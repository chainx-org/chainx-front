/** @format */

import styled from 'styled-components'

export const MobileDataBox = styled.div`
  background: transparent;
  //height: 2rem;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 3;
  width: 100%;
  a {
    text-decoration: none;
  }
  body {
    background-color: black;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    height: 16px;
    justify-content: space-between;
    //margin: 0.1rem 0.1rem;
    z-index: 999;
    margin: 1.6rem;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  .nav-bar {
    width: 20px;
    height: 2px;
    background-color: white;
    transition: 300ms ease-in-out all;
  }

  .nav-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .dropdown {
    top: -500px;
    position: absolute;
    height: 409px;
    width: 100%;
    background-color: black;
    transition: 300ms ease-in-out all;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    padding: 100px 0 0px 0;
  }

  .dropdown p {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Urbanist', sans-serif;
    color: white;
    margin: 0.2rem 0;
    border-bottom: 1px solid transparent;
    padding: 0 0.4em; /* adjust padding to make the underline longer or shorter */
    padding-bottom: 7px; /* this padding can be used to adjust the distance from text to underlink */
    padding-top: 10px;
    transition: 300ms ease all;
  }

  .dropdown p:hover {
    cursor: pointer;
    border-bottom: 1px solid white;
  }

  .dropdown-active {
    top: 0;
  }

  .one-active {
    background-color: white;
    transform: translateY(5px) rotate(45deg);
  }

  .two-active {
    display: none;
  }

  .three-active {
    background-color: white;
    transform: translateY(-9px) rotate(135deg);
  }
`
