import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { TimerContext } from "../contexts/TimerContext";
import { useContext } from "react";

export default function QuizHeader({
  title,
  score = false,
  handleBack,
  totalScore,
  quizCategory,
  type,
}) {
  const { isDark } = useContext(TimerContext);

  return (
    <header
      className={`flex items-center justify-between rounded-lg border-b px-4 py-3 shadow-sm ${
        isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <Link
          to={type === "quizInfo" ? "/quizzes" : `/quizDetails/${quizCategory}`}
          className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition ${
            isDark
              ? "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
          onClick={() => {
            localStorage.clear();
          }}
        >
          <ArrowLeft
            className="py-0.4 cursor-pointer rounded-lg border px-1"
            size={30}
            strokeWidth={2}
          />
        </Link>

        <h2
          className={`text-lg font-semibold ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      </div>

      {score && (
        <div className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600">
          <span>Correct: </span>
          <span>{totalScore}</span>
        </div>
      )}
    </header>
  );
}
