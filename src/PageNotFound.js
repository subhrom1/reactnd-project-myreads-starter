import React, { Component } from "react";

/**
 * This is the Default 'Page Not Found Component' which is Rendered when User enters a Wrong URL
 */
class PageNotFound extends Component {
  /**
   * Renders the Page Not Found Text as a Banner at the Middle of the Page.
   */
  render() {
    return (
      <div
        class="search-books-bar"
        style={{
          height: 193,
          fontSize: 50,
          marginTop: 300
        }}
      >
        The Page You are Looking For Cannot be Found on this Server. Please
        Check the URL and Try Again.
      </div>
    );
  }
}
export default PageNotFound;
