import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
// import videoDB from './data/data';
import VideoList from './components/VideoList';
import videoReducer from "./reducers/videoReducer";
import { VideoDispatchContext, VideosContext } from "./context/Contexts";
import Counter from './components/Counter';

function App() {
  console.log('render App');

  const [videos, dispatch] = useReducer(videoReducer, []);
  const [editableVideo, setEditableVideo] = useState(null);

  const titleRef = useRef(null);

  const editVideo = useCallback(function editVideo(id) {
    console.log('editVideo :: id : ', id);
    setEditableVideo(videos.find(video => video.id === id));
    // setEditableVideo(null);
  }, [videos]);

  useEffect(() => {
    titleRef.current.focus();
    titleRef.current.placeholder = 'from forwardRef';
  }, []);



  return (
    <VideosContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className="App" onClick={() => console.log('App')}>
          <Counter />
          <AddVideo
            ref={titleRef}
            editableVideo={editableVideo}
            setEditableVideo={setEditableVideo}
          />
          <VideoList editVideo={editVideo}></VideoList>
        </div>
      </VideoDispatchContext.Provider>
    </VideosContext.Provider>
  );
}

export default App;
