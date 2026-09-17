import {
  ArrowLeft,
  Atom,
  ChartNoAxesCombined,
  FlaskRoundIcon,
  Sigma,
  Telescope,
  Volleyball,
} from "lucide-react";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router";

export default function Quizzes() {
  return (
    <main className="space-y-8 px-4 py-2">
      <h1 className="text-center text-3xl font-extrabold tracking-wide">
        Quizzes
      </h1>
      <Link
        className="group flex w-fit cursor-pointer items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-600 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
        to={'/'}
      >
        <ArrowLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1"
        />
        Back
      </Link>
      <h2 className="text-2xl sm:text-center">Explore quizzes</h2>
      <div className="grid w-full max-w-[700px] grid-cols-2 gap-2 sm:mx-auto sm:gap-6">
        <CategoryCard quizIcon={<Sigma size={50} />} quizCategory={"Math"} />
        <CategoryCard quizIcon={<Atom size={50} />} quizCategory={"Physics"} />
        <CategoryCard
          disabled={true}
          quizIcon={<FlaskRoundIcon size={50} />}
          quizCategory={"Chemistry"}
        />
        <CategoryCard
          disabled={true}
          quizIcon={<Volleyball size={50} />}
          quizCategory={"Sport"}
        />
        <CategoryCard
          disabled={true}
          quizIcon={<ChartNoAxesCombined size={50} />}
          quizCategory={"Economic"}
        />
        <CategoryCard
          disabled={true}
          quizIcon={<Telescope size={50} />}
          quizCategory={"Astronomy"}
        />
      </div>
    </main>
  );
}
