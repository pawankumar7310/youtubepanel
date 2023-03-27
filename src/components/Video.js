import React, { useState} from 'react'
import {MdVerified} from 'react-icons/md';
import {MdMotionPhotosPaused} from 'react-icons/md';
import {TiMediaPlay} from 'react-icons/ti';
import {GrClose} from 'react-icons/gr';
import {MdModeEdit} from 'react-icons/md';


import './Video.css'
function Video({id,channel,title,views,time,verified=true,deleteVideo,editVideo}) {
 
    const[toggleBtn,setToggleBtn]=useState(false)
  return (
   <>
        <div className='card'>
            <button className='btn delete'onClick={()=>deleteVideo(id)}><GrClose/></button>
            <button className='btn edit' onClick={()=>editVideo(id)}><MdModeEdit/></button>
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="dummy img"/>
        <h4>{title}</h4>
        <p className='channel'>{channel}{verified&&<MdVerified/>}</p>
        <div className='view-time'>
            <p>{views} Views .</p>
            <p>{time}</p>
        </div>
            <button className='btn' onClick={()=>setToggleBtn(!toggleBtn)}>click {toggleBtn?<MdMotionPhotosPaused/>:<TiMediaPlay/>}</button>
        </div>
    </>
  )
}

export default Video
