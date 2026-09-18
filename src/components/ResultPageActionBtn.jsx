import React, { useContext } from 'react'
import { Link } from 'react-router';
import { remainingTime, TimerContext } from '../contexts/TimerContext';

export default function ResultPageActionBtn({redirect,title,type}) {
  const { setStartTimer, setTimeRunning } = useContext(TimerContext);
  return (
    <Link
      onClick={()=>{
        localStorage.clear();
        if(type==='retry'){
          setStartTimer(remainingTime);
          setTimeRunning(true);
        }
        // setTimeRunning(false)
        
      }}
      to={redirect}
      className={`${type === "retry" ? "block w-full rounded-lg border border-slate-200 bg-white bg-gradient-to-r from-blue-500 to-indigo-500 py-3 text-center font-medium text-white transition hover:bg-slate-50" : "block w-full rounded-lg border border-slate-200 bg-white py-3 text-center font-medium text-slate-700 transition hover:bg-slate-50"}`}
    >
      {title}
    </Link>
  ); 
}
