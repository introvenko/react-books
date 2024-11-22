import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>2Read App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
            </nav>
        </header>
    );
};