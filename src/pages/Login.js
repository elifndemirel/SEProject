import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import alertify from "alertifyjs";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    let validationResult = true;

    if(username === ""){
      validationResult = false;
      alertify.error("Username field cannot be empty.");
    }
    else if(username.length > 20){
      validationResult = false;
      alertify.error("username length cannot be greater than 20.")
    }
    else if(username.length < 2){
      validationResult = false;
      alertify.error("username length cannot be less than 2.")

    }

    if(password === ""){
      validationResult = false;
      alertify.error("Password field cannot be empty.");
    }
    else if (password.length < 6){
      validationResult = false;
      alertify.error("password length cannot be less than 6.")
    }
    else if (password.length > 30){
      validationResult = false;
      alertify.error("password length cannot be less than 30.")
    }

    if(validationResult){
      axios
      .post(
        "http://localhost:8080/api/users/login" , {
          username: username,
          password: password
        }
      )
      .then((response) => {

        response = response.data;
        if(response.success === true){

          sessionStorage.setItem("userId", response.userId);
          alertify.success("Welcome to the Project Gutenberg!");
          sessionStorage.setItem("response", 200);
          navigate("/home");
        }
      })
      .catch((error) => {
        
        let response = error.response.data;
        alertify.error(response.message);
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
              className="pt-5 pb-3"
            >
              {" "}
              Gutenberg Project{" "}
            </h1>
            <Form>
              <FormGroup>
                <Input
                  name="email"
                  placeholder="Username"
                  type="email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  name="password"
                  placeholder="Password"
                  type="password"
                  required
                  minLength={4}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <a
                    style={{ color: "#ededed" }}
                    className="alert-link"
                    href="/register"
                  >
                    Don't have account yet?
                  </a>
                </Label>
              </FormGroup>
              <Button color="primary" onClick={handleLogin}>
                Sign in
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
