import Table from './Table';
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import useSort from '../hooks/use-sort';

function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer" onClick={() => setSortColumn(column.label)}>
                <div className='flex items-center'>
                    {getIcons(column.label, sortOrder, sortBy)}
                    {column.label}
                </div>
            </th>
        }
    });

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    );
}

const getIcons = (label, sortOrder, sortBy) => {
    if (label !== sortBy) {
        return (
            <div>
                <IoMdArrowDropup />
                <IoMdArrowDropdown />
            </div>
        )
    }

    if (sortOrder === null) {
        return (
            <div>
                <IoMdArrowDropup />
                <IoMdArrowDropdown />
            </div>
        );
    }
    else if (sortOrder === 'asc') {
        return (
            <div>
                <IoMdArrowDropup />
            </div>
        );
    }
    else if (sortOrder === 'desc') {
        return (
            <div>
                <IoMdArrowDropdown />
            </div>
        );
    }
}

export default SortableTable;