import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'

const Layout = () => {
  return (
    <>
    
    {/* <h1 style={{color:"red"}}>TEST OUTLET</h1> */}
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout