import { DocumentDuplicateIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Salter = (saltText:any) => {

  return (
    <div className='flex flex-row justify-center space-x-4 pb-2'>
    <div className='flex justify-center items-center pl-2'>{saltText.saltText}</div>
    <div className='btn' onClick={() => {navigator.clipboard.writeText(saltText.saltText)}}><DocumentDuplicateIcon className="h-4 w-4 text-blue-500" /></div>
    <div className='btn'><XMarkIcon className="h-4 w-4 text-blue-500"/></div>
    </div>
  )
}

export default Salter