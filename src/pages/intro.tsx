import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const intro = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    const phrase = {
      one: event.target.one.value,
      two:event.target.two.value,
      three:event.target.three.value,
      four:event.target.four.value
    }
    // 👇️ access input values here
    console.log(phrase);
    localStorage.setItem('checkPoint', 'true')
    localStorage.setItem('phrase', JSON.stringify(phrase))
    navigate('/main')
  }
  console.log('test');
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='pb-4'>
        <div className='text-white text-xl'>Input four random keywords to be your phrase.</div>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-2.5'>
        <input id='one' name='one' type="text" placeholder="Phrase one" className="input input-bordered placeholder:text-center" />
        <input id='two' name='two' type="text" placeholder="Phrase two" className="input input-bordered placeholder:text-center" />
        <input id='three' name='three' type="text" placeholder="Phrase three" className="input input-bordered placeholder:text-center" />
        <input id='four' name='four' type="text" placeholder="Phrase four" className="input input-bordered placeholder:text-center" />
        <button className='btn' type='submit'>Submit</button>
      </form>

    </div>

  )
}

export default intro