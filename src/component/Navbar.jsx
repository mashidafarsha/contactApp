import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <div className=" navbar bg-sky-600">
      <div className="flex-1 ">
       
        
      <div>
        <h1 className='text-xl font-bold'> <Link to="/">Contact App</Link></h1>
           
          </div>
          <div className="m-5 text-xl font-bold">
            <h1><Link to="/contact">All Contacts</Link></h1>
            
          </div>
          
     
      </div>
      
    </div>
  </div>
  )
}

export default Navbar