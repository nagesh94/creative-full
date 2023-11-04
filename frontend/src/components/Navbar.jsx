import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [selected,setSelected] = useState()
    const location =useLocation()
    let navigate = useNavigate();
    const handleClick=(e)=>{
        
        setSelected(prev=>e.target.id)
        
    }

   useEffect(()=>{
    if(selected==1){
        navigate('/inputDetails')
    }if(selected==2){
        navigate('/showdetails')
    }
   },[selected])
   
    useEffect(()=>{
        if(location.pathname =="/inputDetails"){
            setSelected(1)
        }else if(location.pathname =='/showdetails'){
            setSelected(2)
        }
    },[])
    console.log(selected)
  return (
    <div className='bg-red-800 h-20 flex  '>
        
        <div id="1" className={`${selected==1 ? 'flex-1   text-center h-full pt-5 bg-red-900 text-4xl border-solid border-2 hover:cursor-pointer border-white':'hover:cursor-pointer flex-1 text-center text-4xl h-full pt-5'}`} onClick={handleClick}  >create test</div>
        <div id="2" className={`${selected==2 ? 'flex-1 text-center h-full pt-5 bg-red-900 text-4xl border-solid border-2 hover:cursor-pointer border-white':' hover:cursor-pointer flex-1 text-center text-4xl h-full pt-5'}`} onClick={handleClick}  >details</div>
        
       
       
    </div>
  )
}

export default Navbar