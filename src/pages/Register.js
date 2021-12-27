import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import { useEffect } from "react";
import axios from "axios";
import alertify from "alertifyjs";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");

  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationResult = true;

    if(firstName === ""){
      validationResult = false;
      alertify.error("First name cannot be empty")
    }else if(firstName.length < 3){
      validationResult = false;
      alertify.error("First name length cannot be less than 3")
    }else if(firstName.length > 25){
      validationResult = false;
      alertify.error("First name length cannot be greater than 25")
    }

    if(lastName === ""){
      validationResult = false;
      alertify.error("Last name cannot be empty")
    }else if(lastName.length < 2){
      validationResult = false;
      alertify.error("Last name length cannot be less than 2")
    }else if(lastName.length > 25){
      validationResult = false;
      alertify.error("Last name length cannot be greater than 25")
    }

    if(username === ""){
      validationResult = false;
      alertify.error("username cannot be empty")
    }else if(username.length < 3){
      validationResult = false;
      alertify.error("username length cannot be less than 3")
    }else if(username.length > 20){
      validationResult = false;
      alertify.error("username length cannot be greater than 20")
    }

    if(city === ""){
      validationResult = false;
      alertify.error("city cannot be empty")
    }else if(city.length < 2){
      validationResult = false;
      alertify.error("city length cannot be less than 2")
    }else if(city.length > 40){
      validationResult = false;
      alertify.error("city length cannot be greater than 40")
    }

    if(password === ""){
      validationResult = false;
      alertify.error("password cannot be empty")
    }else if(password.length < 6){
      validationResult = false;
      alertify.error("password length cannot be less than 6")
    }else if(password.length > 30){
      validationResult = false;
      alertify.error("password length cannot be greater than 30")
    }


    if(validationResult){

      axios.post("http://localhost:8080/api/users/register", {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        city: city
      })
      .then(response => {
        if(response.data.success === true){
          alertify.success(response.data.message);
                  setTimeout(function () {
            navigate("/");
          }, 2000);
        }
      })
      .catch(err => {
        alertify.error(err.response.data.message)
      });
      
    }
  };

  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h1
              style={{ fontStyle: "italic", textAlign: "center" }}
              className="pt-2 pb-3"
            >
              {" "}
              Gutenberg Project{" "}
            </h1>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
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
                  <b>{formErrors.firstName}</b>
                </p>
                <div className="form-group col-md-12">
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
                  <b>{formErrors.lastName}</b>
                </p>
                <div className="form-group col-md-12">
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
                  <b>{formErrors.username}</b>
                </p>
                <div className="form-group col-md-12">
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
                  <b>{formErrors.city}</b>
                </p>
                <div className="form-group col-md-12">
                  <label for="password" className="mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mb-2"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p style={{ color: "#B63B20" }}>
                  <b>{formErrors.password}</b>
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-primary mt-2 mb-5"
                    onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
