import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
  return (
    <>
      <div className=" w-full h-screen flex flex-row relative bg-neutral-100">
        <Navigation />
        <div className=" p-10 w-full ml-20 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
