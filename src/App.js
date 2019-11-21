import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookSearch from "./BookSearch";
import BookList from "./BookList";

/**
 * BooksApp has UI to search for books and add them to various shelves
 * based on the Search User's preference.
 */
class BooksApp extends Component {
  /* State holds list of books and search result */
  state = {
    books: [],
    searchResults: []
  };

  /**
   * @description Initialises the bookList when the Component is Loaded.
   */
  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data.map(row => {
          return {
            id: row.id,
            data: row,
            title: row.title,
            authors: row.authors,
            shelf: row.shelf,
            img: row.imageLinks ? row.imageLinks.thumbnail : ""
          };
        }),
        searchResults: []
      });
    });
  }

  /**
   * @description Calls BooksAPI to search books based on the query on BookSearch compoment.
   * @param {string} query The Search Term for lookup by BooksAPI
   */
  handleSearch = query => {
    //If query is blank then reset search result to empty else search.
    query === ""
      ? this.setState({ searchResults: [] })
      : BooksAPI.search(query).then(data => {
          console.log(data);
          this.setState(currentState => {
            //If search has no match then API call shows data.error
            if (data.error || data === "") {
              return { searchResults: [] };
            }
            //Creates search result from data- if there is already a book
            //which matches with result then updates the shelf on result.
            const results = data.map(row => {
              let bookShelf = "none";
              for (const book of currentState.books) {
                if (book.id === row.id) {
                  bookShelf = book.shelf;
                  break;
                }
              }
              //Book Construction from Result
              return {
                id: row.id,
                data: row,
                title: row.title,
                authors: row.authors,
                shelf: bookShelf,
                img: row.imageLinks ? row.imageLinks.thumbnail : ""
              };
            });
            return { searchResults: results };
          });
        });
  };

  /**
   * @description Resets the searchResult to blank when user
   * navigates away from search page.
   */
  resetSearch = () => {
    this.setState({ searchResults: [] });
  };

  /**
   * @description Shuffles shelf to new value selected from shelf dropdown.
   * @param {Book} currentBook for which the shelf has to be changed
   * @param {string} value  new shelf after change
   */
  changeShelf = (currentBook, value) => {
    //If the item is already in Book List then just updates the Shelf,
    //otherwise inserts the item to book list
    let isItemInBookList = false;
    this.setState(currentState => {
      for (const book of currentState.books) {
        if (book.title === currentBook.title) {
          book.shelf = value;
          isItemInBookList = true;
          break;
        }
      }
      for (const result of currentState.searchResults) {
        if (result.title === currentBook.title) {
          result.shelf = value;
        }
      }
      return {
        books: isItemInBookList
          ? currentState.books
          : currentState.books.concat(currentBook),
        searchResult: currentState.searchResults
      };
    });
    console.log("set set");
    BooksAPI.update(currentBook.data, value);
  };

  /**
   * @description Routes to list page or search page based on the URL */
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={this.state.books}
              changeShelf={this.changeShelf}
              resetSearch={this.resetSearch}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <BookSearch
              searchResults={this.state.searchResults}
              handleSearch={this.handleSearch}
              changeShelf={this.changeShelf}
              resetSearch={this.resetSearch}
            />
          )}
        />
      </div>
    );
  }
}
export default BooksApp;
