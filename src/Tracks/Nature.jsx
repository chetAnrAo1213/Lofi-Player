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
         setVideoUrl("/videos/Beach.mp4");
      }
       if(song.includes("rain"))
      {
         setVideoUrl("/videos/Rain.mp4");
      }
       if(song.includes("wind"))
      {
         setVideoUrl("/videos/wind.mp4");
      }
       if(song.includes("train"))
      {
       setVideoUrl("/videos/Train.mp4");
      }
      if(song.includes("restaurant"))
      {
        setVideoUrl("/videos/restraurant.mp4");
      }
       if(song.includes("campfire"))
      {
       setVideoUrl("/videos/campfire.mp4");
      }
       if(song.includes("thunderstorm"))
      {
         setVideoUrl("/videos/Thunderstorm.mp4");
      }
       if(song.includes("car"))
      {
       setVideoUrl("/videos/Cars.mp4");
      }
       if(song.includes("birds"))
      {
        setVideoUrl("/videos/birds.mp4");
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