import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { IoClose } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showNavbar = () => setIsOpen(!isOpen);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div>
        <Navbar color="dark" expand="md" dark>
          <NavLink to="#" className="menu-bars">
            <CgMenuGridO
              onClick={showSidebar}
              cursor={"pointer"}
              color="#2193b0"
            />
          </NavLink>
          <NavbarToggler onClick={showNavbar} />
          <Collapse navbar isOpen={isOpen}>
            <Nav className="me-auto" navbar>
              <NavItem className="ms-4 mt-2">
                <NavLink href="/home" style={{ color: "#fcf8ec" }}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="ms-4 mt-2">
                <NavLink href="/favorites" style={{ color: "#fcf8ec" }}>
                  My favorites
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          style={{ zIndex: 1 }}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <IoClose color="#2193b0" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="item-title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Nav>
      </div>
    </div>
  );
};

export default NavBar;
