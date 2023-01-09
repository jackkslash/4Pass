import React from 'react'
import { Link } from 'react-router-dom'
import Salter from "../components/salter"

const main = () => {
  return (
    <div>
      <div className='flex flex-col items-center h-screen'>
        <div className='h-1/5'>
          <div className='text-white text-xl pt-4 font-bold '>Your Passwords</div>
          <Link to={'/settings'} className='btn btn-wide'>Settings</Link>
        </div>
        <div className='h-3/5'>
          <div className='text-white text-xl pt-4 font-bold'>Passwords</div>
          <Salter/>
        </div>
        <div className='h-1/5'>
          <div className='text-white text-xl pt-4 font-bold '>Add</div>
        </div>
      </div>
    </div>
  )
}

export default main