import { ArrowLeft } from 'lucide-react'



export default function QuizHeader({
  title,
  score = false,
  handleBack,
  totalScore,
  // clearLocalStorageData,
}) {
  return (
    <header className="flex items-center justify-between rounded-lg border-b border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <button
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          onClick={() => {
            history.back();
            handleBack();
            localStorage.clear();
          }}
        >
          <ArrowLeft
            className="py-0.4 cursor-pointer rounded-lg border px-1"
            size={30}
            strokeWidth={2}
          />
        </button>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
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
