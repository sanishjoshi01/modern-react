import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
    const dispatch = useDispatch();

    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addCar({ name, cost }));
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Cost</label>
                        <input
                            value={cost || ''}
                            onChange={handleCostChange}
                            className="input is-expanded"
                            required
                        />
                    </div>
                    <div className="field">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default CarForm;