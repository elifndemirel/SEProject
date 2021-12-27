import React, { useState } from "react";
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
import axios from "axios";
import alertify from "alertifyjs";



const ItemLibrary = ({ book }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => setIsLiked(!isLiked);

  
  const addToFavorite = () => {
    let userId = sessionStorage.getItem("userId")
    axios.post("http://localhost:3000/favorites" , {
      userId: userId,
      bookId: book.id
    })
    .then(response => {
      alertify.success(response.data.message)
    });
  }

  const deleteFromFavorite = () => {
    let userId = sessionStorage.getItem("userId")
    axios.delete("http://localhost:3000/favorites", {
      userId: userId,
      bookId: book.id
    })
    .then(response => {
      alertify.success(response.data.message)
    })
  }


  return (
    <React.Fragment>
      <Card
        key={book.id}
        className="m-3 p-3"
        style={{
          borderRadius: "15px",
          flex: "1 1 21rem",
        }}
      >
        {book.imageUrl === undefined ? (
          <CardImg
            alt="cover"
            src={bookCover}
            top
            width="100%"
            style={{ height: "220px" }}
          />
        ) : (
          <CardImg
            alt="cover"
            src={book.imageUrl}
            top
            width="100%"
            style={{ maxHeight: "220px" }}
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
              <img src={dislike} alt="" onClick={addToFavorite} className="disliked" id={book.id} style={{ width: "30px" }}></img>
            ) : (
              <img src={like} alt="" onClick={deleteFromFavorite} className="liked" id={book.id} style={{ width: "30px" }}></img>
            )}
          </div>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};
export default ItemLibrary;