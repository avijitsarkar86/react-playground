import useVideoDispatch from "../hooks/VideoDispatch";
import './AddVideo.css';
import { forwardRef, useEffect, useRef, useState } from 'react';

const initialState = {
  time: '1 month ago',
  channel: 'Coder Dost',
  verified: true,
  title: '',
  views: ''
};

const AddVideo = forwardRef(function AddVideo({ editableVideo, setEditableVideo }, ref) {
  // const titleRef = useRef('');
  const [video, setVideo] = useState(initialState);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();


  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: 'UPDATE', payload: video });
      setEditableVideo(null);
    } else {
      // addVideos(video);
      dispatch({ type: 'ADD', payload: video });
    }

    setVideo(initialState);

  }
  function handleChange(e) {
    setVideo({
      ...video,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    // titleRef.current.placeholder = 'type title';
    // titleRef.current.focus();

  }, [editableVideo]);

  return (
    <form>
      <input
        type="text"
        name="title"
        // ref={titleRef}
        ref={ref}
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
      >
        {editableVideo ? 'Edit' : 'Add'} Video
      </button>
    </form>
  );
});


export default AddVideo;
