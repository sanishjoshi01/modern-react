// 1) Import React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create component
function App() {
    const message = "Age";

    return (
        <input
            type="number"
            min={3}
            max={10}
            list={[1, 2, 3]}
            style={{ color: 'red' }}
            placeholder={message}
        />
    );
}

// 5) Show the component on the screen
root.render(<App />);