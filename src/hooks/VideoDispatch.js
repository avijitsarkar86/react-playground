import { useContext } from "react";
import { VideoDispatchContext } from "../context/Contexts";

function useVideoDispatch() {
  return useContext(VideoDispatchContext);
}

export default useVideoDispatch;