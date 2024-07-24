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
      <nav className="nav">
        <ul className={!isNavVisible ? "hide-on-mobile" : null}>
          <li className="home">
            <Link to="/">WebSite B Theories</Link>
          </li>
          <li>
            <Link to="/about">Link</Link>
          </li>
          <li>
            <Link to="/projects">Link</Link>
          </li>
          <li className="search">
            <input type="text" placeholder="Search.."></input>
          </li>
          {/* <li>
            <Link to="/resume" target="_blank">
              <span className="mobile-only-nav-text">Resume</span>
              <FaFile />
            </Link>
          </li> */}
        </ul>
      </nav>
    );
  }
}

export default Nav;