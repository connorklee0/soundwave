import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#1e1e1e] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-not-allowed">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#1e1e1e] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="" className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-not-allowed"
            />
            <img
              src={assets.plus_icon}
              alt=""
              className="w-5 cursor-not-allowed"
            />
          </div>
        </div>
        <div className="p-4 bg-[#2e2e2e] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist.</h1>
          <p className="font-light">Curate your vibe.</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-not-allowed">
            Create a Playlist
          </button>
        </div>
        <div className="p-4 bg-[#2e2e2e] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow,</h1>
          <p className="font-light">
            We'll keep you updated on any new episodes.
          </p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 cursor-not-allowed">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
