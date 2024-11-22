import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { BookListPage } from "./pages/BookListPage";
import { BookDetailsPage } from "./pages/BookDetailsPage";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import './App.css';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/books/:id" element={<BookDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};