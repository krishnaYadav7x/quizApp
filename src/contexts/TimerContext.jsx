import { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();
export const remainingTime = 10;

export default function TimerProvider({ children }) {
  const [startTimer, setStartTimer] = useState(remainingTime);

  const [timeRunning, setTimeRunning] = useState(false);
  const [count,setCount] = useState(0)
 

  useEffect(() => {
    if (!timeRunning) return;
    const intervalId = setInterval(() => {
      console.log(startTimer);
      setStartTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeRunning,count]);

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
