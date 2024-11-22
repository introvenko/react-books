import React from "react";
import '../App.css';

export const Filter = ({ genres, selectedGenre, onFilterChange }) => {
    return (
        <div className="filter-container">
            <label htmlFor="genre">Sort by Genre:</label>
            <select id="genre" value={selectedGenre} onChange={(e) => onFilterChange(e.target.value)}>
                <option value="">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
};