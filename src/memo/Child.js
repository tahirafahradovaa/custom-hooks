import { React } from "react";

function Child({}) {
  console.log("child component rendered");

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default Child;
