import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        console.log(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}

export default App;