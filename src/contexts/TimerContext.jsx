import React, {  createContext, useEffect, useState } from "react";

export const QuizTimerContext = createContext();

export default function TimerProvider({ children }) {
  const [startTimer, setStartTimer] = useState(null);
  const [isRunning,setIsRunning] = useState(false)
  

  function handleStartTime() {
    setStartTimer(10);
  }


    useEffect(() => {
      if(!isRunning) return
      if (startTimer === null) return;
      const intervalId = setInterval(() => {
        setStartTimer((prev) => {
          if (prev === 0) {
            clearInterval(intervalId);
            setIsRunning(false)
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        console.log("unmount");
        clearInterval(intervalId);
      };
    }, [isRunning]);


  return (
    <QuizTimerContext.Provider
      value={{ startTimer, setStartTimer, handleStartTime, isRunning ,setIsRunning}}
    >
      {children}
    </QuizTimerContext.Provider>
  );
}
