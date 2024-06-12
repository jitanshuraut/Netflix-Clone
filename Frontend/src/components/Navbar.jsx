import React, { useEffect, useState } from "react";
import style from "../style/navbar.module.css";
import { useNavigate } from "react-router-dom";
import { VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  Sidebar,
  SubMenu,
  useProSidebar,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart, FaSearch } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiMonitor,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";
import { RiPencilLine, RiAccountCircleFill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { High_light } from "../States/Toggle_Bar";

function Navbar() {
  let navigate = useNavigate();
  const count = useSelector((state) => state.Toggel.value);
  const tog_highlight = useSelector((state) => state.Toggel.val_high);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(High_light());
  });
  const { collapseSidebar } = useProSidebar();

  const [show, setshow] = useState("container");
  useEffect(() => {
    if (collapseSidebar()) {
      collapseSidebar();
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow("container");
      } else {
        setshow("container_black");
      }
    });
  }, []);
  return (
    <>
      <div
        style={{
          display: count == 1 ? "flex" : "none",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "black",
        }}
      >
        <img
          src="logo.jfif"
          className={style.img}
          style={{ backgroundColor: "black" }}
          onClick={() => {
            navigate("/home");
          }}
        />
        <Sidebar style={{ backgroundColor: "black" }}>
          <Menu className={style.extside} style={{ backgroundColor: "black" }}>
            <MenuItem
              className={style.side}
              onClick={() => {
                navigate("/search");
              }}
            >
              {console.log(tog_highlight)}
              <FaSearch
                style={{ fontSize: tog_highlight == 1 ? "35px" : "20px" , color:tog_highlight == 1 ?"red":"" }}
              />
            </MenuItem>
            <MenuItem
              className={style.side}
              onClick={() => {
                navigate("/tv");
              }}
            >
              {" "}
              <FiMonitor style={{ fontSize: tog_highlight == 3 ? "35px" : "20px" , color:tog_highlight == 3 ?"red":"" }} />
            </MenuItem>
            <MenuItem
              className={style.side}
              onClick={() => {
                navigate("/movies");
              }}
            >
          
              <BiMoviePlay style={{ fontSize: tog_highlight == 2 ? "35px" : "20px" , color:tog_highlight == 2 ?"red":"" }} />
            </MenuItem>
            <MenuItem
              className={style.side}
              onClick={() => {
                navigate("/trending");
              }}
            >
              
              <FiTrendingUp style={{ fontSize: tog_highlight == 4 ? "35px" : "20px" , color:tog_highlight == 4 ?"red":"" }} />
            </MenuItem>

            <MenuItem
              className={style.side}
              onClick={() => {
                navigate("/profile");
              }}
            >
              <RiAccountCircleFill style={{ fontSize: tog_highlight == 5 ? "35px" : "20px" , color:tog_highlight == 5 ?"red":""}} />
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}

export default Navbar;

{
  /* <div className={style.container}>
<div className={style.img}>
  <img src="logo.jfif" className={style.img} alt="" onClick={()=>{
    navigate("/home")
  }} />
</div>
<div className={style.link}>
  {/* <h1><HiHome className={style.icon} onClick={()=>{
    navigate("/home")
  }} />
  </h1>
<h1><HiUser className={style.icon} onClick={()=>{
navigate("/profile")
}} /></h1>
  <h1><BiMovie className={style.icon} onClick={()=>{
    navigate("/")
  }}/></h1>
  <h1><CgScreen className={style.icon} /></h1> */
}

{
  /* <VscSettingsGear className={style.icon} onClick={()=>{
navigate("/profile")
}} />


</div>
</div>  */
}
