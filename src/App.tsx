import { BrowserRouter, Navigation, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/home'
import Intro from './pages/intro'
import './index.css'
import Main from './pages/main'


function App() {
  return (
    <div className='min-w-[400px] min-h-[600px]'>
      <HashRouter>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/intro" element={<Intro />}/>
         <Route path="/main" element={<Main/>}/>
         <Route/>
        </Routes>
      </HashRouter>
    </div>
    


  )
}

export default App
