import React, { useMemo, useState, useCallback } from "react";
import Child from "./Child";

function Example() {
  const [num, setNum] = useState(0);

  const handleUpdate = useCallback((num) => {
    return num * num;
  }, []);

  const getChildComp = useMemo(
    () => <Child handleUpdate={handleUpdate} />,
    [handleUpdate]
  );

  return (
    <div>
      <h1>{num}</h1>
      {getChildComp}
      <button onClick={() => setNum(num + 1)}> Addition </button>
    </div>
  );
}

export default Example;
