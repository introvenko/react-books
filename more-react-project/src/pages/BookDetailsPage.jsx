import React from "react";
import { useParams } from "react-router-dom";

import books from "../data/books.json";

import { BookDetails } from "../components/BookDetails";

export const BookDetailsPage = () => {
    const { id } = useParams();
    const book = books.find((book) => book.id === parseInt(id));

    return (
        <div>
            {book ? (
                <BookDetails book={book}/>
            ) : (
                <p>Sorry, the book you're looking for was not found.</p>
            )}
        </div>
    );
};