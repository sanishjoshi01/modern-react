import { useState } from "react";

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(book.id, title);
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