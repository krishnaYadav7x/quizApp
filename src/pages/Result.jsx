import { Link, useLocation } from "react-router";
import ResultBox from "../components/ResultBox";
import ResultPageActionBtn from "../components/ResultPageActionBtn";

export default function Result() {
  const startTime = () => {
    setStartTimer(remainingTime);
    setTimeRunning(true);
  };
  const { state } = useLocation();

  console.log(state.score, state.questions, state.quizCategory);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[800px] flex-col justify-center gap-6 px-4 py-6">
      <section className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="mb-2">{state.quizCategory}</p>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            style={{
              transform: `scaleX(${state.score / state.questions[state.quizCategory].length})`,
            }}
            className="h-full origin-left transform rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
          ></div>
        </div>
        <p>
          <span className="text-sm text-slate-500">Total score: </span>
          <span className="mt-1 text-3xl font-bold text-slate-900">
            {state.score}
          </span>
          <span className="text-lg font-medium text-slate-400">
            /{state.questions[state.quizCategory].length}
          </span>
        </p>
        <p className="text-sm leading-6 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <ResultBox
          title={"Correct Answer"}
          mark={state.score}
          type={"correct"}
        />
        <ResultBox
          title={"Wrong Answer"}
          mark={state.questions[state.quizCategory].length - state.score}
          type={"wrong"}
        />
      </section>
      <section className="flex w-full flex-col gap-3">
        <ResultPageActionBtn
          redirect={`/quizAttempt/${state.quizCategory}`}
          title={"Retry"}
          type={"retry"}
          startTime={startTime}
        />
        <ResultPageActionBtn redirect={"/"} title={"Back to home page"} />
      </section>
    </main>
  );
}
