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
    axios
      .get(
        "http://localhost:3000/users?username=" +
          username +
          "&password=" +
          password
      )
      .then((response) => {
        console.log("response >>>", response.data[0].id);
        if (response.data.length > 0) {
          alertify.success("Login Successful!");
          sessionStorage.setItem("userId", response.data[0].id);
          sessionStorage.setItem("response", response.status);
          navigate("/home");
        } else {
          alertify.error("Login Failed!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("error >>>", error);
      });
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
