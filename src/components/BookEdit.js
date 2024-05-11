import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
    const { editBookById } = useContext(BooksContext);

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form className="book-edit" onSubmit={handleFormSubmit}>
            <label>Title:</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Save</button>
        </form>
    )
}

export default BookEdit;