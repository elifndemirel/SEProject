import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ItemLibrary from "../components/ItemLibrary";
import { Container, Row } from "reactstrap";

const Home = ({ books }) => {
  const [filteredData, setFilteredData] = useState("");

  return (
    <div>
      <NavBar />
      <div
        className="pt-2"
        style={{ display: "table", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => setFilteredData(event.target.value)}
        />
      </div>
      <Container>
        <Row className="d-flex justify-content-center">
          {books
            .filter((book) => {
              if (filteredData === "") {
                return book;
              } else if (
                book.title.toLowerCase().includes(filteredData.toLowerCase())
              ) {
                return book;
              }
            })
            .map((book, index) => (
              <ItemLibrary key={index} book={book} />
            ))}
        </Row>
      </Container>
    </div>
  );
};
export default Home;
