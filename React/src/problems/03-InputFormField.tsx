/*
    Problem 3: Input Form Field
    Create an InputField component that accepts:
    1. value (string)
    2. onChange (React ChangeEvent handler)
    Type the props and event correctly, and render an input element that updates on change.
*/

interface InputFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`New Value: ${e.target.value}`);
        onChange(e);
    };

    return (
        <div className="bg-gray-100 w-40 h-6">
            <input type="text" onChange={handleChange}></input>
        </div>
    );
};

export default InputField;