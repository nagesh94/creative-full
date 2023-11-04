import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='bg-black h-[100vh]'>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout