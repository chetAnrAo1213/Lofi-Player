import LofiNavBar from "../Components/LofiNavbar";
import LofiSideBar from "../Components/LofiSideBar";
import { Outlet, useLocation } from "react-router-dom";
import LofiFooter from "../Components/LofiFooter";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div>
        <LofiNavBar />
        <div style={{ display: "flex" }}>
          {!isHomePage && <LofiSideBar />}
          <div style={{ flexGrow: 1 }}>
            <Outlet />
          </div>
        </div>
      </div>
      {!isHomePage && <LofiFooter />}
    </>
  );
}

export default Layout;
