import Video from "./Video";
import PlayButton from "./PlayButton";
import { useVideos } from "../hooks/Videos";
import axios from "axios";
import { useCallback, useEffect, useMemo } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {

  const dispatch = useVideoDispatch();
  const videos = useVideos();

  const play = useCallback(() => console.log('Playing..'), []);
  const pause = useCallback(() => console.log('Paused..'), []);

  const memoPlayButton = useMemo(() => (
    <PlayButton
      onPlay={play}
      onPause={pause}
    >
      Play
    </PlayButton>
  ), [pause, play]);


  useEffect(() => {
    async function fetchVideos() {
      const url = "https://my.api.mockaroo.com/video_date.json?key=2df601a0";
      const res = await axios.get(url);
      console.log("fetchVideos :: result: ", res.data);
      dispatch({ type: 'FETCH', payload: res.data });
    }
    fetchVideos();
  }, [dispatch]);

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          {memoPlayButton}
        </Video>
      ))}
    </>
  );
}

export default VideoList;