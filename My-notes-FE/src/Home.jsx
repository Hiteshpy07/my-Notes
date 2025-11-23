import { useState,useEffect } from 'react'
import axios from 'axios';
import { MdDelete, MdHome } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";



function Home() {
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
  const handledelete=(e, id)=>{
    e.preventDefault();
    const filename=id;
    axios.delete(`http://localhost:3000/delete-note/${filename}`)
    .then((res)=>{
      console.log(`${filename} is deleted.`)
    })
  }
  //edit option 
  const handleedit=(y,e)=>{
    
    console.log("edit option clicked")
    console.log(e)
    // need to create a edit page , and do it through react-router-dom , add the whole edit functionality after reading this 
    //  https://chatgpt.com/share/69214cc3-8740-8009-acdd-5361dd6f56d8

    //all aout th edit feature here https://gemini.google.com/app/df7247b82e4f0b66?hl=en-IN
    //edit button all working , bus from end se updated dat bacnenk ta pahunch nhi rha , 404 error , but the urk is same , just try one more

  }

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
          <Link to={`/edit-note/${encodeURIComponent(e)}`}><MdEditDocument className='text-white cursor-pointer ' onClick={(y)=>handleedit(y,e)}/></Link>
        {/* <MdEditDocument className='text-white cursor-pointer ' onClick={(y)=>handleedit(y,e)}/> */}
        <MdDelete className='cursor-pointer '  onClick={(x)=>handledelete(x, e)}/>
          {/* i face a issue here was not getting the data with ddelte button , the fix is https://gemini.google.com/app/ac31e83e0c9378c1?hl=en-IN */}
          
        </div>
        </div>
        </div>
      ))}
      
    </div>
    </div>
    </>
  )

}
export default Home
