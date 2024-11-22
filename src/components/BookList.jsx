import React from "react";
import { Link } from "react-router-dom";

export const BookList = ({books}) => {
    return (
        <ul className="book-list">
            {books.map((book) => (
                <li key={book.id} className="book-item">
                    <Link to={`/books/${book.id}`} className="book-card">
                        <img src={book.image} alt={book.title} className="book-image" />
                        <h3 className="book-title">{book.title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
};