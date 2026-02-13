import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Navbar */}
      <div className={`w-full z-50 ${isHome ? "absolute top-0 left-0" : "bg-white shadow fixed top-0 left-0"}`}>
        <Navbar isHome={isHome} />
      </div>

      {/* Page Content */}
      <main className={`${isHome ? "" : "pt-24"} flex-grow`}>
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
