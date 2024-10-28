import { useState } from "react";
import React from "react";
import {watchlist} from "../data/data";
import {Tooltip,Grow} from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return <Watchlistitems  stock={stock} key={index} />
          
          
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const Watchlistitems = ({stock})=>{

  const[watchlistAction,setwatchlistAction] = useState(false);

const iswatchlistEnter =(e)=>{
  setwatchlistAction(true);
};

const iswatchlistLeave=(e)=>{
   setwatchlistAction(false);
}
return(
  <li onMouseEnter={iswatchlistEnter} onMouseLeave={iswatchlistLeave} >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itenInfo">
          <span>{stock.percent}</span>
          {stock.isDown ?(
            <KeyboardArrowUp  className="up"/>
          ) : (<KeyboardArrowDown className="down"/>)};
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {watchlistAction && <WatchListActions uid ={stock.name}/>}
  </li>
);

};
const WatchListActions = ({uid})=>{
  return(
    <span className="actions">
      <span>
        <Tooltip
         title = "buy (B)" arrow placement="top" TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
         title = "Sell (S)" arrow placement="top" TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
         title = "Analytics (A)" arrow placement="top" TransitionComponent={Grow}>
          <button className="action">
          <BarChartOutlined className="icon"/>
          </button>
          
        </Tooltip>
        <Tooltip
         title = "More (M)" arrow placement="top" TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}

