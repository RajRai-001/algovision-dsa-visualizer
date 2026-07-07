import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ArrayBars from "../components/ArrayBars";
import ControlPanel from "../components/ControlPanel";
import SpeedSlider from "../components/SpeedSlider";
import ComplexityCard from "../components/ComplexityCard";

import { linearSearch } from "../algorithms/linearSearch";
import { binarySearch } from "../algorithms/binarySearch";

const Searching = () => {

  const [array, setArray] = useState([
    5, 12, 18, 23, 30, 35, 42, 48, 55, 63
  ]);

  const [target, setTarget] = useState("");

  const [speed, setSpeed] = useState(300);

  const [isSearching, setIsSearching] = useState(false);

  const [algorithm, setAlgorithm] = useState("Linear Search");

  const [comparing, setComparing] = useState([]);

  const [found, setFound] = useState([]);


         const searchDetails = {
         "Linear Search": {
           best: "O(1)",
           average: "O(n)",
           worst: "O(n)",
           space: "O(1)",
           description:
             "Linear Search checks each element one by one until the target is found.",
         },
       
         "Binary Search": {
           best: "O(1)",
           average: "O(log n)",
           worst: "O(log n)",
           space: "O(1)",
           description:
             "Binary Search repeatedly divides a sorted array into halves to locate the target efficiently.",
         },
    };

  // Generate Sorted Array
      const generateArray = () => {
    
      const arr = [];
    
      for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
      }
    
      arr.sort((a, b) => a - b);
    
      setArray(arr);
    
      setTarget("");
    
      setComparing([]);
    
      setFound([]);

    };

  // Placeholder Functions

        const startSearching = async () => {
    
      if (target.trim() === "") {
        alert("Please enter a target value.");
        return;
      }
    
      setIsSearching(true);
    
      setComparing([]);
      setFound([]);
    
      let index;
    
      if (algorithm === "Linear Search") {
    
        index = await linearSearch(
          array,
          target,
          setComparing,
          setFound,
          speed
        );
    
      } else {
    
        index = await binarySearch(
          array,
          target,
          setComparing,
          setFound,
          speed
        );
    
      }
    
      setIsSearching(false);
    
      if (index === -1) {
        alert("❌ Element not found!");
      } else {
        alert(`✅ Element found at index ${index}`);
      }

   };

  const pauseSearching = () => {
    alert("Pause feature coming soon.");
  };

        const resetArray = () => {
        generateArray();
      
        setTarget("");
      
        setComparing([]);
      
        setFound([]);
      };

  return (
    <div className="bg-gradient-to-br
from-[#042c1d]
via-[#1a2c59]
to-[#6e85b5] text-white min-h-screen flex">

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


        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 mb-6">

      <label className="block mb-3 text-lg font-semibold">
        Select Algorithm
      </label>
    
        <select
          value={algorithm}
          onChange={(e) => {
        
            setAlgorithm(e.target.value);
        
            setComparing([]);
        
            setFound([]);
        
          }}
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none focus:border-cyan-500"
        >
        <option>Linear Search</option>
        <option>Binary Search</option>
      </select>
    
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

          <ArrayBars
            array={array}
            comparing={comparing}
            swapping={[]}
            sorted={found}
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
            algorithm={algorithm}
            best={searchDetails[algorithm].best}
            average={searchDetails[algorithm].average}
            worst={searchDetails[algorithm].worst}
            space={searchDetails[algorithm].space}
            description={searchDetails[algorithm].description}
          />
        </div>

      </div>

    </div>
  );
};

export default Searching;