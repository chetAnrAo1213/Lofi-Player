import { useState, useEffect } from "react";
import { useNowPlaying } from "../Components/NowPlayingContext";

function Nature()
{
  const { currentSong } = useNowPlaying();
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => 
  {
    if (currentSong) 
    {
      const song = currentSong.toLowerCase();
      if(song.includes("beach"))
      {
         setVideoUrl("");
      }
       if(song.includes("rain"))
      {
         setVideoUrl("");
      }
       if(song.includes("wind"))
      {
         setVideoUrl("");
      }
       if(song.includes("train"))
      {
       setVideoUrl("");
      }
      if(song.includes("restaurant"))
      {
        setVideoUrl("");
      }
       if(song.includes("campfire"))
      {
       setVideoUrl("");
      }
       if(song.includes("thunderstorm"))
      {
         setVideoUrl("");
      }
       if(song.includes("car"))
      {
       setVideoUrl("");
      }
       if(song.includes("birds"))
      {
        setVideoUrl("");
      }
    }
  }, [currentSong]); 

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video src={videoUrl} autoPlay loop playsInline muted style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain",
          zIndex: -1, backgroundColor: "black"}} />
    </div>
    </>
  );
}
export default Nature;
