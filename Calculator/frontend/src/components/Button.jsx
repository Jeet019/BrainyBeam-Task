

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick, type = "default" }) => {
    const baseClasses =
    "py-3 px-4 rounded-lg text-lg font-semibold transition focus:outline-none";
    const typeClasses = {
    default: "bg-gray-200 text-black hover:bg-gray-300",
    operator: "bg-blue-500 text-white hover:bg-blue-600",
    functional: "bg-red-500 text-white hover:bg-red-600",
    };

    return (
    <button
        onClick={onClick}
        className={`${baseClasses} ${typeClasses[type]}`}
    >
    {label}
    </button>
);
};

export default Button;
