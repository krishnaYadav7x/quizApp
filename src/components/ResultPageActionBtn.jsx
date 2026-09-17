import React from 'react'
import { Link } from 'react-router';

export default function ResultPageActionBtn({isLink=false,title}) {
  return isLink ? (
    <Link
      to={"/"}
      className="block w-full rounded-lg border border-slate-200 bg-white py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"
    >
     {title}
    </Link>
  ) : (
    <button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 py-3 font-medium text-white shadow-sm transition hover:opacity-90">
      {title}
    </button>
  );
}
