import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const settings = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
      <div className='flex flex-row justify-center items-center h-1/5 pt-4 space-x-4'>
        <div className='text-white text-xl font-bold'>Passwords</div>
        <div className=''>
          <Link to={'/main'} className='btn btn-circle btn-sm'><XMarkIcon className="h-4 w-4 text-blue-500" /></Link>
        </div>
      </div>
    </div>
  )
}

export default settings