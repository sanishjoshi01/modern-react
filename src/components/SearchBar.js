import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form className="form" onSubmit={handleFormSubmit}>
                Enter search term:
                <input onChange={handleChange} />
            </form>
        </div >
    );
}

export default SearchBar;