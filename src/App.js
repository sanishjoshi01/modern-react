import { useState } from "react";

function getRandomAnimal() {
    const animalsArr = ['bird', 'horse', 'cow', 'cat', 'dog', 'gator'];

    return animalsArr[Math.round(Math.random() * animalsArr.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <p>{animals}</p>
        </div >
    );
}

export default App;