import { useContext } from "react";
import { VideosContext } from "../context/Contexts";

export const useVideos = () => useContext(VideosContext);

