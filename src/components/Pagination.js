import { Container, Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import ItemLibrary from "./ItemLibrary";

const Pagination = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const cardPerPage = 60;
  const pagesVisited = pageNumber * cardPerPage;

  const displayCard = data
    .filter((book) => {
      if (searchTerm === "") {
        return book;
      } else if (book.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return book;
      }
      return false;
    })
    .slice(pagesVisited, pagesVisited + cardPerPage)
    .map((book) => {
      return (
        <>
          <ItemLibrary book={book} />
        </>
      );
    });

  const pageCount = Math.ceil(
    data.filter((book) => {
      if (searchTerm === "") {
        return book;
      } else if (book.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return book;
      }
      return false;
    }).length / cardPerPage
  );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center mt-2 mb-2">
          <Col md={4}>
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handlePageChange({ selected: 0 });
              }}
            />
          </Col>
        </Row>
        <Row xs={1} md={4} className="d-flex justify-content-center align-items-center">
          {displayCard}
        </Row>{" "}
        <Row>
          <Col
            md={12}
            className="d-flex justify-content-center align-items-center mt-2"
          >
            <ReactPaginate
              previousLabel={"❮"}
              nextLabel={"❯"}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pagination;