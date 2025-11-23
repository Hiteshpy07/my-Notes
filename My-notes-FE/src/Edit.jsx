import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Inline SVG for the Home Icon (Retained for visual completeness, but navigation removed)
const HomeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 5.69l5 4.5V18h-4v-6H9v6H5v-7.81l5-4.5h2zM12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
    </svg>
);

// Inline SVG for the Save Icon 
const SaveIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
    </svg>
);


   
// Renamed and cleaned component as requested
const Edit = () => {
     let {filename12} = useParams(); 
       useEffect(() => { 
        console.log("Editing note with filename from URL:", filename12);
         }, [filename12]);
        //  used this param wla feature first time read more aboyt it in https://chatgpt.com/share/6922ae05-ec38-8009-9014-401e961b8f34


    // Placeholder values for a clean frontend demonstration
    const filename = 'note-to-edit-123.txt'; 
    // const initialTitle = 'My Draft Note Title';
    // const initialBody = 'This is the body content of the note. It is pre-filled for editing.';

    // State initialized with placeholder content
    const [newTitle, setNewTitle] = useState('');
    const [newBody, setNewBody] = useState('');
    
    // Simplified submission handler (no requests or navigation)
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("--- Form Submitted (Frontend Only) ---");
        console.log("Filename/ID:", filename);
        console.log("New Title:", newTitle);
        console.log("New Body:", newBody);
        // You can integrate your actual API call here later.
    }
    const handleeditsub=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/updatenote",{
            oldfilename:filename12,
            newtitle:newTitle,
            newbody:newBody
        })
        console.log("Edit submission clicked");
    }
    
      

    return (
        <div className="min-h-screen bg-black p-4 md:p-8">
            <header className="flex items-center justify-between mb-8">
                {/* Home icon rendered without Link */}
                <div className='text-white flex items-center p-2 rounded-full'>
                    <HomeIcon className='mr-2 w-6 h-6' /> 
                    <span className="text-sm font-semibold hidden sm:inline text-gray-400">Home (Link Removed)</span>
                </div>
                
                <div className="text-white font-mono text-3xl md:text-4xl">Edit Note</div>
                <div className="w-16"></div> {/* Spacer to balance the header */}
            </header>
            
            <div className="max-w-3xl mx-auto">
                <form className='flex flex-col space-y-5' onSubmit={handleUpdate}>
                    
                    {/* 1. Old Title/ID (Read-Only) */}
                    <div className="p-4 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
                        <label htmlFor="current-id" className="text-sm font-semibold text-gray-400 block mb-1">Current Note Identifier (Read-Only):</label>
                        <input 
                            id="current-id"
                            type="text"
                            value={filename12}
                            readOnly
                            className='w-full h-[40px] rounded-lg p-3 text-gray-300 bg-slate-700 cursor-not-allowed text-xs md:text-sm font-mono'
                            title="Unique ID for the file on the server."
                        />
                    </div>

                    {/* 2. New Title Input */}
                    <div className="p-4 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
                        <label htmlFor="new-title" className="text-sm font-semibold text-white block mb-1">New Title:</label>
                        <input 
                            id="new-title"
                            placeholder='Enter the new title here' 
                            className='bg-slate-700 w-full h-[40px] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            value={newTitle} 
                            onChange={(e) => setNewTitle(e.target.value)}
                            required
                        />
                    </div>
                    
                    {/* 3. New Body Input */}
                    <div className="p-4 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
                        <label htmlFor="new-body" className="text-sm font-semibold text-white block mb-1">New Body Content:</label>
                        <textarea 
                            id="new-body"
                            placeholder='Enter the new body content here...' 
                            className='bg-slate-700 w-full h-[250px] rounded-lg p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500' 
                            value={newBody} 
                            onChange={(e) => setNewBody(e.target.value)}
                            required
                        />
                    </div>
                    
                    {/* 4. Submit Button */}
                    <button 
                        className='flex items-center justify-center bg-blue-600 mt-5 w-full md:w-1/2 mx-auto rounded-xl text-white py-3 
                                   font-bold text-lg tracking-wider transition-all duration-300 
                                   hover:bg-blue-700 shadow-xl hover:shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/50' 
                        type='submit'
                        onClick={handleeditsub}
                    >
                        <SaveIcon className='mr-2 w-5 h-5' /> Submit Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;