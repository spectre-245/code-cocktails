import "./Navbar.css";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="Main_div">
      <nav>
        <ul>
          {/* logo (leave it alone — no active underline) */}
          <li>
            <NavLink exact to="/" className="nav-link">
              <img className="logo" src={logo} alt="logoImage" />
            </NavLink>
          </li>

          {/* Past Events — li gets 'active' class when pathname matches */}
          <li className={location.pathname === "/PastEvents" ? "active" : ""}>
            <NavLink
              to="/PastEvents"
              className="nav-link"
              activeClassName="active"
            >
              Past Events
            </NavLink>
          </li>
          {/* community stories */}
          <li
            className={
              location.pathname === "/CommunityStories" ? "active" : ""
            }
          >
            <NavLink
              to="/CommunityStories"
              className="nav-link"
              activeClassName="active"
            >
              Community Stories
            </NavLink>
          </li>

          <li
            className={location.pathname === "/EcosystemSurvey" ? "active" : ""}
          >
            <NavLink
              to="/EcosystemSurvey"
              className="nav-link"
              activeClassName="active"
            >
              Ecosystem Survey
            </NavLink>
          </li>

          <li className={location.pathname === "/Engage" ? "active" : ""}>
            <NavLink to="/Engage" className="nav-link" activeClassName="active">
              Engage
            </NavLink>
          </li>
          <li>Code Cup</li>
        </ul>

        <Button
          btn_content="Get Ticket"
          backgroundColor="#f7a100"
          shadowColor="#ffe4a9"
          color="black"
        />
      </nav>
    </div>
  );
}

export default Navbar;
