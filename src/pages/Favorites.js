import React, { Component } from 'react'
import NavBar from "../components/NavBar";

export default class Favorites extends Component {
            render() {
        return (
            <div>
                <NavBar/>
      <div
        className="pt-2"
        style={{ display: "table", marginLeft: "auto", marginRight: "auto" }}
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          //onChange={(event) => setFilteredData(event.target.value)}
        />
      </div>
            </div>
        )
       }
}

