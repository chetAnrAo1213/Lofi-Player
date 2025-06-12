import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "reactstrap";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./../Themes/MinimalPlayer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { useNowPlaying } from "../Components/NowPlayingContext";

function LofiSideBar() 
{
  const sidebarStyle = {
    minWidth: "300px",
    maxWidth: "300px",
    background: "#003950",
    color: "#00e4ff",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  const sideMenuStyle = {
    overflowY: "auto",
    padding: "1em",
  };

  const page = useLocation();

  const folders = {
    Nature: "5%20Minutes%20Of%20Nature",
    Daniel: "Daniel%20Mp3",
    Developer: "Developer%20Choice",
    Dreamscape: "Dreamscape",
    Lennox: "Lennox",
    Mylesxiety: "Mylesxiety",
  };

  const username = "chetAnrAo7";
  const repo = "LofiPlayer-Data";

  const [data, setData] = useState([]);
  const [userFav, setUserFav] = useState([]);

  useEffect(() =>
  {
    if (page.pathname === "/Nature") {
      axios
        .get(`https://api.github.com/repos/${username}/${repo}/contents/${folders.Nature}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log("Error: " + err));
    }
    if (page.pathname === "/DeveloperChoice") {
      axios
        .get(`https://api.github.com/repos/${username}/${repo}/contents/${folders.Developer}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log("Error: " + err));
    }
    if (page.pathname === "/Mylesxiety") {
      axios
        .get(`https://api.github.com/repos/${username}/${repo}/contents/${folders.Mylesxiety}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log("Error: " + err));
    }
    if (page.pathname === "/Lennox") {
      axios
        .get(`https://api.github.com/repos/${username}/${repo}/contents/${folders.Lennox}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log("Error: " + err));
    }
    if (page.pathname === "/Dreamscape") {
      axios
        .get(`https://api.github.com/repos/${username}/${repo}/contents/${folders.Dreamscape}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log("Error: " + err));
    }
    if (page.pathname === "/DanielMp3") {
      axios
        .get(`https://api.github.com/repos/${username}/${repo}/contents/${folders.Daniel}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log("Error: " + err));
    }
    if (page.pathname === "/Favourites") {
      setUserFav(JSON.parse(localStorage.getItem("favourites")));
    }
  }, [page.pathname]);

  const playersRef = useRef([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  const { setCurrentSong } = useNowPlaying();

  const handlePlay = (index) => 
  {
    setCurrentPlayingIndex(index);
    setCurrentSong(data[index].name);
    playersRef.current.forEach((player, i) => {
      if (player && i !== index) {
      player.audio.current.pause();
      }
    });
  };

  const handleEnded = () => {
    if (currentPlayingIndex === null) return;
    const nextIndex = currentPlayingIndex + 1;
    if (nextIndex < data.length) {
      setCurrentPlayingIndex(nextIndex);
      setTimeout(() => {
        playersRef.current[nextIndex]?.audio.current?.play();
      }, 100);
    }
  };

  const addFavourites = (name, url) => {
    const newSong = { name, url };
    const oldSongs = JSON.parse(localStorage.getItem("favourites")) || [];

    const isAlreadyAdded = oldSongs.some(
      (song) => song.name === name && song.url === url
    );
    if (isAlreadyAdded) {
      toast.info("Already in your favourites!");
      return;
    }

    const updatedSongs = [...oldSongs, newSong];
    localStorage.setItem("favourites", JSON.stringify(updatedSongs));
    toast.success(`${name.replace(".mp3", "")} added to favourites!`);
  };

  const removeFavourites = (name, url) => {
    const storedData = JSON.parse(localStorage.getItem("favourites"));
    const updatedData = storedData.filter(
      (i) => !(i.name === name && i.url === url)
    );
    localStorage.setItem("favourites", JSON.stringify(updatedData));
    setUserFav(updatedData);
    toast.info(`${name.replace(".mp3", "")} deleted from favourites!`);
  };

  const handleHeartClick = (e) => {
    const icon = e.currentTarget.querySelector(".heart-icon");
    icon.classList.add("bounce");
    setTimeout(() => {
      icon.classList.remove("bounce");
    }, 600);
  };

  return (
    <div style={sidebarStyle}>
      <div style={sideMenuStyle} className="sidebar-scroll">
        <Nav vertical style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <h6
            style={{
              color: "#00e4ff",
              textAlign: "center",
              borderBottom: "2px solid",
              marginBottom: "10px",
              paddingBottom: "4px",
            }}
          >
            List Of Our Curated Music :
          </h6>

          {page.pathname === "/Favourites" ? (
            <>
              <h6 className="text-light center">Your Favourites :</h6>
              {userFav ? (
                userFav.map((i, index) => (
                  <div key={i.name + index}>
                    <div>{i.name.replace(".mp3", "")}</div>
                    <div className="custom-audio-wrapper">
                      <AudioPlayer
                        ref={(el) => (playersRef.current[index] = el)}
                        src={i.url}
                        showJumpControls={false}
                        showSkipControls={false}
                        customAdditionalControls={[]}
                        customVolumeControls={[]}
                        layout="horizontal"
                        style={{
                          background: "transparent",
                          boxShadow: "none",
                          width: "270px",
                          padding: 0,
                        }}
                        onPlay={() => handlePlay(index)}
                        onEnded={handleEnded}
                      />
                      <button className="can-button" onClick={() => removeFavourites(i.name, i.url)}>
                        <span className="can-icon"> <FontAwesomeIcon icon={faTrashCan} /> </span>
                      </button>
                    </div>
                    <p className="customAudio"></p>
                  </div>
                ))
              ) : (
                <h6>Looks like you haven't add your favourites, Try Adding a few of your choices.</h6>
              )}
            </>
          ) : (
            data.map((i, index) => (
              <div key={i.sha}>
                <div className="song-row">
                  <span className="song-name">{i.name.replace(".mp3", "")}</span>
                </div>
                <div className="audio-heart-container">
                  <AudioPlayer
                    ref={(el) => (playersRef.current[index] = el)}
                    src={i.download_url}
                    showJumpControls={false}
                    showSkipControls={false}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    layout="horizontal"
                    style={{
                      background: "transparent",
                      boxShadow: "none",
                      width: "270px",
                      padding: 0,
                    }}
                    onPlay={() => handlePlay(index)}
                    onEnded={handleEnded}
                  />
                  <button className="heart-button" onClick={(e) => {addFavourites(i.name, i.download_url); handleHeartClick(e);}}>
                    <span className="heart-icon"> <FontAwesomeIcon icon={faRegularHeart} /> </span>
                  </button>
                  <ToastContainer position="top-right" autoClose={2000} />
                </div>
                <p className="customAudio"></p>
              </div>
            ))
          )}
        </Nav>
      </div>
    </div>
  );
}

export default LofiSideBar;
