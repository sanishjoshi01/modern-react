import { useState } from "react";

function App() {

    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <p>Animal to show {count}</p>
        </div >
    );
}

export default App;