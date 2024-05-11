import { createContext, useState } from 'react';

const BookContext = createContext();

const Provider = ({ children }) => {
    const [count, setCount] = useState(5);

    const valueToShare = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        }
    }

    return (
        <BookContext.Provider value={valueToShare}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContext;
export { Provider };