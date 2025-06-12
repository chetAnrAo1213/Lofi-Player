import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LofiFooter() 
{
  return (
    <footer className="text-center text-lg-start text-muted">
      <div className="footer-content d-flex align-items-center justify-content-center h-100">
        <section className="container text-md-center">
          <div className="row justify-content-center">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4" style={{ color: "black" }}>
              <h6 className="text-uppercase fw-bold">C-Garage</h6>
              <hr className="divider" style={{ borderBottom: "1px solid white", margin: "15px 0" }} />
              <p>
                We offer a sneak peek into how students can kickstart their projects.
                Our Community helps beginners with ideas and guidance for creating simple projects from the start.
              </p>
            </div>

            
            <div className="col-md-2 col-lg-2 col-xl-2 mb-4" style={{ color: "black" }}>
              <h6 className="text-uppercase fw-bold">Applications</h6>
              <hr className="divider" style={{ borderBottom: "1px solid white", margin: "15px 0" }} />
              <p><a href="#!" className="text-reset">Billing System</a></p>
              <p><a href="#!" className="text-reset">Blogs</a></p>
              <p><a href="#!" className="text-reset">Tutorials</a></p>
              <p><a href="#!" className="text-reset">Some Other Projects</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mb-4" style={{ color: "black" }}>
              <h6 className="text-uppercase fw-bold">Quick links</h6>
              <hr className="divider" style={{ borderBottom: "1px solid white", margin: "15px 0" }} />
              <p><a href="#!" className="text-reset">About Us</a></p>
              <p><a href="#!" className="text-reset">Settings</a></p>
              <p><a href="#!" className="text-reset">Privacy Policy</a></p>
              <p><a href="#!" className="text-reset">Help</a></p>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-2" style={{ backgroundColor: "white" }}>
        © 2025 Copyright: <a className="text-reset fw-bold" href="#">Lofi Player</a>
      </div>

      <style jsx>{`
        footer {
          background-image: url('https://img.freepik.com/premium-photo/anime-boy-his-computer-hearing-lofi-music_846334-1012.jpg');
          background-size: cover;
          background-position: center;
          height: 600px;
          font-weight: bold;
          color: black;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .text-reset:hover {
          background-color: #cfbed4;
          padding: 2px;
          border-radius: 2px;
        }
        .footer-content {
          flex: 1;
        }
      `}</style>
    </footer>
  );
}

export default LofiFooter;
