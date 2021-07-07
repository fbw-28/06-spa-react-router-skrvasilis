import React from "react";
import {NavLink , withRouter, Link} from 'react-router-dom'

function NavBar(props) {
    console.log(props)
  return (
    <div className="header">
      <h1>About Me</h1>
      <nav>
        <p>
          <NavLink
            to="/"
            activeClassName={
             ( props.location.pathname === "/" ||
              props.location.pathname === "/me")
                ? "active"
                : null
            }
          >
            Me
          </NavLink>
        </p>
        <p>
          <NavLink to="/hobbies" activeClassName="active">
            Hobbies
          </NavLink>
        </p>
        <p>
          <NavLink to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </p>
        <Link to='./thanks'></Link>
      </nav>
    </div>
  );
}

export default withRouter(NavBar)