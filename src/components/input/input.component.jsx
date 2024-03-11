import React, { useState } from "react";

export const Input = () => {
  const [data, setData] = useState('')

  return <div>
    <label htmlFor="onchange">Input Box for testing on change</label>
    <input id="onchange" type="text" onChange={(e) => setData(e.target.value)} value={data} />
  </div>;
};
