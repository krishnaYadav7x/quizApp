import { Link, useLocation } from "react-router";
import ResultBox from "../components/ResultBox";
import ResultPageActionBtn from "../components/ResultPageActionBtn";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

export default function Result() {
  const startTime = () => {
    setStartTimer(remainingTime);
    setTimeRunning(true);
  };

  const { state } = useLocation();
  const { isDark } = useContext(TimerContext);

  console.log(state.score, state.questions, state.quizCategory);

  return (
    <div className={` flex min-h-[100vh] w-full flex-col justify-center gap-6 px-4 py-6 ${
          isDark ? "bg-slate-800 text-slate-100" : "bg-white"
        }`}>
      <main
        className={`mx-auto flex min-h-[70vh] max-w-[800px] w-full flex-col justify-center gap-6 px-4 py-6 rounded-md ${
          isDark ? "bg-slate-900 text-slate-100" : "bg-white"
        }`}
      >
        <section
          className={`space-y-5 rounded-xl border p-5 shadow-sm ${
            isDark
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-white"
          }`}
        >
          <p className="mb-2">{state.quizCategory}</p>

          <div
            className={`h-3 overflow-hidden rounded-full ${
              isDark ? "bg-slate-700" : "bg-slate-100"
            }`}
          >
            <div
              style={{
                transform: `scaleX(${state.score / state.questions[state.quizCategory].length})`,
              }}
              className="h-full origin-left transform rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
            ></div>
          </div>

          <p>
            <span className="text-sm text-slate-500">Total score: </span>

            <span
              className={`mt-1 text-3xl font-bold ${
                isDark ? "text-slate-100" : "text-slate-900"
              }`}
            >
              {state.score}
            </span>

            <span className="text-lg font-medium text-slate-400">
              /{state.questions[state.quizCategory].length}
            </span>
          </p>

          <p className="text-sm leading-6 text-slate-500">
            Quote according to marks will be here
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
            // startTime={startTime}
          />

          <ResultPageActionBtn
            redirect={"/"}
            title={"Back to home page"}
            // startTime={startTime}
          />
        </section>
      </main>
    </div>
  );
}
