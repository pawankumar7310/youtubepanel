import React, { useEffect, useState } from 'react'
import './AddVideo.css'
function AddVideo({onAddVideo,editCard,updateVideo}) {
    // console.log("AddVideo......",editCard)
    const initialState={
        title:"",
        channel:"coderrr",
        views:"",
        time:"5 months ago",
        verified:true
    }
    const[newVideo,setNewVideo]=useState(initialState)
    const handleSubmit=(e)=>{
       e.preventDefault()
      if(newVideo.title && newVideo.views !==""){
        if(editCard){
          updateVideo(newVideo)
        }
        else{
          onAddVideo(newVideo)
        }
      }
      else{
        alert("please fill form")
      }
          setNewVideo(initialState)
    }
    const inputData=(e)=>{
      setNewVideo({...newVideo,[e.target.name]:e.target.value})
    } 

    useEffect(()=>{
        if(editCard){
            setNewVideo(editCard)
        }
     
    },[editCard])
  
  return (
    <div className='form-container'>
      <form>
        <input type='text'placeholder="title" name="title" onChange={inputData} value={newVideo.title}/>
        <input type='text' placeholder="Views" name="views" onChange={inputData} value={newVideo.views}/>
        <button className='btn' onClick={handleSubmit}>{editCard ? "edit":"Add"} Video</button>
      </form>
    </div>
  )
}

export default AddVideo
