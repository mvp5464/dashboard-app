import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const DropDownComp = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="w-10 h-10 bg-gradient-to-br overflow-hidden from-orange-100 to to-amber-300 rounded-full flex justify-center items-center">
            <img src="/vite.svg" alt="Img" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" bg-white rounded-xl mr-10">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={"/signin"}>
            <DropdownMenuItem>LogOut</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownComp;
