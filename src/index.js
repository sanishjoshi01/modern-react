// 1) Import React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create component
function App() {
    const message = "red";

    return <h1>{message}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);