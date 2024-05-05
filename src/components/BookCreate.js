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
        <div>
            <form onSubmit={handleFormSubmit}>
                Enter Title:
                <input type="title" onChange={handleChange} />
                {title}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;