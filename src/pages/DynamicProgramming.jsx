import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ControlPanel from "../components/ControlPanel";
import SpeedSlider from "../components/SpeedSlider";
import ComplexityCard from "../components/ComplexityCard";

const DynamicProgramming = () => {

  const [speed, setSpeed] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  const generateExample = () => {
    alert("Generate Example Coming Soon");
  };

  const startVisualization = () => {
    setIsRunning(true);

    alert("Dynamic Programming Visualization Coming Soon");

    setTimeout(() => {
      setIsRunning(false);
    }, 1000);
  };

  const pauseVisualization = () => {
    alert("Pause Feature Coming Soon");
  };

  const resetVisualization = () => {
    alert("Reset Visualization");
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 p-8">

        {/* Heading */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            📈 Dynamic Programming Visualizer
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Learn Dynamic Programming with interactive
            visualizations and step-by-step execution.
          </p>

        </div>

        {/* Algorithm Selector */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 mb-10">

          <label className="block text-lg font-semibold mb-3">
            Select Algorithm
          </label>

          <select
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-cyan-500"
          >
            <option>Fibonacci</option>
            <option>Climbing Stairs</option>
            <option>House Robber</option>
            <option>0/1 Knapsack</option>
            <option>Longest Common Subsequence</option>
            <option>Longest Increasing Subsequence</option>
          </select>

        </div>

        {/* Visualization */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10">

          <h2 className="text-2xl font-bold mb-10">
            📊 DP Table Visualization
          </h2>

          <div className="grid grid-cols-6 gap-4">

            {[0, 1, 1, 2, 3, 5].map((value, index) => (

              <div
                key={index}
                className="h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex flex-col justify-center items-center shadow-lg"
              >

                <p className="text-sm text-cyan-100">
                  dp[{index}]
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {value}
                </h2>

              </div>

            ))}

          </div>

          {/* Formula */}

          <div className="mt-12 bg-slate-800 rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-3">
              💡 Formula
            </h3>

            <p className="text-gray-300 text-lg">
              dp[i] = dp[i - 1] + dp[i - 2]
            </p>

          </div>

        </div>

        {/* Controls */}

        <div className="mt-10">

          <ControlPanel
            generateArray={generateExample}
            startSorting={startVisualization}
            pauseSorting={pauseVisualization}
            resetArray={resetVisualization}
            speed={speed}
            setSpeed={setSpeed}
            isSorting={isRunning}
          />

        </div>

        {/* Speed Slider */}

        <div className="mt-10">

          <SpeedSlider
            speed={speed}
            setSpeed={setSpeed}
          />

        </div>

        {/* Complexity */}

        <div className="mt-10">

          <ComplexityCard
            algorithm="Fibonacci (Dynamic Programming)"
            best="O(n)"
            average="O(n)"
            worst="O(n)"
            space="O(n)"
            description="Dynamic Programming solves problems by storing previously computed results. Instead of recalculating subproblems, it reuses answers from memory (memoization) or a table (tabulation), making algorithms significantly faster."
          />

        </div>

      </div>

    </div>
  );
};

export default DynamicProgramming;