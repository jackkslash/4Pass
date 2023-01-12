import React from 'react'

const AddSalter = () => {
    return (
        <div className='flex flex-col pb-4'>
        <div className='flex justify-center pb-2'>Salter Phrase</div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
    )
}

export default AddSalter