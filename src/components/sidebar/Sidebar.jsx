import React from "react";
import {LineStyle,Timeline,TrendingUp} from '@mui/icons-material';
const Sidebar = () => {
  return (
    <div className="flex-[1] h-[calc(100vh-50px)] sticky t-[50px]">
      <div className="sidebarwrapper p-[20px] text-[#555]">
        <div className="menu">
          <h1 className="text-[black] text-[20px]">Dashboard</h1>
          <ul className="mb-[15px]">
            <li className="p-[5px] "><LineStyle/>Home</li>
            <li className="p-[5px] "><Timeline/>Analytics</li>
            <li className="p-[5px] "><TrendingUp/>Sale</li>
          </ul>

          <h1 className="text-[black] text-[20px]">Dashboard</h1>
          <ul className="mb-[15px]">
            <li className="p-[5px] "><LineStyle/>Home</li>
            <li className="p-[5px] "><Timeline/>Analytics</li>
            <li className="p-[5px] "><TrendingUp/>Sale</li>
          </ul>



        </div>
      </div>
    </div>
  );
};

export default Sidebar;
