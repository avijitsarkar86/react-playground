import './Video.css';
import useVideoDispatch from "../hooks/VideoDispatch";
import { memo, useEffect } from "react";

const Video = memo(function Video({ title, id, channel = "Coder Dost", views, time, verified, children, editVideo }) {
  console.log('render Video ' + id);

  const dispatch = useVideoDispatch();

  // useEffect(() => {
  //   const idT = setInterval(() => {
  //     console.log(`Video playing ${id}`);
  //   }, 20000);

  //   // cleanup function
  //   return () => {
  //     clearInterval(idT);
  //   };
  // }, [id]);

  function deleteVideo(id) {
    console.log('id : ', id);
    dispatch({ type: 'DELETE', payload: id });
  };


  return (
    <>
      <div className='container'>
        <button className='close' onClick={() => deleteVideo(id)}>X</button>
        <button className='edit' onClick={() => editVideo(id)}>Edit</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅'} </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
});

export default Video;
