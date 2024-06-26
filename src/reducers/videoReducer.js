// videos => videoState

export default function videoReducer(videos, action) {
  switch (action.type) {
    case 'FETCH':
      return action.payload;
    case 'ADD':
      return [
        ...videos,
        { ...action.payload, id: videos.length + 1 }
      ];
    case 'DELETE':
      const id = action.payload;
      return videos.filter(video => video.id !== id);
    case 'UPDATE':
      const video = action.payload;
      const index = videos.findIndex(v => v.id === video.id);
      const newVideos = [...videos];
      newVideos.splice(index, 1, video);
      // setVideos(newVideos);
      return newVideos;
    default:
      return videos;
  }
}