import React from 'react'

const AddSalter = () => {
    const handleSubmit = (event: any) => {
        console.log('handleSubmit ran');
        event.preventDefault(); // 👈️ prevent page refresh
        
        const salts:any = [];

        if(localStorage.getItem("salts") == null){
            salts.push(event.target.salt.value)
            localStorage.setItem("salts",salts)

        }else{
            const currentSalt = localStorage.getItem("salts")
            const salts:any = [currentSalt];
            salts.push(event.target.salt.value)
            localStorage.setItem("salts",salts)
        }

    }

    return (
        <div className='flex flex-col pb-4'>
            <div className='flex justify-center pb-2'>Salter Phrase</div>
            <form className='flex flex-row space-x-2' onSubmit={handleSubmit}>
                <input id='salt' name='salt' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className='btn btn-square text-blue-500' type='submit'>+</button>
            </form>

        </div>
    )
}

export default AddSalter