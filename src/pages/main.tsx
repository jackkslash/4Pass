import { Cog8ToothIcon} from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddSalter from '../components/addSalter'
import Salter from "../components/salter"

const main = () => {
  const alreadyUser = localStorage.getItem("checkPoint")
  const navigate = useNavigate();

  useEffect(()=>{
    if(alreadyUser == null){navigate("/")}
  },[])

  return (
    <div>
      <div className='flex flex-col items-center h-screen'>
        <div className='flex flex-row justify-center items-center h-1/5 pt-4 space-x-4'>
          <div className='text-white text-xl font-bold'>Passwords</div>
          <div className=''>
            <Link to={'/settings'} className='btn btn-circle btn-sm'><Cog8ToothIcon className="h-4 w-4 text-blue-500"/></Link>
          </div>
          
        </div>
        <div className='h-4/5'>
          <AddSalter/>
          <Salter/>
          <Salter/>
          <Salter/>
        </div>
      </div>
    </div>
  )
}

export default main