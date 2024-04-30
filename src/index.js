// 1) Import React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create component
function App() {
    const name = "Sandesh Joshi";
    const age = 22;

    return <h1>Hi my name is {name} and I am {age} years old.</h1>;
}

// 5) Show the component on the screen
root.render(<App />);