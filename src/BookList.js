import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookGrid from "./BookGrid";

/**
 * BookList Component Displays the List of Books kept on various Shelves.
 */
class BookList extends Component {
  /**
   * @description Renders the BookList, iterating over shelves.
   */
  render() {
    const { books, changeShelf } = this.props;
    //The Shelves to iterate over to create BookList
    const shelfs = [
      { id: "currentlyReading", title: "Currently Reading" },
      { id: "wantToRead", title: "Want To Read" },
      { id: "read", title: "Read" }
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map(currShelf => {
              return (
                <div className="bookshelf" key={currShelf.id}>
                  <h2 className="bookshelf-title">{currShelf.title}</h2>
                  <div className="bookshelf-books">
                    <BookGrid
                      books={books}
                      changeShelf={changeShelf}
                      currShelf={currShelf}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/search">
            <div className="open-search">
              <button>Add a book</button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default BookList;
