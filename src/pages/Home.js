import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ItemLibrary from "../components/ItemLibrary";
import Pagination from "../components/Pagination";
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
          {/* {books
            .filter((book) => {
              if (filteredData === "") {
                return book;
              } else if (
                book.name.toLowerCase().includes(filteredData.toLowerCase())
              ) {
                return book;
              }
            })} */}
          <Pagination
            data={books}
            RenderComponent={ItemLibrary}
            pageLimit={5}
            dataLimit={12}
          />
        </Row>
      </Container>
    </div>
  );
};
export default Home;
