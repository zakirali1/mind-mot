import { NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu, Icon, Sidebar } from "semantic-ui-react";
import React, { useState } from "react";
import "./style.css";

const Burger = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="burger-menu">
        <Sidebar
          animation="overlay"
          as={Menu}
          direction="right"
          visible={sidebarVisible}
          vertical
          style={{ width: "250px" }}
        >
          <Menu.Item as={NavLink} to="/" onClick={handleToggleSidebar}>
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/relax" onClick={handleToggleSidebar}>
            Relax
          </Menu.Item>
          <Menu.Item as={NavLink} to="/eat" onClick={handleToggleSidebar}>
            Eat
          </Menu.Item>
          <Menu.Item as={NavLink} to="/move" onClick={handleToggleSidebar}>
            Move
          </Menu.Item>
          <Menu.Item as={NavLink} to="/sleep" onClick={handleToggleSidebar}>
            Sleep
          </Menu.Item>
          <Menu.Item as={NavLink} to="/about" onClick={handleToggleSidebar}>
            About
          </Menu.Item>
        </Sidebar>

        <Menu.Item
          onClick={handleToggleSidebar}
          position="right"
          style={{ fontSize: 20 }}
        >
          <Icon style={{ color: "grey" }} name="bars" />
        </Menu.Item>
      </div>
    </>
  );
};

export default Burger;
