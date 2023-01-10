import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const settings = () => {
  return (
    <div>settings
        <Link to={'/main'} className='btn btn-circle btn-sm'><XMarkIcon className="h-4 w-4 text-blue-500"/></Link>
    </div>
  )
}

export default settings