import React from "react";
import Sidebar from "../components/Sidebar";
import EventsSidebar from "../components/EventsSidebar";
import Header from "../components/Header";
import SearchEventBar from "../components/SearchEventBar";

import { Divider } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <EventsSidebar />

        <div className="w-[74%] flex-col">
          <Header />
          <Divider />
          <SearchEventBar />
        </div>
      </div>
    </>
  );
};

export default Home;
