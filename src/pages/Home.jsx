import React from 'react'
import '../App.css'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div>
        <Header/></div>
      <div>
        <MainContent/></div>
      <div>
        <Footer/></div>
    </div>
  )
}

export default Home