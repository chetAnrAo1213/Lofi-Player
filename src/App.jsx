import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Nature from "./Tracks/Nature";
import DeveloperChoice from "./Tracks/DeveloperChoice";
import Mylesxiety from "./Tracks/Mylesxiety";
import Lennox from "./Tracks/Lennox";
import Dreamscape from "./Tracks/Dreamscape";
import DanielMp3 from "./Tracks/DanielMp3";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import { NowPlayingProvider } from "./Components/NowPlayingContext";


function App() {
  return (
    <>
    <NowPlayingProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="Nature" element={<Nature />} />
        <Route path="DeveloperChoice" element={<DeveloperChoice />} />
        <Route path="Mylesxiety" element={<Mylesxiety />} />
        <Route path="Lennox" element={<Lennox />} />
        <Route path="Dreamscape" element={<Dreamscape />} />
        <Route path="DanielMp3" element={<DanielMp3 />} />
        <Route path="Favourites" element={<Favourites/>} />
      </Route>
    </Routes>
  </NowPlayingProvider>
    </>
  );
}

export default App;
