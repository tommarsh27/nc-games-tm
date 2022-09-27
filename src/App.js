import "./App.css";
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReviewList from "./pages/ReviewList";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reveiws" element={<ReviewList />} />
        <Route path="*" element={<p>404:not found</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
