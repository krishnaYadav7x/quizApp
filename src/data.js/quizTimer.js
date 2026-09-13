import { createContext } from "react";

export const quizTimer = () => {
  let startTime = 10;
  const intervalId = setInterval(() => {
    console.log(startTime);
    startTime--;
    if (startTime === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

