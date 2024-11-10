import React, { useState } from "react";
import { Button } from "@/components";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hello World!</h1>
      <p className="mb-4">You have clicked the button {count} times.</p>
      <Button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me!
      </Button>
    </div>
  );
};

export default App;
