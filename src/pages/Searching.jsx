import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ArrayBars from "../components/ArrayBars";
import ControlPanel from "../components/ControlPanel";
import SpeedSlider from "../components/SpeedSlider";
import ComplexityCard from "../components/ComplexityCard";

const Searching = () => {

  const [array, setArray] = useState([
    5, 12, 18, 23, 30, 35, 42, 48, 55, 63
  ]);

  const [target, setTarget] = useState("");

  const [speed, setSpeed] = useState(300);

  const [isSearching, setIsSearching] = useState(false);

  // Generate Sorted Array
  const generateArray = () => {

    const arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }

    arr.sort((a, b) => a - b);

    setArray(arr);
  };

  // Placeholder Functions

  const startSearching = () => {

    if (target === "") {
      alert("Please enter a target value.");
      return;
    }

    alert("Searching animation will be added soon.");

    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  const pauseSearching = () => {
    alert("Pause feature coming soon.");
  };

  const resetArray = () => {
    generateArray();
    setTarget("");
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
            🔍 Searching Visualizer
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Learn Linear Search and Binary Search with interactive
            visual animations.
          </p>

        </div>

        {/* Search Box */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 mb-10">

          <label className="block mb-3 text-lg font-semibold">
            Enter Target Number
          </label>

          <div className="flex gap-4">

            <input
              type="number"
              placeholder="e.g. 35"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-cyan-500"
            />

            <button
              onClick={startSearching}
              className="px-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:scale-105 transition"
            >
              Search
            </button>

          </div>

        </div>

        {/* Array */}

        <ArrayBars
          array={array}
          comparing={[]}
          swapping={[]}
          sorted={[]}
        />

        {/* Controls */}

        <div className="mt-10">

          <ControlPanel
            generateArray={generateArray}
            startSorting={startSearching}
            pauseSorting={pauseSearching}
            resetArray={resetArray}
            speed={speed}
            setSpeed={setSpeed}
            isSorting={isSearching}
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
            algorithm="Binary Search"
            best="O(1)"
            average="O(log n)"
            worst="O(log n)"
            space="O(1)"
            description="Binary Search works only on sorted arrays. It repeatedly divides the search space into halves until the target element is found."
          />

        </div>

      </div>

    </div>
  );
};

export default Searching;