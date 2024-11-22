import React, { useState, useEffect } from "react";
import { BookList } from "../components/BookList";
import { Filter } from "../components/Filter";
import books from "../data/books.json";

export const BookListPage = () => {
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const uniqueGenres = Array.from(new Set(books.map((book) => book.genre)));
        setGenres(uniqueGenres);
        setFilteredBooks(books);
    }, []);

    const handleFilterChange = (genre) => {
        setSelectedGenre(genre);
        if (genre) {
            setFilteredBooks(books.filter((book) => book.genre === genre));
        } else {
            setFilteredBooks(books);
        }
    };

    return (
        <div className="book-list-container">
            <h1>Book List</h1>
            <Filter genres={genres} selectedGenre={selectedGenre} onFilterChange={handleFilterChange} />
            <BookList books={filteredBooks} />
        </div>
    );
};