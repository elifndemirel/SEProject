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
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignSelf: "normal",
          maxWidth: "250px",
        }}
      >
        {book.formats["image/jpeg"] === undefined ? (
          <CardImg
            alt="cover"
            src={bookCover}
            top
            width="100%"
            style={{ height: "300px" }}
          />
        ) : (
          <CardImg
            alt="cover"
            src={book.formats["image/jpeg"]}
            top
            width="100%"
            style={{ maxHeight: "300px" }}
          />
        )}
        <CardBody>
          <CardTitle tag="h5">{book.title.slice(0, 60)}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {/* {book.authors[0].name} */}
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
