import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f172a] border-t border-gray-800 pt-12 pb-6 px-6 relative">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold text-yellow-500">Tazmin.Suva</h2>

        <div className="flex gap-6 text-2xl text-white">
          <a href="https://github.com/TazminSuva" target="_blank">
            <FaGithub className="hover:text-yellow-500" />
          </a>
          <a href="https://www.linkedin.com/in/tazmin-suva-3b18b0361/" target="_blank">
            <FaLinkedin className="hover:text-yellow-500" />
          </a>
          <a href="https://www.facebook.com/tazminsuva" target="_blank">
            <FaFacebook className="hover:text-yellow-500" />
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-gray-400 text-sm">
        © 2025 Tazmin Suva
      </p>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}
