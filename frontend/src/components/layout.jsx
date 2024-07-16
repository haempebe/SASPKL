import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <main className="App">
      <div className="mx-5 md:mx-auto overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
