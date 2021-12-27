import React, { Component, useState } from "react";
import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";
import ItemLibrary from "../components/ItemLibrary";
import Pagination from "../components/Pagination";
import { Container, Row } from "reactstrap";
import axios from 'axios';

const liked = () => {
  const books = document.querySelectorAll(".disliked");
  console.log(books)
  
  books.forEach(b => {
    b.setAttribute("src", "/static/media/like.59848f48.png");
    b.setAttribute("id", "liked")
  })

}

export default class Favorites extends Component {

  state = {favoriteBooks: []}

  getFavoriteBooks = () => {
    
    let userId = sessionStorage.getItem("userId");
    let url = "http://localhost:3000/favorites?userId=" + 1;

    axios.get(url)
    .then(response => {
      //this.setState({favoriteBooks: response.data[0]})
      console.log(response.data[0])
    }).catch((error) => {
      console.error("error >>>", error);
    })
  }

  componentDidMount(){
    this.getFavoriteBooks();
    
    setTimeout(() => {
      liked();
    }, 250);

  }


  render() {

    if (sessionStorage.getItem("response") != 200) {
      return <Navigate to="/" />;
    }
  

    return (
      <div>
      <NavBar />

      <Container>
        <Row>
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
            data={this.state.favoriteBooks}
            RenderComponent={ItemLibrary}
            pageLimit={5}
            dataLimit={12}
          />
        </Row>
      </Container>
   
    </div>
    )
  }
}
