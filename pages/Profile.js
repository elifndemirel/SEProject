import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import { Form, Input, Button } from "reactstrap";
import {useEffect} from "react";


const Profile = () => {

  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [city, setCity] = useState("");

  const [formErrors, setformErrors]=useState({});
  const [isSubmit, setIsSubmit]=useState(false);
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    setformErrors(validate(firstName));
    setformErrors(validate(lastName));
    setformErrors(validate(username));
    setformErrors(validate(password));
    setformErrors(validate(newPassword));
    setformErrors(validate(oldPassword));
    setformErrors(validate(city));

    setIsSubmit(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.firstname.value);
    console.log(e.target.lastname.value);
    console.log(e.target.username.value);
    console.log(e.target.oldPassword.value);
    console.log(e.target.newPassword.value);
    console.log(e.target.confirmPassword.value);
  };


  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(username);
    }
  },[formErrors])
  if(sessionStorage.getItem("response")!=200){
    return <Navigate to="/"/>
  }

  const validate=(values)=>{
    const errors={}
    
  
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
      errors.username= "Username must be more than 2 characters!";
    } else if (username.length > 20) {
      errors.username = "Username cannot exceed more than 20 characters!";
    }
    if (!oldPassword) {
      errors.oldPassword = "Old password is required!";
    } else if (oldPassword.length < 6) {
      errors.oldPassword = "Old password must be more than 5 characters!";
    } else if (oldPassword.length > 30) {
      errors.oldPassword = "Old password cannot exceed more than 30 characters!";
    }
    if (!newPassword) {
      errors.newPassword = "New password is required!";
    } else if (newPassword.length < 6) {
      errors.newPassword = "New password must be more than 5 characters!";
    } else if (newPassword.length > 30) {
      errors.newPassword = "New password cannot exceed more than 30 characters!";
    }
    if (!password) {
      errors.password = "Confirmed password is required!";
    } else if (password.length < 6) {
      errors.password = "Confirmed password must be more than 5 characters!";
    } else if (password.length > 30) {
      errors.password = "Confirmed password cannot exceed more than 30 characters!";
    }else if(newPassword != password){
      errors.password="This does not match with your new password!"
    }
    
    if (!city) {
      errors.city = "City is required!";
    } else if (city.length < 2) {
      errors.city = "City must be more than 1 character!";
    } else if (city.length > 40) {
      errors.city = "City cannot exceed more than 40 characters!";
    }
    return errors;
  }

if(sessionStorage.getItem("response")!=200){
    return <Navigate to="/"/>
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <div className="my-4">
            
              
              <form onSubmit={onSubmit}>
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
                  <p style={{ color: '#B63B20' }}><b>{formErrors.firstName}</b></p>
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
                  <p style={{ color: '#B63B20' }}><b>{formErrors.lastName}</b></p>
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
                  <p style={{ color: '#B63B20' }}><b>{formErrors.username}</b></p> 
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
                  <p style={{ color: '#B63B20' }}><b>{formErrors.city}</b></p>
                  
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
                    <p style={{ color: '#B63B20' }}><b>{formErrors.oldPassword}</b></p>
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
                    <p style={{ color: '#B63B20' }}><b>{formErrors.newPassword}</b></p>
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
                    <p style={{ color: '#B63B20' }}><b>{formErrors.password}</b></p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary mt-2 mb-5" onClick={handleSubmit} onSubmit={onSubmit}>
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