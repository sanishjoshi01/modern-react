function App() {
    const handleClick = () => {
        console.log("BUTTON CLICKED");
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    );
}

export default App;