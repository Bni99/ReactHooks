import { useState } from "react";
import ComponentTwo from "./ComponentTwo";

const ComponentOne = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <ComponentTwo />
    </>
  );
};

export default ComponentOne;
