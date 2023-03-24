import React from "react";
import { NavLink } from "react-router-dom";
// import "./style.css";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import logo from "../../assets/white.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
  return (
    <Menu secondary style={{ padding: "10px", position: "relative" }}>
      <Menu.Item as={NavLink} to="/" style={{ fontSize: 20, color: "grey" }}>
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
        src={logo}
        centered
        circular
        style={{ width: "80px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
      />

      <Menu.Item position="right" style={{ fontSize: 20, color: "darkgrey" }}>
        About
      </Menu.Item>

      <Menu.Item style={{ fontSize: 20, color: "darkgrey" }}>Contact</Menu.Item>
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
  );
};

//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         MindMOT
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <NavLink
//               to="/"
//               end
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to="/about"
//               end
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               About
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to="/eat"
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Eat
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to="/move"
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Move
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to="/relax"
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Relax
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to="/sleep"
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Sleep
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default Navbar;
