import React from "react";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import { Container, Row } from "reactstrap";
import { Navigate } from "react-router-dom";

const Home = ({ books }) => {
  //If the user is not logged in, redirects to login page
  if (sessionStorage.getItem("response") != 200) {
    return <Navigate to="/" />;
  }

  //If the user is logged in, return the home page
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Pagination data={books} />
        </Row>
      </Container>
    </div>
  );
};
export default Home;