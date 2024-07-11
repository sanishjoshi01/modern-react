//This CounterPage contains different State Management Processes like: 
// 1) useState
// 2) useReducer
// 3) useReducer with immer library

import Button from '../components/Button';
// import useCounter from '../hooks/use-counter';

//useState
// import { useState } from 'react';

//useReducer
import { useReducer } from 'react';

//useReducer + immer
import { produce } from 'immer';


const INCREMENT_COUNT = 'Increment-Count';
const DECREMENT_COUNT = 'Decrement-Count';
const VALUE_TO_ADD = 'Value-To-Add';
const ADD_VALUE_TO_COUNT = 'Add-Value-To-Count';

//useReducer + immer
const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count + 1,
            // }

            // useReducer + immer
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count - 1,
            // }

            // useReducer + immer
            state.count = state.count - 1;
            return;
        case VALUE_TO_ADD:
            // return {
            //     ...state,
            //     addToValue: action.payload,
            // }

            // useReducer + immer
            state.addToValue = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            // return {
            //     ...state,
            //     count: state.count + state.addToValue,
            //     addToValue: 0,
            // }

            // useReducer + immer
            state.count = state.count + state.addToValue;
            state.addToValue = 0;
            return;
        default:
            // return state;

            // useReducer + immer
            return;
    };
};

// useState
// function CounterPage({ initialCount }) {
//     const [count, setCount] = useState(initialCount);
//     const [addToValue, setAddToValue] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };
//     const decrement = () => {
//         setCount(count - 1);
//     };
//     const handleChange = (event) => {
//         const value = parseInt(event.target.value || 0);
//         setAddToValue(value);
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setCount(count + addToValue);
//         setAddToValue(0);
//     }

//     return (
//         <div><h1>Count is {count}</h1>
//             <div>
//                 <Button onClick={increment}>Increment</Button>
//                 <Button onClick={decrement}>Decrement</Button>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div className='flex '>
//                     <label>Add a lot!</label>
//                     <input
//                         value={addToValue || ""}
//                         onChange={handleChange}
//                         type="number"
//                         className='border border-gray-500 p-2 m-3'
//                     />
//                 </div>
//                 <Button>Add</Button>
//             </form>
//         </div>
//     );
// }

//useReducer + immer
function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [addToValue, setAddToValue] = useState(0);

    const [state, dispatch] = useReducer(produce(reducer), { count: initialCount, addToValue: 0 });

    const increment = () => {
        // setCount(count + 1);
        dispatch({ type: INCREMENT_COUNT });
    };
    const decrement = () => {
        // setCount(count - 1);
        dispatch({ type: DECREMENT_COUNT });
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value || 0);
        // setAddToValue(value);

        dispatch({
            type: VALUE_TO_ADD,
            payload: value
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + addToValue);
        // setAddToValue(0);

        dispatch({ type: ADD_VALUE_TO_COUNT });
    }

    return (
        <div><h1>Count is {state.count}</h1>
            <div>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex '>
                    <label>Add a lot!</label>
                    <input
                        value={state.addToValue || ""}
                        onChange={handleChange}
                        type="number"
                        className='border border-gray-500 p-2 m-3'
                    />
                </div>
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default CounterPage;