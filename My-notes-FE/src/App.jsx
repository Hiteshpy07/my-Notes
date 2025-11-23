import { useState,useEffect } from 'react'
import axios from 'axios';
import { MdDelete, MdHome } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Edit from './Edit';

function App() {


  return (
    <>
     <Routes>
        <Route path="/edit-note/:filename12" element={<Edit/>} />
        <Route path="/" element={<Home/>} />

      </Routes>
   
    </>
  )

}
export default App
