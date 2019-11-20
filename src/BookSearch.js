import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookGrid from "./BookGrid";
import PropTypes from "prop-types";

/**
 * BookSearch Component displays the search results for queries when Searching for Books.
 */
class BookSearch extends Component {
  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    handleSearch: PropTypes.func.isRequired,
    changeShelf: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
  };
  /**
   * @description Renders search query input text and result div.
   */
  render() {
    const {
      searchResults,
      handleSearch,
      changeShelf,
      resetSearch
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" onClick={resetSearch}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => handleSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid books={searchResults} changeShelf={changeShelf} />
        </div>
      </div>
    );
  }
}
export default BookSearch;
