import { Outlet, Link } from "react-router-dom";
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

{
  /* <nav className="bg-fuchsia-400 flex flex-col p-3">
          <div className=" flex justify-between pb-6">
            <div>
              <img src="/vite.svg" alt="Img" />
            </div>
            <div>|||</div>
          </div>
          <ul className=" flex flex-col justify-center pl-4">
            <li>
              <Link to="/" className=" flex  items-center gap-4 ">
                <DashboardIcon fill="#111111 " className="text-black" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/MachineData" className=" flex  items-center gap-4 ">
                <DashboardIcon fill="#111111 " className="text-black" />
                <span>MachineData</span>
              </Link>
            </li>
            <li>
              <Link to="/MachineMap" className=" flex  items-center gap-4 ">
                <DashboardIcon fill="#111111 " className="text-black" />
                <span>MachineMap</span>
              </Link>
            </li>
            <li>
              <Link to="/Reports" className=" flex  items-center gap-4 ">
                <DashboardIcon fill="#111111 " className="text-black" />
                <span>Reports</span>
              </Link>
            </li>
          </ul>
        </nav> */
}
