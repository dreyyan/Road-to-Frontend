/*
    Problem 2: Counter Component
    Build a Counter component that uses useState to track a number. Include:
    1. A typed state for the count (number)
    2. Buttons to increment and decrement the count
    Ensure the component renders the current count and updates it on button clicks.
*/

import { useState } from "react";
import Button from "./01-TypedButtonComponent";

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    
    const incrementCount = () => {
        setCount(prev => prev + 1);
    };

    const decrementCount = () => {
        setCount(prev => prev - 1);
    };

    return (
        <div className="flex">
            <Button onClick={decrementCount} label="-"/>
            <div className="w-10 text-center">
                <h1>{count}</h1>
            </div>
            <Button onClick={incrementCount} label="+"/>
        </div>
    );
};

export default Counter;