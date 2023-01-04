import './index.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-bold min-w-[400px] min-h-[600px] space-y-24">
      <div className='flex flex-col items-center justify-center'>
        <h1 className='pt-4 text-white text-xl'>4Pass</h1>
      <p className='pt-4'>correct horse battery staple</p>
      <p>your passwords.</p>
      </div>
      <div>
        <button className='btn btn-wide'>Create your phrase</button>
      </div>
      
    </div>
  )
}

export default App
