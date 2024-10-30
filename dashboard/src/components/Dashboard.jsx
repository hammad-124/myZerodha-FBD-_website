import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps.jsx";
import Funds from "./Funds.jsx";
import Holdings from "./Holdings.jsx";

import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import Summary from "./Summary.jsx";
import WatchList from "./WatchList.jsx";
import { GeneralContextProvider } from "./GeneralContext.jsx";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
    <GeneralContextProvider>
        <WatchList />
        </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary/>}></Route>
          <Route path="/orders" element={<Orders/>} ></Route>
          <Route path="/holdings" element={<Holdings/>}></Route>
          <Route path="/positions" element={<Positions/>} ></Route>
          <Route path="/funds" element={<Funds/>}></Route>
          <Route path="/apps" element={<Apps/>}></Route>
          
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;