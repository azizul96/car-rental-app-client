import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
      </div>
      <div className=" container mx-auto px-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
