import { useEffect, useState } from "react";
import "./App.css";
import useInterval from "./hooks/useInterval";
import useWindowSize from "./hooks/useWindowSize";
import Example from "./memo/Example";

function App() {
  const [delay, setdelay] = useState(1000);
  const [func, setfunc] = useState(() => {
    return () => console.log("hi");
  });
  const [width, height] = useWindowSize();
  // useInterval(func, delay);

  return (
    <>
      <h1>
        {" "}
        width is {width}. height is {height}
      </h1>
      <h1>hi</h1>
      <Example />
    </>
  );
}

export default App;
