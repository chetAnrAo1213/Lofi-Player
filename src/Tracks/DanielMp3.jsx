import LofiNavBar from "../Components/LofiNavbar";

function DanielMp3() {
  return (
    <>
    
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        src="https://raw.githubusercontent.com/chetAnrAo7/LofiPlayer-Data/main/CoverPageVideo/It%20Will%20Be%20Alright.mp4"
        autoPlay loop playsInline muted
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain",
          zIndex: -1, backgroundColor: "black"}} />
    </div>
    </>
  );
}


export default DanielMp3;
