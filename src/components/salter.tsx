import { DocumentDuplicateIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { sha3_384 } from 'js-sha3';
import React from 'react'

const Salter = (saltText) => {
  const phrase = JSON.parse(localStorage.getItem("phrase"));
  const password = sha3_384(phrase.one+phrase.two+phrase.three+phrase.four + saltText.saltText)



  return (
    <div className='flex flex-row justify-center space-x-4 pb-2 w-full'>
      <div className='flex justify-center items-center pl-2 w-1/2'>{saltText.saltText}</div>
      <div className='w-1/2 space justify-center space-x-4 pb-2'>
        <div className='btn' onClick={() => { navigator.clipboard.writeText(password) }}><DocumentDuplicateIcon className="h-4 w-4 text-blue-500" /></div>
        <div className='btn '><XMarkIcon className="h-4 w-4 text-blue-500" /></div>
      </div>
    </div>
  )
}

export default Salter