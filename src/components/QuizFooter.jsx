import React from 'react'
import { Link } from 'react-router';
import { questions } from '../data.js/quizData';


export default function QuizFooter({
  index,
  time,
  buttonName,
  quizCategory,
  isLink,
  leftButton,
  handleNextBtnClick,
  handlePreviousBtnClick,
})  {
  console.log(quizCategory);
  return (
    <div className="mt-auto mb-2 flex justify-between rounded-full bg-slate-800 px-4 py-3 shadow-md">
      {isLink ? (
        <div className="rounded-full border border-slate-300 bg-white px-5 py-2 text-[18px] font-medium text-slate-700 hover:bg-slate-50">
          {time}
        </div>
      ) : (
        <button
          onClick={handlePreviousBtnClick} disabled={index===0}
          className="cursor-pointer rounded-lg bg-gray-400 px-4 py-2 text-white"
        >
          {leftButton}
        </button>
      )}
      {isLink ? (
        <Link
          to={`/QuizAttempt/${quizCategory}`}
          className="cursor-pointer rounded-full bg-indigo-500 px-6 py-2 text-[18px] font-semibold text-white shadow-sm hover:bg-indigo-600"
        >
          {buttonName}
        </Link>
      ) : (
        <button
        disabled = {index===questions[quizCategory].length-1}
          onClick={handleNextBtnClick}
          className="cursor-pointer rounded-lg bg-indigo-500 px-4 py-2 text-white"
        >
          {buttonName}
        </button>
      )}
    </div>
  );
}
