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
    setformErrors(validate(firstName));
    setformErrors(validate(lastName));
    setformErrors(validate(username));
    setformErrors(validate(password));
    setformErrors(validate(city));

    setIsSubmit(true);
    axios
      .get("http://localhost:3000/users?userName=" + username)
      .then((response) => {
        console.log("response >>>", response);
        if (response.data.length === 0) {
          axios
            .post("http://localhost:3000/users", {
              firstName: firstName,
              lastName: lastName,
              city: city,
              userName: username,
              password: password,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          alertify.success("Registration successful, please login!");
          setTimeout(function () {
            navigate("/");
          }, 2000);
        } else {
          alertify.error("Registration failed, you are already registered!");
          setTimeout(function () {
            navigate("/");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("error >>>", error);
      });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(username);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!firstName) {
      errors.firstName = "First name is required!";
    } else if (firstName.length < 3) {
      errors.firstName = "First name must be more than 2 characters!";
    } else if (firstName.length > 25) {
      errors.firstName = "First name cannot exceed more than 25 characters!";
    }

    if (!lastName) {
      errors.lastName = "Last name is required!";
    } else if (lastName.length < 2) {
      errors.lastName = "Last name must be more than 1 character!";
    } else if (lastName.length > 25) {
      errors.lastName = "Last name cannot exceed more than 25 characters!";
    }
    if (!username) {
      errors.username = "Username is required!";
    } else if (username.length < 3) {
      errors.username = "Username must be more than 2 characters!";
    } else if (username.length > 20) {
      errors.username = "Username cannot exceed more than 20 characters!";
    }

    if (!password) {
      errors.password = "Password is required!";
    } else if (password.length < 6) {
      errors.password = "Password must be more than 5 characters!";
    } else if (password.length > 30) {
      errors.password = "New password cannot exceed more than 30 characters!";
    }

    if (!city) {
      errors.city = "City is required!";
    } else if (city.length < 2) {
      errors.city = "City must be more than 1 character!";
    } else if (city.length > 40) {
      errors.city = "City cannot exceed more than 40 characters!";
    }
    return errors;
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
