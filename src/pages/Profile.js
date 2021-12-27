import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import { useEffect } from "react";
import alertify from "alertifyjs";
import axios from "axios";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let userId = sessionStorage.getItem("userId");

    let validationResult = true;

    if (firstName === "") {
      validationResult = false;
      alertify.error("First name cannot be empty");
    } else if (firstName.length < 3) {
      validationResult = false;
      alertify.error("First name length cannot be less than 3");
    } else if (firstName.length > 25) {
      validationResult = false;
      alertify.error("First name length cannot be greater than 25");
    }

    if (lastName === "") {
      validationResult = false;
      alertify.error("Last name cannot be empty");
    } else if (lastName.length < 2) {
      validationResult = false;
      alertify.error("Last name length cannot be less than 2");
    } else if (lastName.length > 25) {
      validationResult = false;
      alertify.error("Last name length cannot be greater than 25");
    }

    if (username === "") {
      validationResult = false;
      alertify.error("username cannot be empty");
    } else if (username.length < 3) {
      validationResult = false;
      alertify.error("username length cannot be less than 3");
    } else if (username.length > 20) {
      validationResult = false;
      alertify.error("username length cannot be greater than 20");
    }

    if (city === "") {
      validationResult = false;
      alertify.error("city cannot be empty");
    } else if (city.length < 2) {
      validationResult = false;
      alertify.error("city length cannot be less than 2");
    } else if (city.length > 40) {
      validationResult = false;
      alertify.error("city length cannot be greater than 40");
    }

    if (oldPassword === "") {
      validationResult = false;
      alertify.error("old password cannot be empty");
    } else if (oldPassword.length < 6) {
      validationResult = false;
      alertify.error("old password length cannot be less than 6");
    } else if (oldPassword.length > 30) {
      validationResult = false;
      alertify.error("old password length cannot be greater than 30");
    }

    if (password === "") {
      validationResult = false;
      alertify.error("confirm password cannot be empty");
    } else if (password.length < 6) {
      validationResult = false;
      alertify.error("confirm password length cannot be less than 6");
    } else if (password.length > 30) {
      validationResult = false;
      alertify.error("confirm password length cannot be greater than 30");
    }

    if (newPassword === "") {
      validationResult = false;
      alertify.error("new password cannot be empty");
    } else if (newPassword.length < 6) {
      validationResult = false;
      alertify.error("new password length cannot be less than 6");
    } else if (newPassword.length > 30) {
      validationResult = false;
      alertify.error("new password length cannot be greater than 30");
    } else if (password !== newPassword) {
      validationResult = false;
      alertify.error("passwords not matched. Please try again.");
    }

    if (validationResult) {
      axios
        .get("http://localhost:8080/api/users/info/" + userId)
        .then((response) => {
          let info = response.data;
          info = info.data;

          if (firstName && lastName && username && city) {
            firstName.value = info.firstName;
            lastName.value = info.lastName;
            username.value = info.username;
            city.value = info.city;
          }
        });
    }
  };

  if (sessionStorage.getItem("response") != 200) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <div className="my-4">
              <form onSubmit={handleSubmit}>
                <hr className="my-4" />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="firstname" className="mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control mb-2"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <p style={{ color: "#B63B20" }}>
                  </p>
                  <div className="form-group col-md-6">
                    <label for="lastname" className="mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="form-control mb-2"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <p style={{ color: "#B63B20" }}>
                  </p>
                  <div className="form-group col-md-6">
                    <label for="userName" className="mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="userName"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <p style={{ color: "#B63B20" }}>
                  </p>
                  <div className="form-group col-md-6">
                    <label for="city" className="mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control mb-2"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <p style={{ color: "#B63B20" }}>
                  </p>
                </div>

                <hr className="my-5" />
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="oldPassword" className="mb-2">
                        Old Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="oldPassword"
                        name="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                    <p style={{ color: "#B63B20" }}>
                    </p>
                    <div className="form-group">
                      <label for="newPassword" className="mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <p style={{ color: "#B63B20" }}>
                    </p>
                    <div className="form-group">
                      <label for="confirmPassword" className="mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <p style={{ color: "#B63B20" }}>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary mt-2 mb-5">
                    Save Change
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
