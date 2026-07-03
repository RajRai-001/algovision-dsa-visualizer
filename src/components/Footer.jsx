import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              🧠 AlgoVision
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Learn Data Structures & Algorithms through
              interactive animations and beautiful visualizations.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/sorting"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                📊 Sorting
              </Link>

              <Link
                to="/searching"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                🔍 Searching
              </Link>

              <Link
                to="/trees"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                🌳 Trees
              </Link>

              <Link
                to="/graphs"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                🕸 Graphs
              </Link>

              <Link
                to="/dynamic-programming"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                📈 Dynamic Programming
              </Link>

            </div>

          </div>

          {/* About */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              About
            </h3>

            <p className="text-gray-400 leading-7">
              AlgoVision is built to help students,
              programmers and interview aspirants
              understand algorithms visually instead
              of memorizing them.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition text-xl"
              >
                🐙
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-blue-500 flex items-center justify-center transition text-xl"
              >
                💼
              </a>

              <a
                href="mailto:example@gmail.com"
                className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-purple-500 flex items-center justify-center transition text-xl"
              >
                📧
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {year} AlgoVision. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;