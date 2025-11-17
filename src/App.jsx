import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className ="min-h-screen  bg-black ">
      <div className="text-white font-mono ml-[45%] text-4xl  ">My-Notes</div>
      <div>
        <form className='flex flex-col'>
          <input placeholder='titile-text' className='bg-slate-700 w-[90%] h-[30px] mt-5 rounded-xl' />
          <input placeholder='body-text' className='bg-slate-700 w-[90%] h-[150px] mt-5 rounded-xl'/>
          <button className='bg-slate-700 mt-3 w-[30%] ml-[35%] rounded-xl text-white hover:bg-black'>Submit</button>
        </form>
      </div>
      <div className='flex mt-5'>
      <div className='text-white w-[80px] h-[80px] bg-slate-700 rounded-xl ml-3'>Saved notes here</div>
      <div className='text-white w-[80px] h-[80px] bg-slate-700 rounded-xl ml-3'>Saved notes here</div>
      <div className='text-white w-[80px] h-[80px] bg-slate-700 rounded-xl ml-3'>Saved notes here</div>
    </div>
    </div>
    </>
  )
}

export default App
