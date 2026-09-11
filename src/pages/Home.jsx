import { Moon } from "lucide-react";
import { Link } from "react-router";

const imgUrl = new URL("../assets/logo.png", import.meta.url).href;

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_35%,#312e81_0%,transparent_35%),linear-gradient(135deg,#0f172a,#1e1b4b)] text-white">
      <header className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl">
            <img src={imgUrl} alt={imgUrl} width={50} />
            <h1>Brainstorm</h1>
          </div>
          <div className="flex cursor-pointer items-center gap-1 rounded border px-2 py-1">
            <Moon />
            Dark
          </div>
        </div>
      </header>

      <main className="flex min-h-[70vh] flex-col items-center justify-center space-y-8">
        <h2>Test your knowledge</h2>
        <p>Challenge yourself. Test your knowledge.</p>
        <Link
          to={"/quizzes"}
          className="cursor-pointer rounded-lg bg-indigo-500 px-7 py-3 font-semibold hover:bg-indigo-600"
        >
          Continue
        </Link>
      </main>
    </div>
  );
}
