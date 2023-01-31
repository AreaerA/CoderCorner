import React, { useState, useEffect, useRef } from "react";
import usxeThrottle from "./useThrottle";

export const Textbox = () => {
  const [inputText, setInputText] = useState<string | null>(null);
  const throttledValue = useThrottle(inputText, 300);
  const [outputText, setOutputText] = useState<string | null>(null);

  useEffect(() => {
    setOutputText(throttledValue);
  }, [throttledValue]);

  return (
    <>
      <input type="textbox" onChange={(e) => setInputText(e.target.value)} />
      <div className="output">{outputText}</div>
    </>
  );
};

// import { useState, useEffect, useRef } from "react";

export function useThrottle<T>(value: T, wait = 500) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastInvoked = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Date.now() - lastInvoked.current > wait) {
        setThrottledValue(value);
        lastInvoked.current = Date.now();
      }
    }, wait - (Date.now() - lastInvoked.current));
    return () => clearInterval(timer);
  }, [value, wait]);

  return throttledValue;
}
