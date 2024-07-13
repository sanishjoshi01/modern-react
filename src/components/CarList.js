import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();

    const { cars, name } = useSelector(({ form, cars: { searchTerm, data } }) => {
        const filteredCars = data.filter(car =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            cars: filteredCars,
            name: form.name
        }
    })

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return <div
            className={`panel ${bold && 'bold'}`}
            key={car.id}
        >
            <p>{car.name} - ${car.cost}</p>
            <button
                onClick={() => handleCarDelete(car)}
                className="button is-danger"
            >
                Delete
            </button>
        </div>
    })

    return (
        <div className="car-list">
            {renderedCars}
        </div>
    )
}

export default CarList;