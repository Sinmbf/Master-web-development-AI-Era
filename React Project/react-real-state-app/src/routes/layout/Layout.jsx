import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

function Layout() {
  const [user, setUser] = useState(false);
  return (
    <div className="md:max-w-225 lg:max-w-341.5 mx-auto px-4 min-h-screen flex flex-col">
      <header className="fixed md:relative top-0 left-0 w-full px-4 md:px-0 z-999">
        <NavBar user={user} />
      </header>
      <main className="flex flex-1 pt-24 pb-7 md:pt-2">
        <Outlet context={{ setUser }} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
