import { BrowserRouter, Navigation, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/home'
import Intro from './pages/intro'
import './index.css'


function App() {
  return (
    <div className='min-w-[400px] min-h-[600px] space-y-24'>
      <HashRouter>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/intro" element={<Intro />}/>
         <Route/>
        </Routes>
      </HashRouter>
    </div>
    


  )
}

export default App
