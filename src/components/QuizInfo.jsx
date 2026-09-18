import React, { useContext } from "react";
import QuizHeader from "./QuizHeader";
import { useParams } from "react-router";
const mathImg = new URL("../assets/math.png", import.meta.url).href;
import { quizImages } from "../data.js/quizData";
import { instructions } from "../data.js/quizData";
import QuizFooter from "./QuizFooter";
import { TimerContext } from "../contexts/TimerContext";
import { remainingTime } from "../contexts/TimerContext";

export default function QuizInfo() {
  const { quizCategory } = useParams();
  const { timeRunning, setTimeRunning, setStartTimer, isDark } =
    useContext(TimerContext);

  const handleStartTimer = () => {
    setStartTimer(remainingTime);
    setTimeRunning(true);
  };

  const handleBack = () => {
    return history.back();
  };

  return (
    <div
      className={`flex min-h-screen w-full w-full flex-col ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      <div
        className={`mx-auto flex min-h-screen w-full max-w-[800px] flex-col`}
      >
        <QuizHeader
          title={"Start Quiz"}
          submit={false}
          handleBack={handleBack}
          type={"quizInfo"}
        />

        <main className="flex-1 space-y-7 pt-8 pb-6">
          <p
            className={`mt-1.5 px-4 text-sm leading-6 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Put your understanding of this concept to test by answering a few
            MCQs.
          </p>

          <div className="px-4">
            <div
              className={`overflow-hidden rounded-lg border border-indigo-500 ${
                isDark ? "bg-slate-900" : "bg-white"
              }`}
            >
              <img
                src={quizImages[quizCategory]}
                alt={mathImg}
                className="h-60 w-full object-cover sm:h-100"
              />

              <div className="px-4 py-6">
                <p className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                  Subject:
                </p>{" "}
                <p
                  className={`mt-0.5 text-base font-bold ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  {quizCategory}
                </p>
              </div>
            </div>

            <p className={`my-4 ${isDark ? "text-slate-300" : ""}`}>
              <span>Total Time</span>{" "}
              <span
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  isDark
                    ? "bg-indigo-950 text-indigo-400"
                    : "bg-indigo-50 text-indigo-600"
                }`}
              >
                5 min
              </span>
            </p>

            <div>
              <h2 className={`font-bold ${isDark ? "text-slate-100" : ""}`}>
                Instruction:
              </h2>

              <ul className="space-y-3">
                {instructions.Guidelines?.map((guide, index) => {
                  return (
                    <li
                      className={`flex gap-3 text-sm leading-6 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                      key={index}
                    >
                      {guide}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </main>

        <QuizFooter
          time={"5:00 min"}
          buttonName={"Start Quiz"}
          quizCategory={quizCategory}
          isLink={true}
          handleStartTimer={handleStartTimer}
        />
      </div>
    </div>
  );
}
