import { useState, useContext, useInsertionEffect } from "react";
import BooksContext from "../context/books";

function BookCreate() {
    const { createBook } = useContext(BooksContext);

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        const input = event.target.value;
        setTitle(input);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleFormSubmit}>
                <label>Enter Title:</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;