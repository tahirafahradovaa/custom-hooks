import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useRef } from "react";

function useInterval(func, delay) {
  const prevDelay = useRef(null);
  const prevFunc = useRef(null);
  useEffect(() => {
    prevFunc.current = func;
  }, [delay]);
  useEffect(() => {
    const time = () => prevFunc.current();
    if (typeof delay === "number") {
      prevDelay.current = window.setInterval(time, delay);
      return () => window.clearInterval(prevDelay.current);
    }
  }, [delay]);
  return prevDelay;
}

export default useInterval;
