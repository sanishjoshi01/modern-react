import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownElement = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!dropdownElement.current) {
                return;
            }

            if (!dropdownElement.current.contains(event.target)) {
                setIsOpen(false);
            };
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionsSelect = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map((option) => (
        <div
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            key={option.value}
            onClick={() => handleOptionsSelect(option)}
        >
            {option.label}
        </div>
    ));

    return (
        <div ref={dropdownElement} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || 'Select...'}
                <FaChevronDown />
            </Panel>
            {isOpen &&
                (<Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
                )}
        </div>
    );
}

export default Dropdown;