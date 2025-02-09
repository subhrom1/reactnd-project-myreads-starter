import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

/**
 * BookGrid Component renders information about each book (as a box showing
 * the book's image, title and author).
 */
class BookGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    currShelf: PropTypes.object
  };

  /**
   * @description Renders the grid showing info about a single book.
   */
  render() {
    const { books, changeShelf, currShelf = "" } = this.props;
    return (
      <ol className="books-grid">
        {books
          .filter(book => currShelf === "" || book.shelf === currShelf.id)
          .map(currBook => (
            <li key={currBook.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${currBook.img})`
                    }}
                  ></div>
                  <BookShelfChanger book={currBook} changeShelf={changeShelf} />
                </div>
                <div className="book-title">{currBook.title}</div>
                <div className="book-authors">{currBook.authors}</div>
              </div>
            </li>
          ))}
      </ol>
    );
  }
}
export default BookGrid;
