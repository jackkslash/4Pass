import React from 'react'
import { Link } from 'react-router-dom'

const settings = () => {
  return (
    <div>settings
        <Link to={'/main'} className='btn btn-wide'>Settings</Link>
    </div>
  )
}

export default settings