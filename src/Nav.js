import React from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaLinkedinIn, FaEnvelope, FaRegSun, FaRegMoon } from "react-icons/fa6";

class Nav extends React.Component {
  render() {
    const {
      toggleColorMode, toggleNav,
      colorMode = "light", isNavVisible
    } = this.props;
    
    var switchToLightMessage = "Switch to Light Mode",
        switchToDarkMessage = "Switch to Dark Mode",
        dynamicColorModeMessage = colorMode === "light" ? switchToDarkMessage : switchToLightMessage;

    return(
      <div>
        <div className="banner-container">
          <img className="banner" src={[process.env.PUBLIC_URL, "images/thumbnails/cryp_banner.png"].join("/")} alt="" />
          <div class="bottom-left">Webcite B Theories</div>
        </div>
        <nav className="nav">
          <ul className={!isNavVisible ? "hide-on-mobile" : null}>
            <li>
              <Link to="/about">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Encyclopedia</Link>
            </li>
            <li>
              <Link to="/projects">Forum</Link>
            </li>
            <li>
              <Link to="/projects">Rules</Link>
            </li>
            <li>
              <Link to="/projects">Stories</Link>
            </li>
            <li>
              <Link to="/projects">FAQ</Link>
            </li>
            <li className="search">
              <input type="text" placeholder="Search.."></input>
            </li>
            <li className="login">
              <Link to="/projects">Login</Link>
            </li>
            <li className="signup">
              <Link to="/projects">Sign Up</Link>
            </li>
            {/* <li>
              <Link to="/resume" target="_blank">
                <span className="mobile-only-nav-text">Resume</span>
                <FaFile />
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;