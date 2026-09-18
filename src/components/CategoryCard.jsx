import { Link } from "react-router";
import { TimerContext } from "../contexts/TimerContext";
import { useContext } from "react";

export default function CategoryCard({
  quizIcon,
  quizCategory,
  disabled,
  
}) {
    const { isDark, setIsDark } = useContext(TimerContext);
  const cardClass = `
    group flex flex-col items-center gap-3
    rounded-2xl border
    p-5 shadow-sm transition-all duration-300

    ${
      isDark
        ? "border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100"
        : "border-indigo-100 bg-gradient-to-br from-indigo-50 to-white"
    }

    ${
      disabled
        ? isDark
          ? "cursor-not-allowed opacity-60"
          : "cursor-not-allowed opacity-60"
        : isDark
          ? "cursor-pointer hover:-translate-y-1 hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-950/40"
          : "cursor-pointer hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
    }
  `;

  if (disabled) {
    return (
      <div className={cardClass}>
        <div className={isDark ? "text-slate-400" : "text-slate-700"}>
          {quizIcon}
        </div>

        <p
          className={`font-medium ${
            isDark ? "text-slate-300" : "text-gray-700"
          }`}
        >
          {quizCategory}
        </p>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isDark ? "bg-slate-800 text-slate-500" : "bg-gray-100 text-gray-500"
          }`}
        >
          In Progress
        </span>
      </div>
    );
  }

  return (
    <Link to={`/quizDetails/${quizCategory}`} className={cardClass}>
      <div
        className={`transition-transform duration-300 group-hover:scale-110 ${
          isDark ? "text-slate-100" : "text-slate-900"
        }`}
      >
        {quizIcon}
      </div>

      <p
        className={`font-medium ${isDark ? "text-slate-200" : "text-gray-700"}`}
      >
        {quizCategory}
      </p>
    </Link>
  );
}
