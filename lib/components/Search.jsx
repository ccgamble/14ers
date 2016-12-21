import React, { Component } from 'react';

export default class Search extends Component {

  render(){
    const {onSearch} = this.props;

    return (
      <div className = "search-bar">
        <input id = "search-input"
          placeholder="Search"
          onChange={(e) =>{onSearch(e.target.value)}}
        />
      </div>
    );
  }
}
