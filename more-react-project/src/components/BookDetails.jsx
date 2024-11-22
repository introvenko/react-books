import React from "react";
import StarRatingComponent from "react-star-rating-component";

export const BookDetails = ({ book }) => {
    return (
        <div className="book-details">
            <img src={book.image} alt={book.title} className="book-details-image" />
            <div className="book-details-info">
                <h1 className="book-details-title">{book.title}</h1>
                <p><strong>Author:</strong> {book.author || "Unknown"}</p>
                <p><strong>Pubished:</strong> {book.releaseYear || "N/A"}</p>
                <p><strong>Pages:</strong> {book.pages || "N/A"}</p>
                <p><strong>Genre:</strong> {book.genre || "N/A"}</p>
                <div className="book-description">
                    <p>{book.description || "No description available for this book."}</p>
                </div>
                <div className="book-rating">
                    <h2>Goodreads Rating</h2>
                    <div className="book-rating-container">
                        <StarRatingComponent 
                            name="bookRating" 
                            starCount={5} 
                            value={book.rating || 0} 
                            starColor="#058053"
                            emptyStarColor="#d3d3d3"
                            starStyle={{ fontSize: "60px", margin: "5px" }}
                            editing={false} 
                        />
                        <p className="rating-text">{book.rating ? `${book.rating}/5` : "No rating available"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};