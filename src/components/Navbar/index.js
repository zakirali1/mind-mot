import React from "react";
import { NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import logo from "../../assets/white.png";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <Menu
        className="regular-menu"
        secondary
        style={{ padding: "10px", position: "relative" }}
      >
        <Menu.Item as={NavLink} to="/" style={{ fontSize: 20, color: "black" }}>
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/relax"
          style={{ fontSize: 20, color: "darkgrey" }}
        >
          Relax
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/eat"
          style={{ fontSize: 20, color: "darkgrey" }}
        >
          Eat
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/move"
          style={{ fontSize: 20, color: "darkgrey" }}
        >
          Move
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/sleep"
          style={{ fontSize: 20, color: "darkgrey" }}
        >
          Sleep
        </Menu.Item>

        <Image
          className="image"
          src={logo}
          centered
          circular
          style={{
            width: "80px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          }}
        />

        <Menu.Item
          as={NavLink}
          to="/about"
          position="right"
          style={{ fontSize: 20, color: "darkgrey" }}
        >
          About
        </Menu.Item>

        <Menu.Item style={{ fontSize: 20, color: "darkgrey" }}>
          <a
            style={{ fontSize: 20, color: "darkgrey" }}
            href="mailto:info@mindmot.com?,&subject=Add your subject&body=your message here"
            alt=""
          >
            Contact
          </a>
        </Menu.Item>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: 3,
            width: "50%",
            backgroundColor: "lightgrey",
            content: "",
            opacity: 0.5,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
      </Menu>
    </>
  );
};

export default Navbar;
