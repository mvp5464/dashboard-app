import { IndianRupeeIcon, PowerIcon } from "lucide-react";
import DashboardInfoSection from "../components/DashboardInfoSection";
import DropDownComp from "../components/DropDownComp";
import InstalledIcon from "../components/icons/InstalledIcon";
import SearchIcon from "../components/icons/SearchIcon";
import TruckIcon from "../components/icons/TruckIcon";
import MyDoughnutChart from "../components/PieChartComp";
import { useEffect, useState } from "react";
import { UserInfoOne, UserInfoTwo } from "../utils/UserInfo";

interface UserInterface {
  myLabel: string[];
  myData: number[];
}

const Dashboard = () => {
  const [userOneData, setUserOneData] = useState<UserInterface>({
    myData: [],
    myLabel: [],
  });
  const [userTwoData, setUserTwoData] = useState<UserInterface>({
    myData: [],
    myLabel: [],
  });

  useEffect(() => {
    const newData: number[] = [];
    const newLabels: string[] = [];

    UserInfoOne.forEach((val) => {
      newData.push(val.totalVotes);
      newLabels.push(val.colors);
    });

    setUserOneData({
      myData: newData,
      myLabel: newLabels,
    });
  }, [UserInfoOne]);

  useEffect(() => {
    const newData: number[] = [];
    const newLabels: string[] = [];

    UserInfoTwo.forEach((val) => {
      newData.push(val.totalVotes);
      newLabels.push(val.colors);
    });

    setUserTwoData({
      myData: newData,
      myLabel: newLabels,
    });
  }, [UserInfoTwo]);

  return (
    <>
      <div className=" flex justify-between items-center mb-6">
        <div className=" flex items-center bg-white  border-2 border-neutral-400 rounded-2xl p-1">
          <input
            type="text"
            placeholder="Search"
            name="search"
            className=" w-28 focus-visible:ring-0 focus:outline-none "
          />
          <SearchIcon />
        </div>
        <div>
          <DropDownComp />
        </div>
      </div>
      <div className="mb-4">
        <h1 className=" text-neutral-900 font-semibold text-xl">DASHBOARD</h1>
        <h4 className=" text-cyan-400 text-sm">Welcome to your dashboard</h4>
      </div>
      <div className="grid grid-cols-4 justify-betweens items-centers gap-3 w-full mb-4">
        <DashboardInfoSection
          logo={<InstalledIcon className=" w-10 h-10  stroke-cyan-400" />}
          title={"Machine Installed"}
          number={"12,361"}
          percentage={"+14%"}
        />
        <DashboardInfoSection
          logo={<PowerIcon className=" w-10 h-10  stroke-cyan-400" />}
          title={"Machine Installed"}
          number={"12,361"}
          percentage={"+14%"}
        />
        <DashboardInfoSection
          logo={<IndianRupeeIcon className=" w-10 h-10  stroke-cyan-400" />}
          title={"Machine Installed"}
          number={"12,361"}
          percentage={"+14%"}
        />
        <DashboardInfoSection
          logo={<TruckIcon className=" w-10 h-10  stroke-cyan-400" />}
          title={"Machine Installed"}
          number={"12,361"}
          percentage={"+14%"}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 ">
        <div className=" bg-amber-200 h-full w-full rounded-xl p-3 flex justify-center items-center">
          <div className=" w-[20rem] h-[20rem]">
            <MyDoughnutChart
              userData={userOneData.myData}
              userLables={userOneData.myLabel}
            />
          </div>
        </div>
        <div className=" bg-amber-200 h-full w-full rounded-xl p-3 flex justify-center items-center">
          <div className=" w-[20rem] h-[20rem]">
            <MyDoughnutChart
              userData={userTwoData.myData}
              userLables={userTwoData.myLabel}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
