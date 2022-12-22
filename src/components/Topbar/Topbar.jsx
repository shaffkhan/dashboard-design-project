import React from "react";
import { NotificationsNone,Settings,Language} from "@mui/icons-material";
import dp from "./../../assets/dp.webp"
const Topbar = () => {
  //created a div that will wrap all the navbar
  return (
    <div className="topbar w-[100%] h-[50px] bg-white sticky top-0 z-50">
      {/* now created a div that will be our navbar in real */}
      <div className="flex py-0 px-[20px] justify-between items-center">
        {/* splitted the navbar into two sides left and right */}
        <div className="topleft">
          <span className="font-bold text-[30px] text-[darkblue] cursor-pointer ">
            shaff Admin
          </span>

          {/* div for the right side*/}
        </div>
        <div className="topright flex items-center justify-center gap-6 mr-2">
          {/* now here we will wrap the icon and the number of notifcations etc in a div so that we can use position to make them look like
      real notification*/}
          <div className="relative">
            <NotificationsNone />
            <span className="absolute top-[-5px] right-[0px] bg-red-700 text-white text-[10px] flex justify-center items-center rounded-[50%] w-4 h-4">2</span>            
          </div>


          <div className="relative">
            <Language />
            <span className="absolute top-[-5px] right-[0px] bg-red-700 text-white text-[10px] flex justify-center items-center rounded-[50%] w-4 h-4">2</span>            
          </div>


          <div className="relative">
            <Settings />
            <span className="absolute top-[-5px] right-[0px] bg-red-700 text-white text-[10px] flex justify-center items-center rounded-[50%] w-4 h-4">2</span>            
          </div>

          {/* creating the profile pic in the navbar */}
          <img src={dp} alt="" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
