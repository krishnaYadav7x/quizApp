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

export default function Quizzes() {
  return (
    <main className="space-y-8 px-4 py-2">
      <h1 className="text-center text-3xl font-extrabold tracking-wide">
        Quizzes
      </h1>
      <div
        className="flex w-full max-w-20 cursor-pointer items-center gap-1 rounded-lg border px-2 py-1"
        onClick={() => history.back()}
      >
        <ArrowLeft size={30} />
        Back
      </div>
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
