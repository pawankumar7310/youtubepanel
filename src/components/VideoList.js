import React from 'react'
import Video from './Video'


function VideoList({dataVideo,deleteVideo,editVideo}) {

  return (
    <div className="container">
    {
      dataVideo.map(item=>(
        <Video
         key={item.id} 
         id={item.id} 
         channel={item.channel}
         title={item.title}
         views={item.views}
         time={item.time}
         verified={item.verified}
         deleteVideo={deleteVideo}
         editVideo={editVideo}
         />
      ))
    }
  </div>
  )
}

export default VideoList
