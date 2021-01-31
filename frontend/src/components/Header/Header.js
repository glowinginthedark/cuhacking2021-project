import React from "react";
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import logo from "../../logo.svg";

function Header(props) {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  let title = capitalize(
    props.location.pathname.substring(1, props.location.pathname.length)
  );
  if (props.location.pathname === "/") {
    title = "Welcome";
  }
  function renderLogout() {
    if (props.location.pathname === "/home") {
      return (
        <div style={{ margin: "5px" }} className="ml-auto">
          <button className="btn btn-danger" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      );
    }
  }
  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    props.history.push("/login");
  }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="row col-12 align-middle text-white">
        <img src={logo} alt="logo" height="50vh" />
        <a
          href="/home"
          style={{
            marginTop: "12px",
            marginLeft: "20px",
            textDecoration: "none",
          }}
          className="h5"
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            margin: "12px",
            textDecoration: "none",
          }}
          className="h5"
        >
          About
        </a>
        {renderLogout()}
      </div>
    </nav>
  );
}
export default withRouter(Header);
