import React from "react";
import Button from "./problems/01-TypedButtonComponent";
import Counter from "./problems/02-CounterComponent";
import InputField from "./problems/03-InputFormField";

const App = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Problem #1: Typed Button Component */}
      {/* <Button onClick={() => console.log("Button clicked!")} label={"Click Me"}/> */}

      {/* Problem #2: Counter Component */}
      {/* <Counter/> */}

      {/* Problem #3: Input  Form Field */}
      {/* <InputField value="" onChange={(event) => console.log(event)}/> */}
    </div>
  );
};

export default App;