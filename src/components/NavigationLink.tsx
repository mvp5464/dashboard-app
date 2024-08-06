import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  name: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavigationLink = ({ children, name, setIsOpen }: Props) => {
  return (
    <Link
      onClick={() => setIsOpen(false)}
      to={`/${name === "Dashboard" ? "" : name}`}
      className=" flex p-1 rounded stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 "
    >
      {children}
      <p className="text-inherit  whitespace-nowrap overflow-hidden tracking-wide">
        {name}
      </p>
    </Link>
  );
};

export default NavigationLink;
