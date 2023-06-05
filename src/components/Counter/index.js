import React from "react";

export default function Counter({ startValue = 0, step = 1 }) {
  const [currentValue, setNextValue] = React.useState(startValue);

  return (
    <>
      <p>{currentValue}</p>
      <button
        onClick={() => {
          setNextValue(currentValue + step);
        }}
      >
        Click Me
      </button>
    </>
  );
}
