import { Link } from "react-router";


export default function CategoryCard({
  quizIcon,
  quizCategory,

}) {
  return (
    <Link
      to={`/quizDetails/${quizCategory}`}
      className="flex flex-col items-center gap-4 rounded-xl bg-indigo-50 p-4 shadow-sm transition hover:bg-indigo-100"
    >
      {quizIcon}
      <p>{quizCategory}</p>
    </Link>
  );
}
