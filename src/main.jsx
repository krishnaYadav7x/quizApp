import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Quizzes from './pages/Quizzes.jsx';
import QuizDetails from './pages/QuizDetails.jsx';
import QuizAttempt from "./pages/QuizAttempt.jsx";
import Result from './pages/Result.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/quizzes", Component: Quizzes },
      { path: "/quizDetails/:quizCategory", Component: QuizDetails },
      { path: "/QuizAttempt/:quizCategory", Component: QuizAttempt },
      { path: "/result", Component: Result },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
