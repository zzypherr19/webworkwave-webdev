import React from "react";
import "../styles/Footer.css";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook"

function Footer() {
  return (
    <div className="footer">
      <div className="content">
      <h5>WebWorkWave</h5>  
       <h4>We transform the way candidates find jobs and companies hire talent.</h4>
        <h4>© 2023 WebWorkWave.</h4>
          <a href="https://www.google.com" style={{ textDecoration: 'none' }}> <InstagramIcon />  </a>
          <a href="https://www.google.com"style={{ textDecoration: 'none' }}> <FacebookIcon />  </a>
          <a href="https://www.google.com" style={{ textDecoration: 'none' }}> <GithubIcon />  </a>
    </div>
    </div>
  );
}

export default Footer;
