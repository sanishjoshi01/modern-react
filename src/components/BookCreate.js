import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        const input = event.target.value;
        setTitle(input);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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