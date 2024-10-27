import React, { useState }  from "react";
import { Link } from "react-router-dom";



const Menu = () => {

  const[ismenuOpen,setmenuOpen] = useState(0);
  const[isUserclicked,setUserclicked]= useState(false);

  const handleMenuclick = (index) =>{
    setmenuOpen(index);
  }
  const handleUserClick = (index) =>{
    setUserclicked(!isUserclicked);
  }
  //Classes

  const menuClass ="menu";
  const activemenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div className="menus">
        <img src="/logo.png" alt="" style={{width :"40px",marginRight : "200px"}}/>
        <ul>
          <li>
            <Link style={{textDecorationLine:"none"} } to="/" onClick={()=> handleMenuclick(0)}>
            <p className={ismenuOpen ===0 ? activemenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecorationLine:"none"} } to="/orders" onClick={()=>handleMenuclick(1)}>
            <p className={ismenuOpen ===1 ? activemenuClass:menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecorationLine:"none"} } to="/Holdings" onClick={()=>handleMenuclick(2)}>
            <p className={ismenuOpen ===2 ?activemenuClass:menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecorationLine:"none"} } to="/positions" onClick={()=>handleMenuclick(3)}>
            <p className={ismenuOpen ===3 ?activemenuClass:menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecorationLine:"none"} } to="/funds" onClick={()=>handleMenuclick(4)}>
            <p className={ismenuOpen ===4 ?activemenuClass:menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecorationLine:"none"} } to="/apps" onClick={()=>handleMenuclick(5)}>
            <p className={ismenuOpen ===5 ?activemenuClass:menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={()=> handleUserClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;