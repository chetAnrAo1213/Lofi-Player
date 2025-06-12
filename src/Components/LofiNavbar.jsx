import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'; // Make sure to import Nav and NavItem
import LofiSideBar from './LofiSideBar';

function LofiNavBar() 
{
  const navStyle = {
    backgroundColor: '#1a0e25', 
  };

  const brandStyle = {
    color: '#7554a3', 
    textDecoration: 'none',
    padding:8
  };

const linkStyle = ({ isActive }) => ({
  color: isActive ? 'white':'#7554a3',
  padding: '10px',
  textDecoration: 'none',
});


const DevlinkStyle = ({ isActive }) => ({
  color: isActive ?'white':'#a30000',
  padding: '10px',
  textDecoration: 'none',
});

const UserlinkStyle = ({ isActive }) => ({
  color: isActive ? 'white': '#00e4ff',
  padding: '10px', 
   textDecoration: 'none',
});


  return (
    <>     
      <Navbar sticky="top" style={navStyle} >
        <NavbarBrand href="/"   style={brandStyle}> Lofi-Player</NavbarBrand>
        <Nav className="border-start border-0">  
          <NavItem className="border-end border-0">
            <NavLink to="/Nature"  style={linkStyle}>5 Minutes Of Nature</NavLink>
          </NavItem>
          <NavItem className="border-end border-0">
            <NavLink to="/DanielMp3" style={linkStyle}>Daniel Mp3</NavLink>
          </NavItem>
          <NavItem className="border-end border-0">
            <NavLink to="/Lennox"  style={linkStyle}>Lennox</NavLink>
          </NavItem>
          <NavItem className="border-end border-0">
            <NavLink to="/Mylesxiety" style={linkStyle}>Mylesxiety</NavLink>
          </NavItem>
          <NavItem className="border-end border-0">
            <NavLink to="/Dreamscape" style={linkStyle}>Dreamscape</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/DeveloperChoice" className="border-end border-0" style={DevlinkStyle}>Developer Choice</NavLink> 
          </NavItem>
          <NavItem className="ms-auto">
            <NavLink to="/Favourites" style={UserlinkStyle}>Favourite</NavLink> 
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default LofiNavBar;