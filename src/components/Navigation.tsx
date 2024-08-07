import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import NavigationLink from "./NavigationLink";
import {
  ChartBarIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

const containerVariants = {
  close: {
    width: "4rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "14rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    console.log("Pressed");
    setIsOpen(!isOpen);
  };
  return (
    <motion.nav
      variants={containerVariants}
      initial="close"
      animate={containerControls}
      className=" bg-neutral-900 flex flex-col z-10 gap-20 p-3 fixed top-0 left-0 min-h-fit h-full shadow shadow-neutral-600"
    >
      <div className=" flex flex-row w-full justify-between pic">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to to-amber-300 rounded-full flex justify-center items-center">
          <img src="/vite.svg" alt="Img" />
        </div>
        <button className=" p-1 rounded-full flex" onClick={handleOpenClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-8 h-8 stroke-neutral-200"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={svgVariants}
              initial="close"
              animate={svgControls}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <NavigationLink setIsOpen={setIsOpen} name="Dashboard">
          <ChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink setIsOpen={setIsOpen} name="MachineData">
          <DocumentChartBarIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink setIsOpen={setIsOpen} name="MachineMap">
          <MapIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
        <NavigationLink setIsOpen={setIsOpen} name="Reports">
          <ChartPieIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </NavigationLink>
      </div>
    </motion.nav>
  );
};

export default Navigation;
