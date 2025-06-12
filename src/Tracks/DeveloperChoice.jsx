import LofiNavBar from "../Components/LofiNavbar";

function DeveloperChoice()
{
    return(
        <>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        src="https://raw.githubusercontent.com/chetAnrAo7/LofiPlayer-Data/main/CoverPageVideo/Developer%20Choice.mp4"
        autoPlay loop playsInline muted
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain",
          zIndex: -1, backgroundColor: "black"}} />
        </div>
    </>
    );

}

export default DeveloperChoice;
