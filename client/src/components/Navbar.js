import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

function Navbar(props) {
  function handleLogOut(e) {
    e.preventDefault();
    props.dispatch(logout());
  }
  return (
    <nav className="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Bank Holidays
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {!props.auth.isLoggedIn && (
              <>
                <li className="nav-link">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}

            {props.auth.isLoggedIn && (
              <>
                <li className="nav-link">
                  <a href="#" className="nav-link">
                    {props.auth.user.name}{" "}
                    {props.auth.user.admin && <span>(Admin)</span>}
                  </a>
                </li>
                <li className="nav-link">
                  <Link className="nav-link" to="/dashboard1">
                    Dashboard 1
                  </Link>
                </li>

                {/* <li className="nav-link">
              <p className="nav-link">Welcome {props.auth.user.name}</p>
            </li> */}
                <li className="nav-link">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => handleLogOut(e)}
                  >
                    Logout
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbar);
