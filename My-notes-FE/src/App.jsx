import { useState,useEffect } from 'react'
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";


function App() {
  const [Body, setBody] = useState("")
  const [Title, setTitle] = useState("")
  const [savednotes, setsavednotes] = useState([]);
  const handlesub=async (e)=>{
      e.preventDefault();
      const payload =  {
        title: Title,
        body: Body
       };
      try {
    const response = await axios.post("http://localhost:3000/create-note",payload);
    console.log(response.payload);
  } catch (error) {
    console.error(error);
  }
  }
  useEffect(() => {
    axios.get("http://localhost:3000/create-notes")
    .then((res)=>{
      // console.log(res.data.files)
      setsavednotes(res.data.files)
      
    })
  })
  
  //delete option
  //edit option 

  return (
    <>
    <div className ="min-h-screen  bg-black ">
      <div className="text-white font-mono ml-[45%] text-4xl  ">My-Notes</div>
      <div>
        <form className='flex flex-col'>
          <input placeholder='titile-text' className='bg-slate-700 w-[90%] h-[30px] mt-5 rounded-xl'  value={Title} onChange={(e) => setTitle(e.target.value)}/>
          <input placeholder='body-text' className='bg-slate-700 w-[90%] h-[150px] mt-5 rounded-xl' value={Body} onChange={(e) => setBody(e.target.value)}/>
          <button className='bg-slate-700 mt-3 w-[30%] ml-[35%] rounded-xl text-white hover:bg-black' type='submit' onClick={handlesub}>Submit</button>
        </form>
      </div>
      <div className='flex mt-5'>
      {savednotes.map((e)=>(
        <div key={e} className='overflow-x-auto'> 
        <div className='text-white  h-[100px] bg-slate-700 rounded-xl ml-3 display:  p-2 flex-wrap '>{e}
        <div className='flex text-red-600 mt-10 justify-between'>
        <MdEditDocument className='text-white cursor-pointer'/>
        <MdDelete className='cursor-pointer '  onClick={()=>handledelete()}/>
        </div>
        </div>
        </div>
      ))}
      
    </div>
    </div>
    </>
  )
}

export default App
