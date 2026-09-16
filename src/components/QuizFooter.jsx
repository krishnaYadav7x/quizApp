import React, { useContext } from "react";
import { Link } from "react-router";
import { questions } from "../data.js/quizData";


export default function QuizFooter({
  index,
  time,
  buttonName,
  quizCategory,
  isLink=false,
  leftButton,
  handleStartTimer,
  handleNextClick,
  handlePrevClick,

}) {


  return (
    <div className="mt-auto mb-2 flex justify-between rounded-full bg-slate-800 px-4 py-3 shadow-md">
      {isLink ? (
        <div className="rounded-full border border-slate-300 bg-white px-5 py-2 text-[18px] font-medium text-slate-700 hover:bg-slate-50">
          {time}
        </div>
      ) : (
        <button
          onClick={() => {
            handlePrevClick();
          }}
          disabled={index === 0}
          className={`rounded-lg px-4 py-2 font-medium transition-all duration-200 ${
            index === 0
              ? "cursor-not-allowed bg-slate-200 text-slate-400"
              : "cursor-pointer bg-slate-100 text-slate-700 shadow-sm hover:bg-white hover:shadow"
          }`}
        >
          {leftButton}
        </button>
      )}
      {isLink ? (
        <Link
          onClick={handleStartTimer}
          to={`/QuizAttempt/${quizCategory}`}
          className="cursor-pointer rounded-full bg-indigo-500 px-6 py-2 text-[18px] font-semibold text-white shadow-sm hover:bg-indigo-600"
        >
          {buttonName}
        </Link>
      ) : (
        <button
          disabled={index === questions[quizCategory].length - 1}
          onClick={() => {
            handleNextClick();
          }}
          className={`rounded-lg px-4 py-2 text-white ${
            index === questions[quizCategory].length - 1
              ? "cursor-not-allowed bg-gray-300 text-gray-500"
              : "cursor-pointer bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          {buttonName}
        </button>
      )}
    </div>
  );
}
