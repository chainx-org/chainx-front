import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from './Container'

export default function HomePage()
{
    console.log(window.innerWidth)
    return (
        <>
            <Header />
            <Container />
            {/* <Footer /> */}
        </>
    )
}
