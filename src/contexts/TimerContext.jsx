import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TimerContext = createContext();
export const remainingTime = 30;

export default function TimerProvider({ children }) {
  const [startTimer, setStartTimer] = useLocalStorage(
    "startTimer",
    remainingTime,
  );

  const [timeRunning, setTimeRunning] = useLocalStorage("timeRunning", false);
  const [count, setCount] = useLocalStorage("count", 0);
 

  useEffect(() => {
    if (!timeRunning) return;
    const intervalId = setInterval(() => {
      setStartTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeRunning, count, startTimer]);

  return (
    <TimerContext.Provider
      value={{
        startTimer,
        setStartTimer,
        count,setCount,
        timeRunning,
        setTimeRunning,
      
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
