import React, { useState } from "react";
import axios from "axios";
import alertify from "alertifyjs";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
} from "reactstrap";
import bookCover from "../assets/book.png";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";

const ItemLibrary = ({ book }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => setIsLiked(!isLiked);

  const addToFavorite = () => {
    let userId = sessionStorage.getItem("userId")
    axios.post("http://localhost:8080/api/users/favorite-books" , {
      userId: userId,
      bookId: book.id
    })
    .then(response => {
      alertify.success(response.data.message)
    })
    .catch(err => {
      alertify.error(err.response.data.message)
    })
    
  }

  const deleteFromFavorite = () => {
    let userId = sessionStorage.getItem("userId")

    let url = "http://localhost:8080/api/users/favorite-books/bookId="+book.bookId+"/userId="+userId;
    axios.delete(url)
    .then(response => {
      alertify.success(response.data.message)
    })
    .catch(err => console.log(err.response.data))
  }

  return (
    <React.Fragment>
      <Card
        key={book.id}
        className="m-3 p-3"
        style={{
          borderRadius: "15px",
          flex: "1 1 21rem",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignSelf: "normal",
          maxWidth: "250px",
        }}
      >
        {book.imageUrl === undefined ? (
          <CardImg
            alt="cover"
            src={bookCover}
            top
            width="100%"
            style={{ height: "250px" }}
          />
        ) : (
          <CardImg
            alt="cover"
            src={book.imageUrl}
            top
            width="100%"
            style={{ maxHeight: "250px" }}
          />
        )}
        <CardBody>
          <CardTitle tag="h5">{book.name.slice(0, 60)}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {book.author}
          </CardSubtitle>
          <CardSubtitle className="mt-3" style={{ color: "violet" }}>
            Current page: {book.currentPage}
          </CardSubtitle>
        </CardBody>
        <CardFooter>
          <a href={book.url}>
            <Button outline>Read</Button>
          </a>{" "}
          <div style={{ float: "right" }} onClick={toggle}>
            {isLiked === false ? (
              <img src={dislike} alt="" onClick={addToFavorite} style={{ width: "30px" }}></img>
            ) : (
              <img src={like} alt="" onClick={deleteFromFavorite} style={{ width: "30px" }}></img>
            )}
          </div>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};
export default ItemLibrary;
