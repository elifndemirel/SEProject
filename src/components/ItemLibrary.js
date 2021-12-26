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

const ItemLibrary = ({ book }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => setIsLiked(!isLiked);
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
        </CardBody>
        <CardFooter>
          <a href={book.url}>
            <Button outline>Read</Button>
          </a>{" "}
          <div style={{ float: "right" }} onClick={toggle}>
            {isLiked === false ? (
              <img src={dislike} alt="" style={{ width: "30px" }}></img>
            ) : (
              <img src={like} alt="" style={{ width: "30px" }}></img>
            )}
          </div>
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};
export default ItemLibrary;
