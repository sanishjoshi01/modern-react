import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/carsSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer,
    }
});

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };