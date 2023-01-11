import { Cog8ToothIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import AddSalter from '../components/addSalter'
import Salter from "../components/salter"

const main = () => {
  return (
    <div>
      <div className='flex flex-col items-center h-screen'>
        <div className='flex flex-row h-1/5 pt-4'>
          <div className='text-white text-xl font-bold'>Passwords</div>
          <div className=''>
            <Link to={'/settings'} className='btn btn-circle btn-sm'><Cog8ToothIcon className="h-4 w-4 text-blue-500"/></Link>
          </div>
          
        </div>
        <div className='h-3/5'>
          <AddSalter/>
          <Salter/>
          <Salter/>
          <Salter/>
        </div>
        <div className='h-1/5'>
          <div className='text-white text-xl pt-4 font-bold '>Add</div>
        </div>
      </div>
    </div>
  )
}

export default main