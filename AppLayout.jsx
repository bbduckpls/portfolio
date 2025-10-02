import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="container nav-gap">
        <Outlet />
      </main> 
      <Footer />
    </>
  )
}

export default AppLayout