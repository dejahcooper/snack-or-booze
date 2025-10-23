import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavItem } from "reactstrap";

function NavBar() {
  return (
    <Navbar expand="md" className="mb-4">
      <NavLink exact to="/" className="navbar-brand">
        Snack or Booze
      </NavLink>

      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink
            exact
            to="/snacks"
            className="nav-link"
            activeClassName="active"
          >
            Snacks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            exact
            to="/drinks"
            className="nav-link"
            activeClassName="active"
          >
            Drinks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            exact
            to="/add"
            className="nav-link"
            activeClassName="active"
          >
            Add Item
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
