import { Cog8ToothIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddSalter from '../components/addSalter'
import Salter from "../components/salter"

const main = () => {
  const [localSalts, setLocalSalts] = useState(localStorage.getItem("salts"));
  const alreadyUser = localStorage.getItem("checkPoint");
  const phrase = JSON.parse(localStorage.getItem("phrase"));
  const navigate = useNavigate();
  const [salts, setSalts] = useState(localSalts.split(','))

  useEffect(() => {
    if (alreadyUser == null) { navigate("/") }
    setLocalSalts(localStorage.getItem("salts"))
    setSalts(localSalts.split(','))
  }, [salts])


  return (
    <div>
      <div className='flex flex-col items-center h-screen'>
        <div className='flex flex-col justify-center items-center h-1/5 pt-4'>
          <div className='flex flex-row space-x-4'>
            <div className='text-white text-xl font-bold'>Passwords</div>
            <div className=''>
              <Link to={'/settings'} className='btn btn-circle btn-sm'><Cog8ToothIcon className="h-4 w-4 text-blue-500" /></Link>
            </div>
          </div>
          <div className='pt-4'>
            {phrase.one +" "+ phrase.two +" "+ phrase.three +" "+ phrase.four}
          </div>
        </div>

        <div className='h-4/5'>
          <AddSalter />
          {salts.map((m, index) => (
            <>
              <Salter saltText={m} />
            </>

          ))}
        </div>
      </div>
    </div>
  )
}

export default main