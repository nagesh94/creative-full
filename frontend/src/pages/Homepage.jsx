import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {

  return (
   <div className='bg-black h-[100vh] flex justify-center items-center text-white'>
    <div className='flex flex-col items-center gap-6'>
      <div className="text-5xl" >
        Welcome To Test.com
      </div>
      <button className='border-double border-4 border-sky-500 hover:bg-sky-700 p-5 '
        
      ><Link to='/inputdetails'>click to enter</Link></button>
    </div>
   </div>
  )
}

export default Homepage