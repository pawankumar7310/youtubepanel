
import './App.css';
import object from './data/data';
import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
  const[dataVideo,setdataVideo]=useState(object)
  const[editCard,setEditCard]=useState(null)

  const onAddVideo=(newVideo)=>{
   setdataVideo([...dataVideo ,{...newVideo, id:dataVideo.length+1}])
  }
   
  const deleteVideo=(id)=>{
    setdataVideo(dataVideo.filter(val=>val.id!==id))
  }

  const editVideo=(id)=>{
    setEditCard(dataVideo.find(val=>val.id===id))
  }
  
  const updateVideo=(video)=>{
    const index=dataVideo.findIndex(val=>val.id===video.id)
     const newData=[...dataVideo]
      newData.splice(index,1,video)
      setdataVideo(newData)
      setEditCard(null)
  }
  return (
    <>
    <AddVideo onAddVideo={onAddVideo} editCard={editCard} updateVideo={updateVideo}/>
    <VideoList dataVideo={dataVideo} deleteVideo={deleteVideo} editVideo={editVideo}/>
    </>
  );
}

export default App;
