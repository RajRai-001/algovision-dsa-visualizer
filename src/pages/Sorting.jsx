import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ArrayBars from "../components/ArrayBars";
import ControlPanel from "../components/ControlPanel";
import ComplexityCard from "../components/ComplexityCard";
import SpeedSlider from "../components/SpeedSlider";

import { bubbleSort } from "../algorithms/bubbleSort";

import { selectionSort } from "../algorithms/selectionSort";

import { insertionSort } from "../algorithms/insertionSort";

import { mergeSort } from "../algorithms/mergeSort";

import { quickSort } from "../algorithms/quickSort";

import { linearSearch } from "../algorithms/linearSearch";
import { binarySearch } from "../algorithms/binarySearch";


const Sorting = () => {

  const [array, setArray] = useState([
    30, 70, 45, 90, 20, 80, 50, 65, 10, 55
  ]);

  

  const [speed, setSpeed] = useState(300);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");

  const [comparing, setComparing] = useState([]);

  const [swapping, setSwapping] = useState([]);

  const [sorted, setSorted] = useState([]);

  const [isSorting, setIsSorting] = useState(false);

  // Generate Random Array
  const generateArray = () => {

    const newArray = [];

    for (let i = 0; i < 10; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 10);
    }

    setArray(newArray);
  };

  // Temporary Functions
  const startSorting = async () => {

  setIsSorting(true);

  setComparing([]);
  setSwapping([]);
  setSorted([]);

  if (algorithm === "Bubble Sort") {

    await bubbleSort(
      array,
      setArray,
      setComparing,
      setSwapping,
      setSorted,
      speed
    );

  }

  else if (algorithm === "Selection Sort") {

    await selectionSort(
      array,
      setArray,
      setComparing,
      setSwapping,
      setSorted,
      speed
    );

  }

  else if (algorithm === "Insertion Sort") {

    await insertionSort(
    array,
    setArray,
    setComparing,
    setSwapping,
    setSorted,
    speed
    );

  }

   else if (algorithm === "Merge Sort") {

    await mergeSort(
    array,
    setArray,
    setComparing,
    setSwapping,
    setSorted,
    speed
    );

  }

  else if (algorithm === "Quick Sort") {

    await quickSort(
    array,
    setArray,
    setComparing,
    setSwapping,
    setSorted,
    speed
    );

  }

  setIsSorting(false);

};

  const pauseSorting = () => {
    alert("Pause feature coming soon.");
  };

  const resetArray = () => {
    generateArray();
  };
  const algorithmDetails = {
  "Bubble Sort": {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    description:
      "Bubble Sort repeatedly compares adjacent elements and swaps them whenever they are in the wrong order.",
  },

  "Selection Sort": {
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    description:
      "Selection Sort repeatedly selects the minimum element and places it in its correct position.",
  },

  "Insertion Sort": {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    description:
      "Insertion Sort builds the sorted array one element at a time.",
  },

  "Merge Sort": {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)",
    space: "O(n)",
    description:
      "Merge Sort recursively divides the array and merges sorted halves.",
  },

  "Quick Sort": {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
    description:
      "Quick Sort partitions the array around a pivot element.",
  },
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
            📊 Sorting Visualizer
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Learn sorting algorithms through beautiful
            interactive animations.
          </p>

        </div>

        {/* Algorithm Selector */}

<div className="mb-8">

  <label className="block mb-2 text-lg font-semibold">
    Select Algorithm
  </label>

  <select
    value={algorithm}
    onChange={(e) => setAlgorithm(e.target.value)}
    className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3"
  >
    <option>Bubble Sort</option>
    <option>Selection Sort</option>
    <option>Insertion Sort</option>
    <option>Merge Sort</option>
    <option>Quick Sort</option>
  </select>

</div>


        {/* Array */}

        <ArrayBars
         array={array}
         comparing={comparing}
         swapping={swapping}
         sorted={sorted}
        />
        

        {/* Control Panel */}

        <div className="mt-10">

          <ControlPanel
            generateArray={generateArray}
            startSorting={startSorting}
            pauseSorting={pauseSorting}
            resetArray={resetArray}
            speed={speed}
            setSpeed={setSpeed}
            isSorting={isSorting}
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
           best={algorithmDetails[algorithm].best}
           average={algorithmDetails[algorithm].average}
           worst={algorithmDetails[algorithm].worst}
           space={algorithmDetails[algorithm].space}
            description={algorithmDetails[algorithm].description}
          />

        </div>

      </div>

    </div>
  );
};

export default Sorting;