import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex justify-center items-center text-2xl">
            🧠
          </div>

          <div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AlgoVision
            </h1>

            <p className="text-xs text-gray-400">
              Learn Algorithms Visually
            </p>
          </div>

        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/sorting"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Sorting
          </NavLink>

          <NavLink
            to="/searching"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Searching
          </NavLink>

          <NavLink
            to="/trees"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Trees
          </NavLink>

          <NavLink
            to="/graphs"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            Graphs
          </NavLink>

          <NavLink
            to="/dynamic-programming"
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold"
                : "text-gray-300 hover:text-cyan-400 transition"
            }
          >
            DP
          </NavLink>

        </div>

        {/* Right Side */}

        <div className="hidden lg:flex items-center gap-3">

          <div className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-sm font-semibold">
            🚀 Interactive
          </div>

          <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400 text-purple-300 text-sm font-semibold">
            🎯 Visual Learning
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;