import { useState } from "react";

const Checkbox = () => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    return (
        <label>
            <input type="checkbox" checked={checked} placeholder="Enter text..." onChange={handleChange}></input>
            {checked ? "/" : "X"}
        </label>
    );
};

export default Checkbox;