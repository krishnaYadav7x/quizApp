import React from 'react'

export default function ResultBox({title,mark,type}) {
  return (
    <div
      className={
        type === "correct"
          ? "rounded-xl border border-emerald-100 bg-emerald-50 p-5"
          : "rounded-xl border border-rose-100 bg-rose-50 p-5"
      }
    >
      <span
        className={
          type === "correct"
            ? "text-2xl font-bold text-emerald-600"
            : "text-2xl font-bold text-rose-600"
        }
      >
        {mark}
      </span>
      <p className='text-slate-600 mt-1 text-sm'>{title}</p>
    </div>
  );
}
