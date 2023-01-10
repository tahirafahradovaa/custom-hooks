import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  window.addEventListener("resize", () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  });

  return [width, height];
}

export default useWindowSize;
