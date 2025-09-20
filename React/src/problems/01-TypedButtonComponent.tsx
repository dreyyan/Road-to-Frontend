/*
    Problem 1: Typed Button Component
    Create a Button component with a ButtonProps interface that includes:
    1. label (string)
    2. onClick (function)
    Ensure the component renders a button with the label and calls the function on click.
*/

interface ButtonProps {
    label: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="flex justify-center items-center w-8 h-8 bg-blue-500 text-white font-bold rounded-full cursor-pointer">{label}</button>
    );
};

export default Button;