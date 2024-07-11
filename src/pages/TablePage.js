// import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5 },
        { name: "Apple", color: "bg-red-300", score: 3 },
        { name: "Banana", color: "bg-yellow-300", score: 4 },
        { name: "Lime", color: "bg-green-500", score: 6 },
        { name: "Cherry", color: "bg-red-700", score: 9 },
    ];

    const config = [
        {
            label: "Name",
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: "Score",
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
        {
            label: "Score Squared",
            render: (fruit) => fruit.score ** 2,
            sortValue: (fruit) => fruit.score ** 2,
        },
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage;