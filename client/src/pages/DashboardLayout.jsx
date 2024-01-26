import React, { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSideBar from "../components/SmallSideBar";
import { BigSideBar, Navbar } from "../components";
import { useState } from "react";

const DashBoardContext = createContext();

function DashboardLayout() {
  // temp
  const user = { name: "john" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("togole dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("Logout User");
  };

  return (
    <DashBoardContext.Provider
      value={{ user, showSidebar, isDarkTheme, toggleSidebar, toggleDarkTheme, logoutUser }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashBoardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashBoardContext);

export default DashboardLayout;
