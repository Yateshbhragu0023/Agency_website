import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

export default function WebsiteLayout() {
  return (
    <>
      <div className='bg-black md:py-3 py-1 md:px-5 sm:px-3 px-2  items-center' >
        <Header />
        <Outlet />
        <Footer />
      </div>
      </>
      )
}
