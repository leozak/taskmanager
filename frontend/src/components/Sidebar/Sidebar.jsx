import { useState } from "react";

import { FaCalendarAlt, FaUserCog } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

import SidebarCollapseButton from "./SidebarCollapseButton";
import SidebarTitle from "./SidebarTitle";
import SidebarCallendar from "./SidebarCallendar";

const Sidebar = ({
  nowMonth,
  nowYear,
  nowDay,
  setMonth,
  setYear,
  setDay,
  user,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="relative min-w-60 min-h-full h-screen p-2 bg-cyan-950">
      {/* HEADER */}
      <div className="flex p-1 mb-5 text-gray-400 items-center">
        <SidebarCollapseButton
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />

        <SidebarTitle />
      </div>

      <SidebarCallendar
        month={nowMonth}
        year={nowYear}
        day={nowDay}
        setMonth={setMonth}
        setYear={setYear}
        setDay={setDay}
      />

      {/* USER INFO */}
      <div className="absolute bottom-4 p-2 text-gray-400 text-sm font-semibold">
        <button
          className="flex items-center py-1 gap-x-2 hover:text-gray-200 hover:cursor-pointer"
          title="User options"
        >
          <FaUserCog /> {user.name}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
