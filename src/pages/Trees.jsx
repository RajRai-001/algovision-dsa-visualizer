import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ControlPanel from "../components/ControlPanel";
import SpeedSlider from "../components/SpeedSlider";
import ComplexityCard from "../components/ComplexityCard";

const Trees = () => {

  const [speed, setSpeed] = useState(300);

  const [isRunning, setIsRunning] = useState(false);

  const generateTree = () => {
    alert("Generate Random Tree (Coming Soon)");
  };

  const startTraversal = () => {
    setIsRunning(true);

    alert("Tree Traversal Animation Coming Soon");

    setTimeout(() => {
      setIsRunning(false);
    }, 1000);
  };

  const pauseTraversal = () => {
    alert("Pause Feature Coming Soon");
  };

  const resetTree = () => {
    alert("Reset Tree");
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
            🌳 Tree Visualizer
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Learn Binary Search Tree and AVL Tree
            through interactive visualization.
          </p>

        </div>

        {/* Tree Type */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 mb-10">

          <label className="block text-lg font-semibold mb-3">

            Select Tree

          </label>

          <select
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-cyan-500"
          >

            <option>Binary Search Tree</option>

            <option>AVL Tree</option>

          </select>

        </div>

        {/* Tree Visualization */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10">

          <h2 className="text-2xl font-bold mb-10">
            🌳 Tree Structure
          </h2>

          <div className="flex justify-center">

            <div className="text-center">

              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold mx-auto">
                50
              </div>

              <div className="flex justify-center gap-32 mt-12">

                <div>

                  <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center font-bold mx-auto">
                    30
                  </div>

                  <div className="flex gap-14 mt-10">

                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                      20
                    </div>

                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                      40
                    </div>

                  </div>

                </div>

                <div>

                  <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center font-bold mx-auto">
                    70
                  </div>

                  <div className="flex gap-14 mt-10">

                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                      60
                    </div>

                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                      80
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Controls */}

        <div className="mt-10">

          <ControlPanel
            generateArray={generateTree}
            startSorting={startTraversal}
            pauseSorting={pauseTraversal}
            resetArray={resetTree}
            speed={speed}
            setSpeed={setSpeed}
            isSorting={isRunning}
          />

        </div>

        {/* Speed */}

        <div className="mt-10">

          <SpeedSlider
            speed={speed}
            setSpeed={setSpeed}
          />

        </div>

        {/* Complexity */}

        <div className="mt-10">

          <ComplexityCard
            algorithm="Binary Search Tree"
            best="O(log n)"
            average="O(log n)"
            worst="O(n)"
            space="O(n)"
            description="A Binary Search Tree stores elements in sorted order. Every node's left child contains smaller values while the right child contains larger values. BST allows efficient searching, insertion and deletion."
          />

        </div>

      </div>

    </div>
  );
};

export default Trees;