import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-[#0d0714] text-white">

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;