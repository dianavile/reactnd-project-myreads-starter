import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookItems from "./BookItems";

export default class SearchBooks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ''
		};
	}

	updateQuery = (query) => {
		this.setState({ searchQuery: query });
		this.props.updateSearchedBooks(query)
	}
  render() {
    const { searchQuery } = this.state;

    const { books, updateSearchedBooks, handleChange } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link
									to="/"
									className="close-search"
							/>
          <div className="search-books-input-wrapper">
					<input
						className="search-input"
						type="text"
						placeholder="Search Books..."
						value={searchQuery}
						onChange={(event) => 
							this.updateQuery(event.target.value)
						}
					/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <BookItems book={book} handleChange={handleChange} updateSearchedBooks={updateSearchedBooks} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
