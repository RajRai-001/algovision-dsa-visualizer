import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm mb-6">
              🚀 Interactive Learning Platform
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

              Learn

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

                Data Structures

              </span>

              & Algorithms

            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-8">

              AlgoVision helps students understand algorithms through
              beautiful animations, interactive visualizations and
              step-by-step execution.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/sorting"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
              >
                🚀 Start Learning
              </Link>

              <Link
                to="/searching"
                className="px-8 py-4 rounded-xl border border-gray-600 hover:border-cyan-400 hover:text-cyan-300 transition duration-300"
              >
                🔍 Explore Algorithms
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-16">

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
                <p className="text-gray-400 mt-2">Algorithms</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
                <p className="text-gray-400 mt-2">Interactive</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">Free</h2>
                <p className="text-gray-400 mt-2">Learning</p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg">

              {/* Window Header */}

              <div className="flex gap-2 px-5 py-4 border-b bg-gradient-to-br
              from-[#042c1d]
              via-[#1a2c59]
              to-[#6e85b5 border-slate-700">

                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

              </div>

              {/* Visualization */}

              <div className="bg-gradient-to-br
                  from-[#042c1d]
                  via-[#1a2c59]
                  to-[#6e85b5 p-8">

                <h3 className="text-xl font-bold mb-8 text-center">
                  Bubble Sort Visualization
                </h3>

                <div className="flex items-end justify-center gap-3 h-64">

                  <div className="w-8 h-24 bg-cyan-400 rounded-t"></div>

                  <div className="w-8 h-40 bg-blue-500 rounded-t"></div>

                  <div className="w-8 h-20 bg-purple-500 rounded-t"></div>

                  <div className="w-8 h-52 bg-cyan-400 rounded-t"></div>

                  <div className="w-8 h-32 bg-blue-500 rounded-t"></div>

                  <div className="w-8 h-48 bg-purple-500 rounded-t"></div>

                  <div className="w-8 h-16 bg-cyan-400 rounded-t"></div>

                </div>

                <div className="flex justify-center gap-3 mt-8">

                  <button className="px-4 py-2 rounded-lg bg-cyan-500">
                    ▶ Start
                  </button>

                  <button className="px-4 py-2 rounded-lg bg-slate-700">
                    ⏸ Pause
                  </button>

                  <button className="px-4 py-2 rounded-lg bg-slate-700">
                    🔄 Reset
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;