import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Small banner only for inner pages */}
      {!isHome && (
        <div className="relative h-40 w-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="banner"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black/50"></div>
          <Navbar />
        </div>
      )}

      {/* Home page Navbar (no small banner) */}
      {isHome && <Navbar />}

      <Outlet />
    </>
  );
}

export default Layout;
