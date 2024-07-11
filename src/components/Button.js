import className from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) => {
    const finalClassName = twMerge(className(rest.className, "flex items-center px-3 py-1.5 border", {
        "bg-blue-600 border-blue-500 text-white": primary,
        "bg-gray-900 border-gray-900 text-white": secondary,
        "bg-green-400 border-green-400 text-white": success,
        "bg-yellow-600 border-yellow-600 text-white": warning,
        "bg-red-500 border-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-400": outline && success,
        "text-yellow-600": outline && warning,
        "text-red-500": outline && danger,
    }));

    return (
        <button {...rest} className={finalClassName}>{children}</button>
    );
}

export default Button;