function Home()
{
    return(
        <>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
  <div className="col-md-8 text-center">
    <h3
  style={{
    background: 'linear-gradient(90deg, wheat,rgb(65, 235, 206),rgb(175, 53, 212))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  }}
>
  Lofi Player
</h3>

    <h6 style={{ color: 'wheat' }}>Disclaimer</h6>
    <p style={{ color: 'wheat' }}>
      Lofi Player is an experimental project designed for educational and personal entertainment purposes only.
      The music tracks and video backgrounds used in this application are sourced from publicly available content,
      open licenses, or user-submitted material. We do not claim ownership of any third-party content unless
      explicitly stated. All rights remain with the original creators. If you are a copyright
      holder and believe your content has been used improperly, please contact us immediately for prompt removal
      or credit attribution.
    </p>
  </div>
</div>
            
        
        <video src=""
                   autoPlay loop playsInline 
                   style={{position: "fixed",top: 0,left: 0,width: "100vw",height: "100vh",objectFit: "cover",zIndex: -1,}}/>
 </>);
}

export default Home;
