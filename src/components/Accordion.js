import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (newIndex) => {
        if (expandedIndex === newIndex) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(newIndex)
        }
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-xl'>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={item.id}>
                <div
                    className='flex items-center p-3 border-b bg-gray-50 justify-between'
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='p-5 border-b'>{item.content}</div>}
            </div >
        );
    });

    return (
        <div className='border-b border-t rounded'>{renderedItems}</div>
    );
}

export default Accordion;