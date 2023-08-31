import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from "../assets/logo2.png";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <div className="company">
        <Link to="/"><img src={Logo} alt="logo"></img>
          <h3>WebWorkWave</h3> </Link></div>
        <Link to="/"> Home </Link>
        <Link to="/JobLists"> Job Search </Link>
        <Link to="/Login"> Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
