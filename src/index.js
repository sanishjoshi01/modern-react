import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import BookContext from "./context/BookContext";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <BookContext.Provider value={5}>
        <App />
    </BookContext.Provider>
);