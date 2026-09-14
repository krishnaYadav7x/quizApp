import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import QuizHeader from "../components/QuizHeader";
import QuizFooter from "../components/QuizFooter";
import { Clock12Icon } from "lucide-react";
import { questions } from "../data.js/quizData";
import { TimerContext } from "../contexts/TimerContext";
import { remainingTime } from "../contexts/TimerContext";

export default function QuizAttempt() {
  const { quizCategory } = useParams();
  const [index, setIndex] = useState(0);
  const {
    startTimer,
    setStartTimer,
    timeRunning,
    setTimeRunning,
    count,
    setCount,
  } = useContext(TimerContext);

  const handleNextBtnClick = () => {
    setIndex((prev) => prev + 1);
    setStartTimer(remainingTime)
    setCount((prev)=>prev+1)
  };

  // useEffect(() => {
  //   setStartTimer((prev) => {
  //     if (prev !== 0) return;
  //   });
  //   setIndex((prev) => prev + 1);
  //   setStartTimer(remainingTime);
  //   setCount((prev) => prev + 1);
  // }, [startTimer]);

  const handleBack = ()=>{
    setTimeRunning(false)
  }
   

  const handlePreviousBtnClick = () => {
    setIndex((prev) => prev - 1);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[800px] flex-col bg-white">
      <QuizHeader title="Quiz" submit={true} handleBack={handleBack} />

      <main className="flex flex-1 flex-col gap-8 px-4 py-5">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Mathematical Reasoning
          </h2>

          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-600">
              {quizCategory}
            </p>

            <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-600">
              <Clock12Icon size={18} />
              <span>00: {startTimer}</span>
            </p>
          </div>

          <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full w-full origin-left bg-indigo-500`}
              style={
                {
                  // transform: `scaleX(${(10 - startTimer) / 10})`,
                }
              }
            />
          </div>

          <div className="inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-semibold">
            <span className="text-indigo-600">{index + 1}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">
              {questions[quizCategory].length}
            </span>
          </div>
        </div>

        <div className="space-y-5">
          <p className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 text-[18px] leading-7 font-semibold text-slate-800 shadow-sm">
            {questions[quizCategory][index].question}
          </p>

          <ul className="flex flex-col gap-3">
            {questions[quizCategory][index].options.map((option, id) => {
              return (
                <li
                  key={id}
                  className="cursor-pointer rounded-xl border border-slate-200 bg-white px-5 py-4 text-[15px] font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md"
                >
                  <span className="mr-2 font-bold text-indigo-500">
                    {String.fromCharCode(65 + id)}.
                  </span>

                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <div className="px-4 pb-3">
        <QuizFooter
          isLink={false}
          buttonName="Next"
          leftButton="Previous"
          handleNextClick={handleNextBtnClick}
          handlePrevClick={handlePreviousBtnClick}
          index={index}
          quizCategory={quizCategory}
        />
      </div>
    </div>
  );
}
