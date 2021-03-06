import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../constants/apiConstants";
import axios from "axios";
import Camera from "../Camera/Camera";

function Home(props) {
  // useEffect(() => {
  //   axios
  //     .get(API_BASE_URL + "/user/me", {
  //       headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) },
  //     })
  //     .then(function (response) {
  //       if (response.status !== 200) {
  //         redirectToLogin();
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       redirectToLogin();
  //     });
  // });
  // function redirectToLogin() {
  //   props.history.push("/login");
  // }
  return (
    <div className="row d-flex justify-content-center">
      <Camera
        labname="Lab: Carleton 1"
        title="Camera 1"
        file="http://104.154.240.223:8080/stream/stream.m3u8"
      />
      <Camera
        labname="Lab: Carleton 2"
        title="Camera 1"
        file="http://104.154.240.223:8080/stream/stream.m3u8"
      />
    </div>
  );
}

export default withRouter(Home);
