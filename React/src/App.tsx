import React, { useState } from "react";
import Button from "./problems/01-TypedButtonComponent";
import Counter from "./problems/02-CounterComponent";
import InputField from "./problems/03-InputFormField";
import TodoItem from "./problems/04-ToDoItemComponent";

import type { TodoProps } from "./problems/04-ToDoItemComponent";
import List from "./problems/05-ListRenderer";
import StatusMessage from "./problems/06-ConditionalRendering";
import ProfileCard from "./problems/07-OptionalProps";
import Checkbox from "./problems/08-EventHandlerTyping";
import Card from "./problems/09-ChildrenProp";
import Form from "./problems/10-SimpleForm";

const App = () => {
  const [todo, setTodo] = useState<TodoProps>({
    id: 100,
    text: "Wash the dishes",
    completed: false,
  });

  const toggleCheck = (id: number) => {
    setTodo((prev: TodoProps) => ({ ...prev, completed: !prev.completed }));
  };

  return (
    <div className="flex justify-center items-center">
      {/* Problem #1: Typed Button Component */}
      {/* <Button onClick={() => console.log("Button clicked!")} label={"Click Me"}/> */}

      {/* Problem #2: Counter Component */}
      {/* <Counter/> */}

      {/* Problem #3: Input Form Field */}
      {/* <InputField value="" onChange={(event) => console.log(event)}/> */}

      {/* Problem #4: Todo Item Component */}
      {/* <TodoItem todo={todo} onToggle={toggleCheck}/> */}

      {/* Problem #5: List Renderer */}
      {/* <List items={["A", "B", "C"]}/> */}

      {/* Problem #6: Conditional Rendering */}
      {/* <StatusMessage status="loading"/>
      <StatusMessage status="error"/>
      <StatusMessage status="success"/> */}

      {/* Problem #7: Optional Props */}
      {/* <ProfileCard name="Juan" avatarUrl="juan-avatar.png"/>
      <ProfileCard name="Chris"/> */}

      {/* Problem #8: Event Handler Typing */}
      {/* <Checkbox/> */}

      {/* Problem #9: Children Prop */}
      {/* <Card node="e"/> */}

      {/* Problem #10: Simple Form */}
      <Form/>

    </div>
  );
};

export default App;