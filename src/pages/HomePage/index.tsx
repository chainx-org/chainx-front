import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Container from './Container';
import { Provider } from 'mobx-react';
// import stores from '../../store'
export default function HomePage() {
  console.log(window.innerWidth);
  return (
    // <Provider {...stores} >
    <>
      <Header/>
      <Container/>
      <Footer/>
    </>
    // </Provider>
  );
}
