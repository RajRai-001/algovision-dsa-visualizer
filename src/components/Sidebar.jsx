import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    path: "/",
    icon: "🏠",
  },
  {
    title: "Sorting",
    path: "/sorting",
    icon: "📊",
  },
  {
    title: "Searching",
    path: "/searching",
    icon: "🔍",
  },
  {
    title: "Trees",
    path: "/trees",
    icon: "🌳",
  },
  {
    title: "Graphs",
    path: "/graphs",
    icon: "🕸️",
  },
  {
    title: "Dynamic Programming",
    path: "/dynamic-programming",
    icon: "📈",
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-72 min-h-screen bg-slate-950 border-r border-slate-800 sticky top-0">

      {/* Logo */}

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          🧠 AlgoVision
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Learn Algorithms Visually
        </p>

      </div>

      {/* Navigation */}

      <div className="flex-1 p-5">

        <p className="text-gray-500 uppercase text-xs mb-4 tracking-widest">
          Navigation
        </p>

        <div className="space-y-3">

          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
                }`
              }
            >
              <span className="text-2xl">{item.icon}</span>

              <span className="font-medium">
                {item.title}
              </span>

            </NavLink>
          ))}

        </div>

      </div>

      {/* Bottom Card */}

      <div className="p-5 border-t border-slate-800">

        <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 p-5">

          <h3 className="text-xl font-bold">
            🚀 Keep Learning
          </h3>

          <p className="text-sm mt-3 text-cyan-100">
            Practice algorithms every day to improve your problem-solving skills.
          </p>

          <button className="mt-5 w-full bg-white text-blue-700 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
            Start Practice
          </button>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;