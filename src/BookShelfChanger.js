import React, { Component } from "react";

/**
 * BookShelfChange Component is the Dropdown from which books can be put on
 * different shelves (Currently Reading, Want to Read, Read, None).
 */
class BookShelfChanger extends Component {
  /**
   * @description Renders the Shelf Changer Dropdown for Each Book.
   */
  render() {
    const { book, changeShelf } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={event => changeShelf(book, event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default BookShelfChanger;
