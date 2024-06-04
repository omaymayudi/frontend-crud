import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="">
      <header>{/* <Navbar /> */}</header>
      <main>
        <div className="flex">
          <div className="w-1/6">
            <Sidebar />
          </div>
          <div className="w-5/6">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
