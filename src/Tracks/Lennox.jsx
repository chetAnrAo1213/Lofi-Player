import LofiNavBar from "../Components/LofiNavbar";

function Lennox()
{
    return(
        <>
             <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        src=""
        autoPlay loop playsInline muted
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain",
          zIndex: -1, backgroundColor: "black"}} />
    </div>
        </>
    );

}

export default Lennox;
