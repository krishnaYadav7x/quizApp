import { Link } from "react-router";

export default function CategoryCard({ quizIcon, quizCategory, disabled }) {
  const cardClass = `
    group flex flex-col items-center gap-3
    rounded-2xl border border-indigo-100
    bg-gradient-to-br from-indigo-50 to-white
    p-5 shadow-sm transition-all duration-300
    ${
      disabled
        ? "cursor-not-allowed opacity-60"
        : "cursor-pointer hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
    }
  `;

  if (disabled) {
    return (
      <div className={cardClass}>
        <div>{quizIcon}</div>

        <p className="font-medium text-gray-700">{quizCategory}</p>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
          In Progress
        </span>
      </div>
    );
  }

  return (
    <Link to={`/quizDetails/${quizCategory}`} className={cardClass}>
      <div className="transition-transform duration-300 group-hover:scale-110">
        {quizIcon}
      </div>

      <p className="font-medium text-gray-700">{quizCategory}</p>
    </Link>
  );
}
