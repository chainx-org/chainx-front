import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Container from './HomeSearch/Container';
export default function HomePage() {
  console.log(window.innerWidth);
  return (
    <>
      <Header/>
      <Container/>
      <Footer/>
    </>
  );
}
