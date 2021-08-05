import React, { Component } from "react";
import "./search.css";
import SuccessMessage from "./successMessage"
import ErrorMessage from "./errorMessage"
import config from "../config.json"

const axios = require("axios").default;
//const searchURL = "http://localhost:4040/search/fas";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleValue: "",
      isError: false,
      isSearched : false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleHandleChange = this.handleHandleChange.bind(this);
  }

  handleHandleChange(event) {
    this.setState({ handleValue: event.target.value });
  }
  handleSearch(event) {
    console.log("Handle Value ", this.state.handleValue);
    let searchBody = {"handle":this.state.handleValue};
    this.searchQuery(searchBody);
    event.preventDefault();
  }

  searchQuery = (searchBody) => {
    let options = {
      headers: { "Content-Type": "application/json" },
    };
    axios
      .post(config.FAS_SEARCH_URL, searchBody, options)
      .then((res) => {
        //console.log('comes here -- ',res.data.message);
        this.setState({ isSearched: true})
        if( res.status === 200)  {
          if( res.data.message.includes('Query result'))
            this.setState({isError: false})
          else 
            this.setState({isError: true})
        }
      })
      .catch(function (error) {
        console.log(error);        
      });
  }

  componentDidMount() {
  }

  render() {
    const { isSearched } = this.state;
    const { isError } = this.state;
    return (
      <div>
        <div id="myDIV" class="header">
          <h2>Twitter Enterprise Search</h2>
          <input
            type="text" 
            value={this.state.handleValue}
            onChange={this.handleHandleChange}
            placeholder="enter the Twitter handle here .."
          />
          <span onClick={this.handleSearch} class="addBtn">
            Search
          </span>
        </div>
        <div>
          {
            this.state.isSearched && !this.state.isError ? (<div>
              <SuccessMessage/>
            </div>) : (<div></div>)
          }
        </div>
        <div>
          {
            this.state.isError ? (<div>
              <ErrorMessage/>
            </div>) : (<div></div>)
          }
        </div>
      </div>
    );
  }
}

export default Search;
