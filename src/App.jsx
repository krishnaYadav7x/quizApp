import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router'
import TimerProvider from './contexts/TimerContext';


function App() {


  return (
    <TimerProvider>
      <Outlet />
    </TimerProvider>
  );
}

export default App
