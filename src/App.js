import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animalsArr = ['bird', 'horse', 'cow', 'cat', 'dog', 'gator'];

    return animalsArr[Math.round(Math.random() * animalsArr.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <p>{renderedAnimals}</p>
        </div >
    );
}

export default App;