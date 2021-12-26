import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import ItemLibrary from "../components/ItemLibrary";

function Favorites() {
  if (sessionStorage.getItem("response") != 200) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <NavBar />
    </div>
  );
}
export default Favorites;
