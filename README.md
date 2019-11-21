# MyReads Project

This project develops a BookShelf Application:

BookShelf Application allows Users to Select and Categorize books they Have Read, Are Currently Reading, or Want to Read.
Users can also Search for New Books and add them to a BookShelf.

# Functionality
A Typical User first searches for Books on the Search Screen, then preferentially adds few Books from Search Result to a
Shelf (say: Currenly Reading). The User can then Shuffle the Books across the three Shelves (Currently Reading, Want to Read and Read)
to keep track of his/her Books.

# Installation Instructions
To install and run this application:

-Get to the root directory of the project: reactnd-project-myreads-starter
-Install all project dependencies with `npm install`
-Start the development server with `npm start`

## What's In the Package
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # Index html File
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of  this app. Contains State and Functions for BookShelf Navigation.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for accessing the methods are provided below.
    ├── BookList.js # The BookList JavaScript Component: Generates 3 Shelves (Currently Reading, Want to Read and Read) and Places Books in them.
    ├── BookSearch.js # The BookSearch JavaScript Component: Contains Logic for Searching Books from BooksAPI.
    ├── BookGrid.js # This Component Controls the Look and Feel of individual Books rendered with Cover Image, Authors and Title values.
    ├── BookShelfChanger.js # This is the Dropdown Component which is accessible from Books Grid and is used to shuffle Books across Shelves.
    ├── PageNotFound.js # This is the Default 404 Component which is displayed if user enters a wrong URL for this Application.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. The app makes sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository contains  work done an assignment. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
