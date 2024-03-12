import React, { useState } from "react";

export const StateTesting = () => {
  const [data, setData] = useState();

  const handleClick = () => {
    setData("Hello");
  };

  const handleOtherMethod = () => {
    return "This is other method"
  }

  return (
    <div>
      <h1>stateTesting.component</h1>
      <button data-testId='btn1' onClick={handleClick}>Update</button>
      <button onClick={handleOtherMethod}>Second Button</button>
      <p>{data}</p>
    </div>
  );
};
