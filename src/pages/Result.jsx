import { Link } from "react-router";
import ResultBox from "../components/ResultBox";
import ResultPageActionBtn from "../components/ResultPageActionBtn";


export default function Result() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-[800px] flex-col justify-center gap-6 px-4 py-6">
      <section className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        </div>
        <p>
          <span className="text-sm text-slate-500">Total score: </span>
          <span className="mt-1 text-3xl font-bold text-slate-900">8</span>
          <span className="text-lg font-medium text-slate-400">/10</span>
        </p>
        <p className="text-sm leading-6 text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <ResultBox title={"Correct Answer"} mark={8} type={"correct"} />
        <ResultBox title={"Wrong Answer"} mark={2} type={"wrong"} />
      </section>
      <section className="flex w-full flex-col gap-3">
        <ResultPageActionBtn isLink={false} title={"Retry"} />
        <ResultPageActionBtn isLink={true} title={"Back to home page"} />
      </section>
    </main>
  );
}
