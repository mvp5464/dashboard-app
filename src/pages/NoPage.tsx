import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="w-full h-[90%] flex justify-center items-center font-bold text-2xl">
      Page Not Found! Go to&nbsp;
      <Link className=" cursor-pointer underline " to={"/"}>
        Home
      </Link>
      &nbsp;page
    </div>
  );
};

export default NoPage;
