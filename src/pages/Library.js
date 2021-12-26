import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";

export default function Library() {
  if (sessionStorage.getItem("response") != 200) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <NavBar />
    </div>
  );
}
