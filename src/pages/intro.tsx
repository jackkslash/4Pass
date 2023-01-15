import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const intro = () => {


  const handleSubmit = () => {
    localStorage.setItem('checkPoint', "true");
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='pb-4'>
        <div className='text-white text-xl'>Input four random keywords to be your phrase.</div>
      </div>
      <form  className='flex flex-col items-center justify-center space-y-2.5'>
        <input type="text" placeholder="Phrase one" className="input input-bordered placeholder:text-center" />
        <input type="text" placeholder="Phrase two" className="input input-bordered placeholder:text-center" />
        <input type="text" placeholder="Phrase three" className="input input-bordered placeholder:text-center" />
        <input type="text" placeholder="Phrase four" className="input input-bordered placeholder:text-center" />
        <div className='pt-4'>
          <Link to={'/main'} className='btn btn-wide' onClick={handleSubmit}>Submit</Link>
        </div>
      </form>

    </div>

  )
}

export default intro